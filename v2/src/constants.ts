export type SocialLink = {
  id: string;
  label: string;
  url: string;
  color: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  { id: "github", label: "GitHub", url: "https://github.com/liquiud-s", color: "#ffffff" },
  { id: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/sitiannisadahlan", color: "#0077b5" },
  { id: "mail", label: "Email", url: "mailto:sitiannisadahlan50@gmail.com", color: "#bb001b" },
];

export type Project = {
  id: number;
  title: string;
  description: string;
  demoLink: string;
  isBlog?: boolean;
  customButtonText?: string;
  excerpt?: string;
  /** Venue line for publications, e.g. "IJOPATE 2025". */
  meta?: string;
  /** Category line for projects, e.g. "UX / HCI Project · 2026". */
  category?: string;
  /** Short format label, e.g. "Web Prototype". */
  format?: string;
  /** Year — used for sorting in the browse table. */
  year?: number;
  /**
   * When true the card's button opens `demoLink` directly instead of the
   * internal `/project/:id` case study. Useful for projects (like a personal
   * portfolio) where the case-study page has nothing extra to add.
   */
  directLink?: boolean;
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "AI in English Language Learning",
    description:
      "A research study examining how AI can be integrated into English language learning while maintaining meaningful human connection. The study explores opportunities, challenges, and human-centered approaches to AI-supported language education.",
    demoLink: "https://ejournal.gomit.id/ijopate/article/view/586",
    isBlog: true,
    customButtonText: "View Publication",
    meta: "IJOPATE 2025",
    year: 2025,
    excerpt:
      "Peer-reviewed study on how AI can support English language learning without losing the human connection.",
  },
  {
    id: 2,
    title: "User Experience Audit of Three Popular Language Learning Apps",
    description:
      "A multi-evaluator UX and heuristic evaluation of Duolingo, Babbel, and ELSA Speak. The research examines usability, accessibility, learner experience, and pedagogical usability across the three applications.",
    demoLink: "https://openjournals.ljmu.ac.uk/JSML/article/view/3570",
    isBlog: true,
    customButtonText: "View Publication",
    meta: "JSML 2026",
    year: 2026,
    excerpt:
      "Heuristic evaluation of Duolingo, Babbel, and ELSA Speak — covering usability, accessibility, and pedagogical usability.",
  },
  {
    id: 3,
    title: "TaskFlow: Academic Deadline Management",
    description:
      "A student-focused platform designed to bring scattered academic deadlines into one place. TaskFlow uses clear information hierarchy and prioritization to help students understand what needs attention and act on it quickly.",
    demoLink: "https://liquiud-s.github.io/firstproject.github.io/",
    customButtonText: "View Project",
    category: "UX / HCI Project · 2026",
    format: "Web Prototype",
    year: 2026,
    excerpt:
      "One dashboard that pulls scattered academic deadlines into a single, prioritized view.",
  },
  {
    id: 4,
    title: "ReadingWithAnnis",
    description:
      "A responsive book review platform designed around readability, clear typography, and simple content navigation. The project focuses on reducing visual friction and creating a comfortable reading experience.",
    demoLink: "https://thinkinkreading2025.weebly.com/",
    customButtonText: "View Project",
    category: "UI / UX Project · 2025",
    format: "Web Project",
    year: 2025,
    excerpt:
      "A book review platform built around readability, clear typography, and simple content navigation.",
  },
  {
    id: 5,
    title: "Digital English Book",
    description:
      "A collaborative digital book project combining student-generated English texts with listening activities. It was designed to support language practice through interactive and multimedia learning experiences.",
    demoLink: "https://read.bookcreator.com/kWWJwNINR0dg7GPkPfi4sdGpygH2/99UftvSAQ4yveIKrRaXmVw/UMzzAa4yQOOy12r08o3heg",
    customButtonText: "View Project",
    category: "EdTech Project · 2026",
    year: 2026,
    excerpt:
      "Student-generated English texts paired with listening activities in an interactive digital book.",
  },
  {
    id: 6,
    title: "Explore With Annis",
    description:
      "A digital journal documenting experiences, reflections, and cultural learning during my student exchange program. The project combines personal storytelling with responsive web design.",
    demoLink: "https://explorewithannis.weebly.com/",
    customButtonText: "View Project",
    category: "Personal Project · 2024",
    format: "PMM4 Student Exchange",
    year: 2024,
    excerpt:
      "A responsive digital journal about reflections and cultural learning during the PMM4 exchange program.",
  },
  {
    id: 7,
    title: "Personal Portfolio",
    description:
      "A personal portfolio designed to present my work across UX research, UI/UX design, educational technology, and research. The project focuses on creating a clear, professional experience that makes my work, background, and research easy to explore.",
    demoLink: "https://sitiannisa.vercel.app/",
    customButtonText: "View Project",
    category: "Personal Project · 2026",
    format: "Personal Portfolio Website",
    year: 2026,
    directLink: true,
    excerpt:
      "My own portfolio site, designed and built alone to present my research, projects, and background in one clear place.",
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

/** The three-step design process shown in the About sidebar bubble. */
export const DESIGN_PROCESS: { step: string; title: string; body: string }[] = [
  { step: "01", title: "Research", body: "Understand people, behaviors, and needs." },
  { step: "02", title: "Design", body: "Turn insights into clear, usable experiences." },
  { step: "03", title: "Iterate", body: "Test, learn, and improve the solution." },
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
  /** Work arrangement, e.g. "Remote". Rendered as a muted line under the org. */
  location?: string;
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
    role: "Design QA & Recruiter Onboarding",
    org: "Filesig Pte Ltd",
    period: "Jun 2026 – Present",
    location: "Remote",
    points: [
      "Worked across design QA, information design, and content operations for AI security products.",
      "Reviewed learning materials and onboarding experiences for consistency, clarity, and usability.",
      "Supported digital content and marketing workflows with 85% accuracy.",
    ],
  },
  {
    role: "Social Media Operations & Design",
    org: "NAZ Malaysia",
    period: "Apr 2026 – Jun 2026",
    location: "Remote",
    points: [
      "Managed end-to-end social media content and operations for a Malaysia-focused relocation and property brand.",
      "Conducted audience and competitor research and developed content systems.",
      "Tracked performance across Instagram, YouTube, and Threads.",
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
