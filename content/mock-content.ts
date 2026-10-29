// TODO: replace with real Sanity CMS queries once NEXT_PUBLIC_SANITY_PROJECT_ID is set.
// This file is the single mock data source so swapping in Sanity later only requires
// changing /lib/sanity-client.ts call sites, not every page.

export type FAQ = { question: string; answer: string };

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string[];
  heroImageAlt: string;
  faqs: FAQ[];
};

export const services: Service[] = [
  {
    slug: "dental-implants",
    name: "Dental Implants",
    shortDescription: "Permanent, natural-looking replacements for missing teeth.",
    description: [
      "Dental implants replace both the root and the crown of a missing tooth, giving you a result that looks, feels, and functions like a natural tooth. We use titanium implant posts that fuse with your jawbone over a few months, creating a stable foundation for a custom-matched crown.",
      "Most patients are candidates for implants regardless of how long ago they lost a tooth. During your consultation we take a 3D scan to evaluate bone density and plan exact implant placement before any drilling begins.",
    ],
    heroImageAlt: "Dentist showing a dental implant model to a patient",
    faqs: [
      {
        question: "How long does the implant process take?",
        answer:
          "From placement to final crown, most patients complete treatment in 3-6 months, which allows time for the implant to fully integrate with the jawbone.",
      },
      {
        question: "Are dental implants painful?",
        answer:
          "The placement procedure is done under local anesthesia (sedation options available), and most patients report less discomfort than they expected — typically managed with over-the-counter pain relievers for a few days.",
      },
      {
        question: "Does insurance cover dental implants?",
        answer:
          "Coverage varies widely by plan. Our team verifies your benefits before treatment and walks you through financing options on our Insurance & Financing page.",
      },
    ],
  },
  {
    slug: "invisalign",
    name: "Invisalign",
    shortDescription: "Straighten your teeth discreetly with clear, removable aligners.",
    description: [
      "Invisalign uses a series of custom, clear aligners to gradually shift your teeth into alignment — no metal brackets or wires. Each set of aligners is worn for about two weeks before moving to the next in the series.",
      "Treatment typically takes 6-18 months depending on the complexity of your case. Because aligners are removable, you can eat, brush, and floss normally throughout treatment.",
    ],
    heroImageAlt: "Close-up of a clear Invisalign aligner being placed on teeth",
    faqs: [
      {
        question: "How is Invisalign different from traditional braces?",
        answer:
          "Invisalign aligners are clear, removable, and far less noticeable than metal braces. They're also easier to keep clean since you take them out to eat and brush.",
      },
      {
        question: "Will Invisalign work for my case?",
        answer:
          "Invisalign treats most mild-to-moderate alignment issues, including crowding, spacing, and some bite problems. We'll confirm candidacy with a complimentary consultation and digital scan.",
      },
      {
        question: "How much does Invisalign cost?",
        answer:
          "Cost depends on case complexity and treatment length, typically comparable to traditional braces. We provide an exact quote after your consultation and digital scan, and walk you through insurance and financing options.",
      },
    ],
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    shortDescription: "Professional-grade whitening for noticeably brighter results.",
    description: [
      "Our in-office whitening treatment uses a higher-concentration whitening gel than anything available over the counter, activated under a specialized light for faster, more even results — typically several shades brighter in one visit.",
      "We also offer custom take-home whitening trays for patients who prefer a gradual approach or want touch-up kits for maintenance.",
    ],
    heroImageAlt: "Before and after comparison of professionally whitened teeth",
    faqs: [
      {
        question: "How long do whitening results last?",
        answer:
          "Results typically last 6-12 months depending on your diet and oral hygiene habits. Avoiding coffee, red wine, and tobacco helps results last longer.",
      },
      {
        question: "Is professional whitening safe for sensitive teeth?",
        answer:
          "Yes — we assess your enamel and gum health beforehand and can adjust gel concentration or recommend desensitizing treatments for sensitive patients.",
      },
      {
        question: "How much does professional teeth whitening cost?",
        answer:
          "In-office whitening is a one-time, same-visit treatment, while take-home trays are priced separately for ongoing touch-ups. Exact pricing depends on which option fits your goals — we quote this at your consultation, before any treatment begins.",
      },
    ],
  },
  {
    slug: "root-canal-therapy",
    name: "Root Canal Therapy",
    shortDescription: "Relieve pain and save an infected tooth from extraction.",
    description: [
      "Root canal therapy removes infected or inflamed pulp from inside a tooth, then cleans, disinfects, and seals the space to prevent further infection — relieving pain and saving the natural tooth.",
      "Modern root canal treatment is far more comfortable than its reputation suggests. Most patients report the procedure feels similar to getting a standard filling.",
    ],
    heroImageAlt: "Dental x-ray used to diagnose a tooth needing root canal therapy",
    faqs: [
      {
        question: "Is a root canal painful?",
        answer:
          "The procedure itself is performed under local anesthesia and is typically no more uncomfortable than a filling. The infection causing your pain beforehand is usually far more painful than the treatment.",
      },
      {
        question: "What happens after a root canal?",
        answer:
          "Most teeth need a crown afterward to restore strength and protect against future fracture. We'll walk you through next steps at your visit.",
      },
      {
        question: "How much does a root canal cost?",
        answer:
          "Cost varies by tooth location and case complexity, and whether a crown is needed afterward. Most PPO insurance plans cover a portion of root canal treatment — we verify your benefits and provide a clear estimate before starting.",
      },
    ],
  },
  {
    slug: "emergency-dentistry",
    name: "Emergency Dentistry",
    shortDescription: "Same-day care for dental pain, injuries, and urgent problems.",
    description: [
      "We reserve same-day appointment slots for dental emergencies — severe toothaches, broken or knocked-out teeth, lost fillings or crowns, and facial swelling. Call us as soon as a problem happens; many issues are far easier to treat (and less costly) the sooner we see you.",
      "After hours, our answering service will connect you with the on-call dentist for guidance until we can see you.",
    ],
    heroImageAlt: "Dentist examining a patient with a dental emergency",
    faqs: [
      {
        question: "What counts as a dental emergency?",
        answer:
          "Severe or sudden tooth pain, a knocked-out or broken tooth, uncontrolled bleeding, facial swelling, or a lost crown/filling that's causing pain all warrant an emergency call.",
      },
      {
        question: "Do you offer same-day emergency appointments?",
        answer:
          "Yes, we hold same-day slots specifically for emergencies. Call our office as early as possible so we can get you in quickly.",
      },
    ],
  },
  {
    slug: "veneers",
    name: "Veneers",
    shortDescription: "Thin, custom shells that transform the look of your smile.",
    description: [
      "Porcelain veneers are thin, custom-fabricated shells bonded to the front of your teeth to correct chips, gaps, discoloration, or minor misalignment — often completed in just two visits.",
      "Each veneer is shade-matched and shaped specifically for your face and smile, so results look natural rather than uniform or artificial.",
    ],
    heroImageAlt: "Dentist comparing porcelain veneer shade samples",
    faqs: [
      {
        question: "How long do veneers last?",
        answer:
          "With proper care, porcelain veneers typically last 10-15 years or longer before needing replacement.",
      },
      {
        question: "Are veneers reversible?",
        answer:
          "Veneers require removing a thin layer of enamel, so the process is not reversible. We'll discuss whether veneers or a non-invasive alternative is the better fit for your goals.",
      },
      {
        question: "How much do veneers cost?",
        answer:
          "Pricing depends on how many teeth you're treating and the shade/shape customization involved. We provide an itemized quote at your consultation, along with available financing options.",
      },
    ],
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  content: string[];
  featuredImage?: string;
  featuredImageAlt?: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "signs-you-need-a-root-canal",
    title: "5 Signs You Might Need a Root Canal",
    excerpt:
      "Persistent tooth pain isn't something to ignore. Here are the warning signs that mean it's time to call your dentist.",
    publishedAt: "2026-09-02",
    author: "Dr. Sarah Bennett, DDS",
    content: [
      "Tooth pain that lingers after eating something hot or cold, pain that wakes you up at night, or a tooth that's become sensitive to pressure are all signs worth getting checked out promptly.",
      "1. Persistent or throbbing pain. 2. Sensitivity to hot and cold that lingers. 3. Swollen or tender gums near a specific tooth. 4. A tooth that's darkened in color. 5. A recurring pimple-like bump on the gums.",
      "If you're noticing any of these symptoms, don't wait — call our office. Catching an infection early almost always means a simpler, less costly treatment.",
    ],
  },
  {
    slug: "teeth-grinding-bruxism-causes-treatment",
    title: "Teeth Grinding at Night: Causes, Symptoms & Treatment",
    excerpt:
      "Grinding your teeth at night? Learn the common causes of bruxism, the warning signs to watch for, and treatment options that protect your smile.",
    publishedAt: "2026-10-21",
    author: "Dr. Michael Osei, DMD",
    content: [
      "Bruxism — the medical term for teeth grinding and clenching — is far more common than most people realize, and many patients don't even know they're doing it. Sleep bruxism happens unconsciously at night, so the first clue is often a sore jaw in the morning or a partner mentioning the grinding sound coming from across the bed. Occasional grinding during a stressful week usually isn't a concern, but when it becomes a regular habit it can wear down tooth enamel and lead to bigger dental problems over time.",
      "Several things can trigger teeth grinding. Stress and anxiety are the most common culprits, since clenching is a physical response to tension that often shows up most strongly during sleep, when you have no conscious control over it. A bite that's slightly misaligned, missing or crooked teeth, and certain sleep disorders like sleep apnea can also contribute — in fact, grinding is sometimes one of the first signs that points a dentist toward an undiagnosed sleep issue. Lifestyle factors play a role too: high caffeine or alcohol intake, smoking, and certain antidepressant medications have all been linked to increased grinding, and children can experience it as well, often outgrowing it as their adult teeth come in.",
      "The signs aren't always obvious at first, which is part of why bruxism often goes unnoticed for months or years. Watch for a dull headache or sore jaw when you wake up, increased tooth sensitivity to hot or cold, teeth that look flattened, chipped, or worn down along the biting edges, and tightness or fatigue in the jaw muscles during the day. Some patients also develop small indentations on the inside of their cheek or tongue from the constant pressure. If any of these sound familiar, it's worth mentioning at your next visit even if nothing feels urgent yet — we can often spot early wear patterns on an exam before you notice symptoms yourself.",
      "Grinding that goes untreated doesn't just wear down enamel — it can lead to cracked or fractured teeth, loosened teeth, receding gums, and chronic jaw pain known as temporomandibular joint (TMJ) disorder. Because the damage happens gradually and mostly while you sleep, many patients are surprised to learn how much wear has already occurred by the time it's caught on an exam. In more advanced cases, worn-down teeth can even change the way your bite fits together, making the grinding cycle harder to break on its own.",
      "The good news is that bruxism is very manageable once it's identified. A custom-fitted night guard is the most common and effective treatment — it creates a cushion between your upper and lower teeth so clenching can't damage them while you sleep, and it's far more comfortable and durable than anything available over the counter. Depending on the underlying cause, we may also recommend stress-management strategies, a bite adjustment to correct an uneven contact point, or a referral for a sleep study if we suspect sleep apnea is involved. Regular checkups let us catch early wear patterns before they turn into cracked teeth or costly restorative work down the road.",
      "If you're waking up with jaw soreness, headaches, or you've noticed your teeth looking more worn than they used to, don't wait for it to become a bigger problem. Schedule an exam with our team and we'll take a close look at your bite and enamel wear to figure out what's going on — and get you fitted for a custom night guard if that's the right next step for protecting your smile.",
    ],
  },
  {
    slug: "bad-breath-causes-and-how-to-fix-it",
    title: "How to Get Rid of Bad Breath: Real Causes and Fixes",
    excerpt:
      "Mints only mask it. Here's what actually causes chronic bad breath and the dentist-backed habits that get rid of it for good.",
    publishedAt: "2026-10-21",
    author: "Dr. Sarah Bennett, DDS",
    featuredImage: "/images/blog/bad-breath-causes-and-how-to-fix-it.jpg",
    featuredImageAlt: "Woman smiling while holding a toothbrush in a bright, modern bathroom",
    content: [
      "Bad breath, or halitosis, is one of the most common concerns patients bring up, and one of the most misunderstood. Most people assume it comes from the stomach, but the vast majority of chronic bad breath actually starts in the mouth. The good news is that once you know the real cause, it's almost always fixable, usually without any dramatic changes to your routine.",
      "The most common culprit is bacteria. Odor-causing bacteria naturally live on your tongue, between your teeth, and along the gumline, and they produce sulfur compounds as they break down food particles and dead cells. The back of the tongue is a particular hot spot, which is why brushing alone often isn't enough. Dry mouth makes the problem worse, since saliva is what naturally rinses bacteria away during the day; if you breathe through your mouth, take certain medications, or simply aren't drinking enough water, odor-causing bacteria have an easier time building up. Strong foods like garlic and onion, tobacco use, and untreated gum disease are also frequent contributors, and less commonly, chronic bad breath can trace back to sinus issues, tonsil stones, or a digestive condition.",
      "If you're already brushing regularly and the smell keeps coming back, it's usually one of a few specific gaps. Mouthwash and mints only cover up odor for an hour or two rather than removing its source. Many people skip cleaning the tongue entirely, even though that's where a large share of the bacteria lives. And if dry mouth is the underlying driver, no amount of brushing will fully solve it until the dryness itself is addressed.",
      "The fixes that actually work are straightforward. Brush twice a day and floss once, making sure to clean along the gumline where food and bacteria collect, not just the visible surfaces of your teeth. Add a tongue scraper or brush the tongue itself as part of your routine. Stay hydrated throughout the day, and chew sugar-free gum when you can't brush, since it stimulates saliva flow. Cutting back on tobacco and strong-odor trigger foods before important moments helps too. Most importantly, keep up with regular cleanings, since these remove the plaque and tartar buildup that a toothbrush can't reach on its own, and treat any early gum disease before it becomes a bigger, harder-to-reverse source of odor.",
      "If you've tightened up your home routine and persistent bad breath still isn't budging, that's worth bringing up at your next visit rather than just living with it. Ongoing halitosis despite good hygiene can point to gum disease below the gumline, a cavity or old filling trapping bacteria, chronic dry mouth from a medication, or something outside the mouth entirely that's worth ruling out. A dental exam can usually pinpoint the actual source in one visit, rather than you guessing at mints and mouthwash indefinitely.",
      "If chronic bad breath has been bothering you, schedule a cleaning and exam with our office. We'll take a close look at your teeth, gums, and tongue, identify what's actually causing it, and put together a simple plan to help you feel confident about your breath again.",
    ],
  },
  {
    slug: "electric-toothbrush-vs-manual-which-is-better",
    title: "Electric Toothbrush vs Manual: Which Is Better for Your Teeth?",
    excerpt:
      "Electric toothbrush or manual? Here's what the research actually shows about plaque removal, gum health, and which one is the right fit for you.",
    publishedAt: "2026-10-22",
    author: "Dr. Michael Osei, DMD",
    featuredImage: "/images/blog/electric-toothbrush-vs-manual-which-is-better.jpg",
    featuredImageAlt: "Smiling woman brushing her teeth with an electric toothbrush at a bright bathroom sink",
    content: [
      "It's one of the most common questions we hear at checkups: is an electric toothbrush actually better than a manual one, or is that just clever marketing? The honest answer is that both can get your teeth genuinely clean — but the research does show some real differences in results, and which one is the better fit depends more on your habits and dexterity than on price or brand name.",
      "A manual toothbrush, used correctly, is perfectly capable of removing plaque and keeping your gums healthy. The catch is in that phrase \"used correctly.\" Good manual brushing technique means a soft-bristled brush, a 45-degree angle at the gumline, gentle short strokes, and a full two minutes covering every surface — the outside, inside, and chewing surfaces of every tooth. In practice, most people brush for closer to 45 seconds and tend to press too hard, which wears away enamel and irritates gums without actually cleaning any better. Manual brushes are inexpensive, require no charging or replacement parts beyond the brush head, and give you full control over pressure and angle, which some patients genuinely prefer.",
      "Electric toothbrushes remove some of that guesswork. Clinical studies comparing the two consistently find that electric brushes — particularly rotating-oscillating and sonic models — reduce plaque and gingivitis somewhat more effectively than manual brushing over the long term, largely because they do more brush strokes per minute than a hand ever could and many models include built-in two-minute timers and quadrant alerts that correct the most common manual-brushing shortfall: not brushing long enough. Pressure sensors on many electric models also stop you from scrubbing too hard, which protects enamel and gum tissue over years of use.",
      "Certain patients tend to see the biggest benefit from switching to electric. Anyone with limited hand dexterity — including patients with arthritis, carpal tunnel, or other conditions that make small repetitive motions difficult — often finds an electric brush far easier to use effectively. Patients with braces, bridges, or dental implants also tend to get a more thorough clean around hardware and restorations with the oscillating or sonic motion. Kids and teens often brush longer and more consistently with an electric brush simply because the built-in timer makes two minutes feel shorter and more game-like. On the other hand, if you already have solid manual technique, brush for the full two minutes without fail, and don't press too hard, a quality manual toothbrush will serve you just as well.",
      "Whichever you choose, a few habits matter more than the brush itself. Use a soft-bristled brush head and replace it (or the electric brush head) every three months or sooner if the bristles start to fray. Pair brushing with daily flossing, since neither a manual nor an electric brush reaches between teeth. Use a fluoride toothpaste, and avoid rinsing with water immediately after brushing so the fluoride has time to work. And don't brush immediately after eating something acidic — wait about 30 minutes to avoid brushing softened enamel.",
      "If you're not sure which option fits your routine, or you want us to check whether your current technique is actually getting your teeth clean, bring it up at your next visit. We're happy to watch your brushing technique, recommend a specific electric model if one would help, and make sure whichever brush you're using is actually doing its job. Schedule a cleaning and exam with our team today.",
    ],
  },
  {
    slug: "how-to-floss-properly-step-by-step-guide",
    title: "How to Floss Properly: A Step-by-Step Guide for Healthier Gums",
    excerpt:
      "Most people floss wrong. Learn the proper flossing technique dentists recommend to actually remove plaque and protect your gums.",
    publishedAt: "2026-10-23",
    author: "Dr. Sarah Bennett, DDS",
    featuredImage: "/images/blog/how-to-floss-properly-step-by-step-guide.jpg",
    featuredImageAlt: "Smiling woman flossing her teeth in front of a bathroom mirror",
    content: [
      "Most people floss at some point in their routine, but a surprising number are doing it in a way that barely helps. Flossing is not just a box to check before bed; it is the only part of your routine that reaches the tight space between teeth where a toothbrush bristle simply cannot go. Done correctly, daily flossing removes the plaque and trapped food particles that cause cavities between teeth and the gum irritation that leads to gingivitis. Done hastily or with the wrong motion, it mostly just stirs bacteria around without actually clearing it out.",
      "Proper technique starts with using enough floss, about 18 inches, so you can work with a clean section for each tooth instead of reusing the same stretched, frayed piece all the way around your mouth. Wind most of the floss around your middle fingers, leaving an inch or two to work with between your thumbs and index fingers. Guide the floss between two teeth using a gentle back-and-forth motion rather than snapping it down, which can nick and irritate the gums. Once it reaches the gumline, curve the floss into a C-shape against the side of one tooth and slide it gently up and down a few times, then repeat against the neighboring tooth before moving to the next gap.",
      "A few habits separate effective flossing from motions that just feel like flossing. Go beneath the gumline slightly on each side rather than only running the floss across the visible surface, since that is where plaque tends to collect and cause the most irritation. Use a fresh section of floss every two or three teeth so you are not redepositing bacteria you just removed. And do not skip the back molars just because they are harder to reach; those teeth are just as prone to decay and gum problems, and a floss holder or interdental pick can make reaching them much easier if your fingers do not fit comfortably that far back.",
      "Bleeding gums are one of the most common reasons people assume they are flossing wrong or decide to stop altogether, but mild bleeding in the first week or two of a consistent flossing habit is usually a sign of early gum inflammation finally being disturbed, not damage from the floss itself. If bleeding persists well beyond that adjustment period, feels painful, or is accompanied by swelling or a receding gumline, that is worth mentioning at your next cleaning rather than assuming it will resolve on its own, since it can point toward gum disease that benefits from a professional cleaning and closer monitoring.",
      "If traditional string floss feels awkward, there are good alternatives as long as they are used consistently. Floss picks offer the same C-shape cleaning action with an easier grip for many people, water flossers can be effective for patients with braces, bridges, or limited dexterity, and interdental brushes work well for wider gaps between teeth. The best flossing tool is simply the one you will actually use every day; a slightly less perfect technique performed daily beats perfect technique performed once a week.",
      "Flossing is one of the simplest habits with an outsized impact on your long-term oral health, and most patients just need a quick technique check to get the full benefit from it. If you are not sure whether your flossing routine is actually doing its job, or you are dealing with bleeding or sensitivity that is not improving, bring it up at your next visit. Schedule a cleaning and exam with our team and we will walk through proper technique with you chairside and make sure your gums are as healthy as they look.",
    ],
  },
  {
    slug: "canker-sores-causes-symptoms-and-relief",
    title: "Canker Sores: Causes, Symptoms, and How to Find Relief",
    excerpt:
      "Canker sores are painful but usually harmless. Learn what causes them, how to ease the pain, and when to see a dentist.",
    publishedAt: "2026-10-24",
    author: "Dr. Michael Osei, DMD",
    featuredImage: "/images/blog/canker-sores-causes-symptoms-and-relief.jpg",
    featuredImageAlt: "Smiling woman drinking a glass of water in a bright kitchen",
    content: [
      "Canker sores, small and painful ulcers that form inside the mouth, are one of the most common oral health complaints we see, and one of the most frequently confused with something else. Unlike cold sores, which appear on the outside of the lips and are caused by the herpes simplex virus, canker sores, known clinically as aphthous ulcers, only occur inside the mouth, on the cheeks, lips, tongue, or soft palate, and they are not contagious. Most people develop at least one canker sore at some point in their life, and while they are rarely a sign of anything serious, understanding what triggers them can help you avoid repeat flare-ups and know when it's worth bringing up at a dental visit.",
      "The exact cause of canker sores is not fully understood, but several triggers show up again and again. Minor injury inside the mouth is one of the most common: accidentally biting your cheek, a rough edge on a filling or orthodontic appliance, or brushing too aggressively can all irritate the delicate tissue enough to start a sore. Acidic or spicy foods, like citrus, tomatoes, and coffee, don't cause canker sores on their own but can make the area more prone to breakouts and more painful once a sore forms. Stress and lack of sleep are frequent culprits as well, and many patients notice a pattern between high-stress periods and new outbreaks. Hormonal changes, certain nutritional deficiencies, particularly vitamin B12, iron, zinc, or folate, food sensitivities, and toothpaste containing sodium lauryl sulfate have also been linked to recurring canker sores in some people.",
      "A canker sore typically starts with a tingling or burning sensation a day or so before it actually appears. Once visible, it looks like a small, round or oval ulcer with a white or yellowish center and a red, inflamed border, usually no larger than a few millimeters across. They tend to be most painful during the first few days, especially when eating anything acidic, salty, or crunchy, and the discomfort gradually fades as the sore heals. Most canker sores heal on their own within one to two weeks without leaving a scar.",
      "While you wait for a canker sore to heal, there is a lot you can do to manage the discomfort. Rinsing gently with warm salt water or an alcohol-free antimicrobial mouthwash several times a day helps keep the area clean and can speed healing. Over-the-counter topical gels containing benzocaine numb the area temporarily, and products with a protective paste create a barrier that shields the sore while you eat. Avoiding acidic, spicy, salty, or rough-textured foods until it heals makes a noticeable difference in day-to-day comfort, and a cold compress or ice chip can take the edge off when pain flares up. If canker sores are a recurring problem for you, switching to a toothpaste without sodium lauryl sulfate is worth trying.",
      "Most canker sores need nothing more than time and basic home care, but a few signs mean it's worth having one checked out. A sore larger than about a centimeter, one that hasn't started healing after two to three weeks, sores that keep coming back frequently, or pain severe enough to interfere with eating and drinking are all reasons to schedule a visit. In those cases, we can rule out other causes, recommend a stronger topical or oral treatment to speed healing, and check whether an underlying nutritional deficiency or other condition might be contributing.",
      "If you're dealing with a canker sore that isn't improving, or you're getting them often enough that it's affecting your day-to-day comfort, don't just wait it out. Schedule an appointment with our team and we'll take a look, help manage the pain, and figure out what's triggering them so you can spend less time dealing with mouth sores and more time enjoying your favorite foods.",
    ],
  },
  {
    slug: "gum-disease-prevention-daily-habits",
    title: "Gum Disease Prevention: Daily Habits That Protect Your Gums",
    excerpt:
      "Gum disease is largely preventable. Learn the daily habits dentists recommend to protect your gums and catch problems early.",
    publishedAt: "2026-10-26",
    author: "Dr. Sarah Bennett, DDS",
    content: [
      "Gum disease is one of the most common conditions we see, and also one of the most preventable. It develops quietly, often without any pain in its early stages, which is exactly why so many patients are surprised to learn they have it. The earliest stage, gingivitis, causes redness, swelling, and occasional bleeding along the gumline, and it is fully reversible with good home care and a professional cleaning. Left unaddressed, though, it can progress to periodontitis, a more serious infection that breaks down the bone and connective tissue holding your teeth in place. The good news is that a handful of consistent daily habits can prevent gum disease from ever taking hold, or stop it in its tracks if it is just getting started.",
      "The foundation of gum disease prevention is simple, consistent mechanical cleaning. Brush twice a day for a full two minutes with a soft-bristled brush, angling the bristles slightly toward the gumline rather than straight at the tooth surface, since that is where plaque collects most aggressively. Floss once a day to clear the space between teeth that a brush cannot reach, curving the floss into a gentle C-shape against each tooth rather than snapping it straight down. If you tend to skip flossing because it feels tedious, a water flosser or interdental brush is a perfectly good substitute as long as you use it daily. An antimicrobial or fluoride mouthwash can add an extra layer of protection, but it is a supplement to brushing and flossing, never a replacement for either one.",
      "A few risk factors make gum disease more likely even with decent home care, so it is worth knowing where you stand. Smoking and vaping are among the biggest contributors, both because they reduce blood flow to the gums and because they mask early bleeding that would otherwise be an obvious warning sign. Diabetes, hormonal changes during pregnancy or menopause, certain medications that cause dry mouth, and a family history of gum disease all raise your risk as well. None of these make gum disease inevitable, but they do mean that sticking closely to your daily routine, and not stretching out the time between cleanings, matters more for you than for the average patient.",
      "Catching gum disease early depends on knowing what to watch for, since the symptoms are easy to dismiss as minor or temporary. Gums that bleed when you brush or floss, even just a little, are the single most common early sign and should never be written off as normal. Persistent bad breath that does not improve with brushing, gums that look red or puffy rather than firm and pale pink, gums that appear to be pulling away from the teeth, and any looseness or shifting in your teeth are all signs that the disease has progressed beyond the earliest stage. If any of these sound familiar, it is worth scheduling an exam rather than waiting to see if it resolves on its own.",
      "Daily habits prevent most gum disease, but routine professional care is what catches the cases that home care alone cannot fully manage. A dental cleaning removes the hardened tartar below the gumline that no amount of brushing or flossing can budge, and a periodontal exam measures the small pockets around each tooth to track gum health over time, often spotting early bone loss before it causes any symptoms you would notice yourself. If gingivitis has already progressed further, a deeper cleaning called scaling and root planing can treat it effectively, especially when it is caught before significant bone loss has occurred. Twice-yearly visits are the right schedule for most patients, though we may recommend more frequent cleanings if you are at higher risk.",
      "Gum disease is one of the few dental conditions that is almost entirely within your control to prevent, and catching it early makes all the difference in how simple the treatment stays. If you have noticed bleeding gums, persistent bad breath, or any of the other warning signs, or it has simply been a while since your last cleaning, do not wait for it to get worse. Schedule a cleaning and exam with our team today, and we will check your gum health, clear away what your toothbrush cannot reach, and help you build a routine that keeps gum disease from ever becoming a problem.",
    ],
  },
  {
    slug: "enamel-erosion-causes-signs-and-prevention",
    title: "Enamel Erosion: Causes, Warning Signs, and How to Protect Your Teeth",
    excerpt:
      "Tooth enamel erosion can lead to sensitivity and decay. Learn the causes, early warning signs, and simple habits that protect your enamel.",
    publishedAt: "2026-10-27",
    author: "Dr. Michael Osei, DMD",
    content: [
      "Tooth enamel is the hardest substance in the human body, but it is not indestructible. Enamel erosion happens when acids gradually wear away this protective outer layer, and because enamel does not regenerate once it is gone, the damage is permanent. Many patients are surprised to learn how common this is: mild enamel erosion shows up in a large share of adults, often long before any pain or visible change makes it obvious. Understanding what causes enamel to wear down, and catching the early warning signs, is the best way to protect your smile before the damage becomes irreversible.",
      "Acid is the root cause of nearly all enamel erosion, and it comes from two main sources. Dietary acids are the most common culprit: citrus fruits and juices, soda, sports drinks, wine, and even healthy choices like vinegar-based dressings and sparkling water can all soften enamel on contact. Frequent snacking or sipping acidic drinks throughout the day is particularly damaging, since it keeps enamel under near-constant acid exposure rather than giving saliva time to neutralize it between meals. The second major source is internal acid from the stomach, which reaches the teeth through conditions like acid reflux, GERD, or frequent vomiting associated with certain illnesses. Because stomach acid is far stronger than most foods, even occasional exposure can accelerate erosion noticeably, which is why we sometimes spot the first signs of reflux during a routine dental exam.",
      "Enamel erosion tends to develop gradually, so the early signs are easy to miss. Increased sensitivity to hot, cold, or sweet foods and drinks is usually the first clue, since thinning enamel exposes the more sensitive dentin layer underneath. As erosion progresses, teeth can take on a slightly yellow or dull appearance because more of the dentin shows through, and edges may look rounded, rough, or translucent at the tips. Small cracks, chips, or indentations on chewing surfaces, along with a visibly shrinking tooth structure in more advanced cases, are signs that erosion has moved beyond the earliest stage and is worth having evaluated.",
      "The good news is that enamel erosion is largely preventable with a few consistent habits. Rinsing your mouth with plain water after eating or drinking anything acidic helps wash the acid away before it has time to work on your enamel, and waiting about thirty minutes before brushing gives softened enamel a chance to re-harden rather than being brushed away while it is vulnerable. Using a straw for acidic or sugary drinks limits how much contact they have with your teeth, and chewing sugar-free gum after meals boosts saliva flow, which naturally buffers acid and helps remineralize enamel. A soft-bristled toothbrush and a fluoride toothpaste matter too, since fluoride actively strengthens enamel and makes it more resistant to future acid attacks. If reflux or frequent vomiting is a factor, managing that underlying condition with your physician is just as important as anything you do at the sink.",
      "Because enamel does not grow back on its own, treatment focuses on protecting what remains and managing symptoms rather than reversing damage. For early erosion, a fluoride varnish or prescription-strength fluoride toothpaste can help remineralize and strengthen weakened areas. For more advanced cases, we may recommend bonding or a thin veneer to protect exposed dentin and restore a natural appearance, especially when sensitivity or chipping is affecting daily life. The earlier erosion is caught, the more conservative the treatment can be, which is one of the main reasons routine dental exams matter even when nothing feels wrong yet.",
      "If you have noticed new sensitivity to cold drinks, teeth that look more yellow or rounded than they used to, or you simply want to know whether your diet or habits are putting your enamel at risk, we would be glad to take a look. Schedule an exam with our team and we will assess your enamel, identify what may be contributing to any wear we find, and help you build a routine that protects your teeth for years to come.",
    ],
  },
  {
    slug: "why-are-my-teeth-sensitive-causes-and-relief",
    title: "Why Are My Teeth Suddenly Sensitive? Causes and Relief",
    excerpt:
      "Sudden tooth sensitivity to hot, cold, or sweets has real causes. Here's what's behind it, what helps, and when it's time to see a dentist.",
    publishedAt: "2026-10-28",
    author: "Dr. Sarah Bennett, DDS",
    content: [
      "Tooth sensitivity that seems to appear out of nowhere is one of the most common concerns we hear from patients, and it's easy to understand why it's so unsettling. One day a sip of ice water or a bite of something sweet feels completely normal, and the next it triggers a sharp, short jolt of pain. The good news is that sudden tooth sensitivity almost always has an identifiable cause, and once we know what's behind it, there's usually a straightforward way to bring relief.",
      "Several everyday habits and conditions can trigger new sensitivity. Enamel wear is one of the most common: brushing too hard with a stiff-bristled brush, or brushing immediately after eating something acidic, can gradually thin the protective enamel layer and expose the more sensitive dentin underneath. Gum recession works the same way from a different angle, uncovering the root surface of a tooth, which has no enamel to protect it at all and is far more reactive to temperature and pressure. A cavity, a cracked tooth, a loose or failing filling, and recent teeth grinding can all create a direct path for stimuli to reach the nerve. Even a recent teeth-whitening treatment or a new filling can cause temporary sensitivity that typically settles down within a week or two on its own.",
      "Understanding why sensitivity hurts makes the whole picture click into place. Underneath enamel and gum tissue, every tooth is covered in a layer called dentin, which is riddled with microscopic tubules that lead straight to the nerve at the tooth's center. As long as enamel and healthy gum tissue cover that dentin, those tubules stay insulated from the outside world. Once either layer is compromised, hot, cold, sweet, or even a rush of air can travel down the tubules and trigger that sharp, short-lived jolt of pain that is so characteristic of sensitive teeth.",
      "A few simple changes at home often bring real relief within a couple of weeks. Switching to a toothpaste formulated for sensitivity builds a protective barrier over exposed dentin with consistent use, usually noticeable within two to four weeks. A soft-bristled brush and a gentler, more deliberate brushing technique protect what enamel remains, and waiting about thirty minutes after eating or drinking anything acidic before brushing gives softened enamel time to re-harden. Cutting back on acidic foods and drinks, and swapping a hard-bristled or medium brush for a soft one, both pay off quickly. A fluoride mouth rinse adds another layer of protection by strengthening enamel and helping it resist future wear.",
      "Sensitivity that doesn't improve with a few weeks of home care, or that comes with other warning signs, is worth having evaluated rather than managed indefinitely on your own. Pain that lingers well after the hot or cold trigger is gone, sensitivity isolated to a single tooth rather than spread across several, pain when biting down, or any visible swelling or darkening of a tooth can point to a cavity, a cracked tooth, or an infection that needs treatment rather than just a desensitizing toothpaste. Catching these causes early usually means a simpler, less invasive fix than waiting until the problem has progressed.",
      "If sudden tooth sensitivity has been catching you off guard, we can help pinpoint exactly what's behind it and get you the right treatment, whether that's a simple toothpaste swap, a fluoride treatment, or addressing a cavity or cracked tooth before it becomes a bigger problem. Schedule an exam with our team and let's get your smile back to feeling normal again.",
    ],
  },
  {
    slug: "sports-mouthguards-why-they-matter",
    title: "Sports Mouthguards: Why They Matter and How to Choose One",
    excerpt:
      "A properly fitted sports mouthguard protects teeth, lips, and jaws from injury. Here's why dentists recommend one and how to pick the right type.",
    publishedAt: "2026-10-29",
    author: "Dr. Michael Osei, DMD",
    content: [
      "Every year, dentists treat thousands of chipped, cracked, and knocked-out teeth that happen on the field, the court, or the rink. Most of these injuries share one thing in common: the athlete wasn't wearing a properly fitted mouthguard. A mouthguard is one of the simplest, most affordable pieces of safety gear in sports, yet it's also one of the most overlooked, especially among weekend athletes and younger players who assume injuries only happen to someone else.",
      "Contact sports like football, hockey, boxing, lacrosse, and wrestling make a mouthguard an obvious requirement, and many leagues mandate one before a player can step onto the field. But dental injuries are just as common in sports that don't involve intentional contact. Basketball, soccer, baseball, skateboarding, and mountain biking all carry a real risk of a stray elbow, a fall, or a ball to the face, and a fall onto pavement or a hard court floor can do just as much damage to a tooth as a direct hit. If a sport involves speed, falls, or flying equipment, a mouthguard is worth considering even when it isn't required.",
      "Not all mouthguards offer the same level of protection. Stock mouthguards, the pre-formed kind sold at most sporting goods stores, are the cheapest option but fit the least securely, which can make them uncomfortable enough that players take them out mid-game, defeating the purpose entirely. Boil-and-bite mouthguards are a step up: you soften them in hot water and bite down to create a rough custom shape, giving a noticeably better fit than a stock guard for a modest price. The best protection by far comes from a custom-fitted mouthguard made from a mold of your own teeth. Because it's built to your exact bite, it stays securely in place during play, distributes impact more evenly, and is comfortable enough that athletes actually keep it in for the whole game.",
      "A good mouthguard does more than prevent chipped or knocked-out teeth. It cushions the lips, cheeks, and tongue from being cut against sharp enamel on impact, and it helps absorb and redistribute the force of a blow to the jaw, which some research suggests may reduce the severity of certain head and jaw injuries during contact sports. For athletes in braces or other orthodontic appliances, a properly fitted mouthguard, usually a custom orthodontic version designed to accommodate brackets and wires, also protects both the teeth and the appliance itself from a hit that could otherwise mean an emergency orthodontic visit.",
      "Taking care of a mouthguard is straightforward but easy to let slide. Rinse it with cool water or a mild soap after every use, and give it an occasional deeper clean with a toothbrush and non-abrasive toothpaste. Store it in a sturdy, ventilated case rather than a pocket or gym bag, where it can warp from heat or get crushed. Avoid leaving it in a hot car, since the same heat that makes boil-and-bite guards moldable can also deform a guard that's already shaped to your bite. Check it regularly for tears, thinning, or a loosening fit, and replace it right away if you notice damage. Growing children and teens in particular tend to outgrow a mouthguard well before it wears out, so it's worth checking the fit each season rather than assuming last year's guard still fits properly.",
      "If you or your child plays a sport this season, a custom-fitted mouthguard is one of the best investments you can make in long-term dental health, often costing far less than treating even a single chipped or knocked-out tooth. We can take a quick impression at your next visit and have a custom mouthguard ready well before the season starts. Schedule an appointment with our team and let's make sure your smile is protected before you're back on the field.",
    ],
  },
];

export type Review = {
  author: string;
  rating: number;
  text: string;
  date: string;
};

export const reviews: Review[] = [
  {
    author: "Jessica M.",
    rating: 5,
    text: "Best dental experience I've had in years. The whole team is friendly and they explained every step before doing anything.",
    date: "2026-08-14",
  },
  {
    author: "Marcus T.",
    rating: 5,
    text: "Got in same-day for a cracked tooth and they took great care of me. Highly recommend for anyone nervous about the dentist.",
    date: "2026-07-29",
  },
  {
    author: "Priya R.",
    rating: 4,
    text: "Clean, modern office and great with my kids. Scheduling was easy and wait times were short.",
    date: "2026-06-11",
  },
];

export const aggregateRating = {
  ratingValue:
    Math.round(
      (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length) * 10,
    ) / 10,
  reviewCount: reviews.length,
};
