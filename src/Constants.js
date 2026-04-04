import { Linkedin, Instagram, Mail } from "lucide-react";
import { IoLogoTiktok, IoLogoTwitter } from "react-icons/io5";

export const SOCIAL_LINKS = [
  { id: "linkedin", icon: Linkedin, url: "https://linkedin.com/in/siti-annisa-dahlan", color: "#0077b5" },
  { id: "instagram", icon: Instagram, url: "https://www.instagram.com/an_nzaaa?igsh=NzYzcmt3cDE1YzVo", color: "#e4405f" },
  { id: "mail", icon: Mail, url: "mailto:sitiannisadahlan50@gmail.com", color: "#bb001b" },
  { id: "tiktok", icon: IoLogoTiktok, url: "https://www.tiktok.com/@anotherpageunlocked_?is_from_webapp=1&sender_device=pc", color: "#69C9D0" },
  { id: "twitter", icon: IoLogoTwitter, url: "https://x.com/apageunlocked_", color: "#1DA1F2" }
];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "AI in English Language Learning: Balancing Innovation, Opportunity and Human Connection",
    description: "Journal Article / Peer-reviewed in International Journal of Pedagogy, Technology and Education (IJOPATE). Tags: Publication, ELT, Artificial Intelligence.",
    demoLink: "https://ejournal.gomit.id/ijopate/article/view/586",
    isBlog: true,
    customButtonText: "Read Article"
  },
  {
    id: 2,
    title: "TaskFlow — Academic Deadline Management",
    description: "Tags: UI/UX, HCI, Prototype, HTML\nProblem: Students miss deadlines because info is spread across WhatsApp, LMS, email, and classroom — no central place to track.\nSolution / outcome: Reduced cognitive load through one dashboard with clear visual prioritization — designed via Research → Wireframe → Prototype → Web Implementation.",
    demoLink: "https://liquiud-s.github.io/firstproject.github.io/"
  },
  {
    id: 3,
    title: "Think Ink — Gamified Reading Platform",
    description: "A responsive gamified reading platform applying minimalist UI principles and user-centered information architecture. Features progress tracking and visual rewards for a 30% retention improvement.",
    demoLink: "https://thinkinkreading2025.weebly.com"
  },
  {
    id: 4,
    title: "ReadingWithAnnis — Book Review Blog",
    description: "Independently developed book review blog achieving a 90+ Lighthouse score. Applied UI/UX best practices like typography contrast and whitespace to reduce reading friction by 25%.",
    demoLink: "https://readingwithannis.vercel.app",
    isBlog: true
  },
  {
    id: 5,
    title: "Digital English Book (Book Creator)",
    description: "A collaborative project featuring student-generated English texts and listening activities, designed to enhance learning outcomes for junior high school students.",
    demoLink: "https://read.bookcreator.com/kWWJwNINR0dg7GPkPfi4sdGpygH2/99UftvSAQ4yveIKrRaXmVw"
  },
  {
    id: 6,
    title: "Explore With Annis – Exchange Blog",
    description: "Documenting reflections and cultural growth during the PMM4 student exchange program, providing insights into international academic experiences.",
    demoLink: "https://explorewithannis.weebly.com",
    isBlog: true
  }
];

export const HOME_ACHIEVEMENTS = [
  {
    title: "🥉 3rd Place - Kalla Youth Fest Hackathon 2024",
    description: "Awarded 3rd place with a sustainable wind turbine innovation supporting SDGs 2045. Won IDR 1,000,000 cash prize.",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  {
    title: "🏅 Top 150 Essay - Andalas University", 
    description: "Selected as one of the top 150 essays out of 1,000+ participants in the national science competition.",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  },
  {
    title: "🥉 Bronze Medal - National Language Olympiad",
    description: "Achieved Bronze Medal (Top 10 out of 1,000+) in English and Indonesian language categories by Gypem Indonesia.",
    gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
  },
  {
    title: "🎓 PMM4 Student Exchange Awardee",
    description: "Selected for the PMM4 Student Exchange Program with full funding of $1,017.28 USD to study at Universitas Nusa Cendana.",
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
  }
];
