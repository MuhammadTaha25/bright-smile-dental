#!/usr/bin/env python3
"""
Non-AI featured-image quality enhancer for blog posts.

Takes the small, low-resolution preview image returned by the Canva
generate-image connector (historically ~200x112px) and produces a clean,
sharpened 960x540 (16:9) JPEG suitable for `public/images/blog/<slug>.jpg`,
using only deterministic classical image-processing techniques (no neural
network / super-resolution model):

  1. Progressive Lanczos upscaling (two small hops instead of one big jump)
  2. Edge-preserving bilateral denoise (removes interpolation/JPEG mush)
  3. Unsharp-mask deconvolution-style sharpening
  4. CLAHE local-contrast enhancement on the luminance channel
  5. Final Lanczos supersample down to the exact target size
  6. A light finishing sharpen + contrast/color pass

This intentionally does NOT use any ML upscaler (ESPCN/EDSR/Real-ESRGAN/etc).
Those can hallucinate texture that may look "AI-ish" or inconsistent; this
pipeline only ever works with information already present in the source
image, so results stay honest to the source while looking as crisp as a
200x112-ish source reasonably can.

Usage:
    python3 scripts/enhance_blog_image.py <input_image> <output_image> \
        [--width 960] [--height 540]

Requires: opencv-python (cv2), Pillow, numpy.
"""
import argparse

import cv2
from PIL import Image, ImageEnhance, ImageFilter


def enhance(src_path: str, out_path: str, width: int = 960, height: int = 540) -> None:
    img = cv2.imread(src_path)
    if img is None:
        raise FileNotFoundError(f"Could not read image: {src_path}")
    h, w = img.shape[:2]

    # Step 1: progressive Lanczos upscaling
    step1 = cv2.resize(img, (w * 2, h * 2), interpolation=cv2.INTER_LANCZOS4)
    step2 = cv2.resize(step1, (w * 4, h * 4), interpolation=cv2.INTER_LANCZOS4)

    # Step 2: edge-preserving denoise
    denoised = cv2.bilateralFilter(step2, d=7, sigmaColor=35, sigmaSpace=35)

    # Step 3: gentle unsharp-mask deconvolution-style sharpening (avoids halos)
    gaussian = cv2.GaussianBlur(denoised, (0, 0), sigmaX=2.5)
    sharpened = cv2.addWeighted(denoised, 1.25, gaussian, -0.25, 0)

    # Step 4: local contrast boost via CLAHE on the luminance channel only
    lab = cv2.cvtColor(sharpened, cv2.COLOR_BGR2LAB)
    l, a, b = cv2.split(lab)
    clahe = cv2.createCLAHE(clipLimit=1.3, tileGridSize=(8, 8))
    l2 = clahe.apply(l)
    enhanced = cv2.cvtColor(cv2.merge((l2, a, b)), cv2.COLOR_LAB2BGR)

    # Step 5: supersample down to the exact final size
    final = cv2.resize(enhanced, (width, height), interpolation=cv2.INTER_LANCZOS4)

    # Step 6: light finishing sharpen + mild contrast/color pass
    final_rgb = cv2.cvtColor(final, cv2.COLOR_BGR2RGB)
    pil_im = Image.fromarray(final_rgb)
    pil_im = pil_im.filter(ImageFilter.UnsharpMask(radius=1.2, percent=45, threshold=3))
    pil_im = ImageEnhance.Contrast(pil_im).enhance(1.05)
    pil_im = ImageEnhance.Color(pil_im).enhance(1.04)
    pil_im.save(out_path, quality=92)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("input", help="Path to the small source image (e.g. the Canva preview)")
    parser.add_argument("output", help="Path to write the enhanced JPEG to")
    parser.add_argument("--width", type=int, default=960)
    parser.add_argument("--height", type=int, default=540)
    args = parser.parse_args()

    enhance(args.input, args.output, args.width, args.height)
    print(f"Saved enhanced {args.width}x{args.height} image to {args.output}")


if __name__ == "__main__":
    main()
