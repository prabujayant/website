export type SocialLink = {
  id: string;
  label: string;
  url: string;
  color: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  { id: "linkedin", label: "LinkedIn", url: "https://linkedin.com/in/siti-annisa-dahlan", color: "#0077b5" },
  { id: "instagram", label: "Instagram", url: "https://www.instagram.com/an_nzaaa?igsh=NzYzcmt3cDE1YzVo", color: "#e4405f" },
  { id: "mail", label: "Email", url: "mailto:sitiannisadahlan50@gmail.com", color: "#bb001b" },
  { id: "tiktok", label: "TikTok", url: "https://www.tiktok.com/@anotherpageunlocked_?is_from_webapp=1&sender_device=pc", color: "#69C9D0" },
  { id: "twitter", label: "Twitter", url: "https://x.com/apageunlocked_", color: "#1DA1F2" },
];

export type Project = {
  id: number;
  title: string;
  description: string;
  demoLink: string;
  isBlog?: boolean;
  customButtonText?: string;
  excerpt?: string;
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "AI in English Language Learning: Balancing Innovation, Opportunity and Human Connection",
    description: "Journal Article / Peer-reviewed in International Journal of Pedagogy, Technology and Education (IJOPATE). Tags: Publication, ELT, Artificial Intelligence.",
    demoLink: "https://ejournal.gomit.id/ijopate/article/view/586",
    isBlog: true,
    customButtonText: "Read Article",
    excerpt: "Peer-reviewed journal article on AI in English language learning — balancing innovation with human connection.",
  },
  {
    id: 7,
    title: "User Experience Audit of Three Popular Language Learning Apps: A Heuristic Evaluation of Duolingo, Babbel, and ELSA Speak",
    description: "Journal Article / Peer-reviewed in The Journal of Social Media for Learning (JSML), Vol. 1 No. 1 (2026), Liverpool John Moores University. Published 1 September 2026. DOI: 10.24377/LJMU.jsml.article3570. Tags: Publication, HCI, UX Research, Heuristic Evaluation, MALL.",
    demoLink: "https://openjournals.ljmu.ac.uk/JSML/article/view/3570",
    isBlog: true,
    customButtonText: "Read Article",
    excerpt: "Multi-evaluator heuristic evaluation of Duolingo, Babbel, and ELSA Speak using Nielsen's 10 Usability Heuristics — and the original Pedagogical Usability framework.",
  },
  {
    id: 2,
    title: "TaskFlow — Academic Deadline Management",
    description: "Tags: UI/UX, HCI, Prototype, HTML\nProblem: Students miss deadlines because info is spread across WhatsApp, LMS, email, and classroom — no central place to track.\nSolution / outcome: Reduced cognitive load through one dashboard with clear visual prioritization — designed via Research → Wireframe → Prototype → Web Implementation.",
    demoLink: "https://liquiud-s.github.io/firstproject.github.io/",
    excerpt: "Centralized academic deadline dashboard that cuts cognitive load — from user research to shipped prototype.",
  },
  {
    id: 3,
    title: "Think Ink — Gamified Reading Platform",
    description: "A responsive gamified reading platform applying minimalist UI principles and user-centered information architecture. Features progress tracking and visual rewards for a 30% retention improvement.",
    demoLink: "https://thinkinkreading2025.weebly.com",
  },
  {
    id: 4,
    title: "ReadingWithAnnis — Book Review Blog",
    description: "Independently developed book review blog achieving a 90+ Lighthouse score. Applied UI/UX best practices like typography contrast and whitespace to reduce reading friction by 25%.",
    demoLink: "https://readingwithannis.vercel.app",
    isBlog: true,
  },
  {
    id: 5,
    title: "Digital English Book (Book Creator)",
    description: "A collaborative project featuring student-generated English texts and listening activities, designed to enhance learning outcomes for junior high school students.",
    demoLink: "https://read.bookcreator.com/kWWJwNINR0dg7GPkPfi4sdGpygH2/99UftvSAQ4yveIKrRaXmVw",
  },
  {
    id: 6,
    title: "Explore With Annis – Exchange Blog",
    description: "Documenting reflections and cultural growth during the PMM4 student exchange program, providing insights into international academic experiences.",
    demoLink: "https://explorewithannis.weebly.com",
    isBlog: true,
  },
];

export type Achievement = {
  title: string;
  description: string;
  gradient: string;
};

export const HOME_ACHIEVEMENTS: Achievement[] = [
  {
    title: "🥉 3rd Place - Kalla Youth Fest Hackathon 2024",
    description: "Awarded 3rd place with a sustainable wind turbine innovation supporting SDGs 2045. Won IDR 1,000,000 cash prize.",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    title: "🏅 Top 150 Essay - Andalas University",
    description: "Selected as one of the top 150 essays out of 1,000+ participants in the national science competition.",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    title: "🥉 Bronze Medal - National Language Olympiad",
    description: "Achieved Bronze Medal (Top 10 out of 1,000+) in English and Indonesian language categories by Gypem Indonesia.",
    gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
  },
  {
    title: "🎓 PMM4 Student Exchange Awardee",
    description: "Selected for the PMM4 Student Exchange Program with full funding of $1,017.28 USD to study at Universitas Nusa Cendana.",
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
  },
];

export const TYPEWRITER_WORDS: string[] = [
  "HCI / UX Researcher",
  "UI / UX Designer",
  "English Educator",
  "Digital Content Strategist",
];

// ---------------------------------------------------------------------------
// Home page content
// ---------------------------------------------------------------------------

/** Hero line that types itself out, pauses, then re-types (rotating effect). */
export const HERO_TAGLINE = "I research people, design for their needs, and build for better experiences.";

/** Floating "what I do" bubbles shown in the hero and About section. */
export const PROFESSIONAL_FOCUS: string[] = [
  "UX Research",
  "Interaction Design",
  "Educational Technology",
];

/** "Know Who I Am" copy — rendered on the About section. */
export const ABOUT_PARAGRAPHS: string[] = [
  "I work across UX research and UI/UX design, focusing on how people interact with digital products. At FlyRank AI, I work on UI/UX design and user research. Earlier, at GaoTek, I worked on interface design, user research, and usability improvements for digital products.",
  "My background is in English Language Education. Over time, my interest in how people learn and interact with technology led me toward educational technology and HCI research.",
  "Recently, I've been building and researching learning-focused digital products, from TaskFlow, a student deadline-management platform, to research on the UX of language-learning applications. I also published research on AI in English language learning.",
  "I enjoy turning complex user needs into simple, useful digital experiences.",
];

/** Words highlighted in amber inside the About copy. */
export const ABOUT_HIGHLIGHTS: string[] = [
  "UX research",
  "UI/UX design",
  "FlyRank AI",
  "GaoTek",
  "English Language Education",
  "educational technology",
  "HCI research",
  "TaskFlow",
  "UX of language-learning applications",
  "AI in English language learning",
];

export type SkillGroup = {
  title: string;
  blurb: string;
  level: number;
  items: string[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "UX Research",
    blurb: "Finding out what people actually do, not just what they say.",
    level: 90,
    items: ["User Interviews", "Qualitative Analysis", "Usability Testing", "Heuristic Evaluation", "Pain Point Synthesis"],
  },
  {
    title: "Interaction Design",
    blurb: "Turning research into clear, usable interfaces.",
    level: 88,
    items: ["Wireframing", "Prototyping", "Information Architecture", "User-Centered Design", "Design Systems"],
  },
  {
    title: "Educational Technology",
    blurb: "Designing learning experiences that people keep using.",
    level: 85,
    items: ["Learning Platforms", "Gamified Reading", "Content Design", "TaskFlow", "Language Learning UX"],
  },
  {
    title: "Front-end Web",
    blurb: "Shipping the design so it works in a real browser.",
    level: 75,
    items: ["HTML5", "CSS3", "Responsive Web Design", "Figma", "Prototyping Tools"],
  },
];

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  current?: boolean;
  points: string[];
};

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    role: "UI/UX Design & User Research",
    org: "FlyRank AI",
    period: "Present",
    current: true,
    points: [
      "Design and research digital product experiences at FlyRank AI.",
      "Run user research to understand how people interact with the product.",
      "Translate findings into interface improvements and prototypes.",
    ],
  },
  {
    role: "Interface Design & Usability",
    org: "GaoTek",
    period: "Earlier",
    points: [
      "Worked on interface design for digital products.",
      "Conducted user research to identify usability problems.",
      "Improved usability based on research findings and user feedback.",
    ],
  },
  {
    role: "Independent Research & Product Building",
    org: "Personal Projects",
    period: "Ongoing",
    points: [
      "Built TaskFlow, a student deadline-management platform, from research to shipped prototype.",
      "Published peer-reviewed research on AI in English language learning.",
      "Published a heuristic UX audit of Duolingo, Babbel, and ELSA Speak.",
    ],
  },
  {
    role: "English Language Education",
    org: "Halu Oleo University",
    period: "Undergraduate",
    points: [
      "Bachelor of Education in English Language (GPA 3.50 / 4.0).",
      "PMM4 National Student Exchange Awardee — fully funded, Universitas Nusa Cendana.",
      "Led student projects and exchange programmes across different cultures.",
    ],
  },
];

// Replaces ad-hoc axios usage (none in v1 src) with a typed Query fetcher.
export async function fetchProjects(): Promise<Project[]> {
  return PROJECTS_DATA;
}

export async function fetchProjectById(id: number): Promise<Project | undefined> {
  return PROJECTS_DATA.find((p) => p.id === id);
}
