import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project4 from "../assets/projects/project-4.webp";
import project5 from "../assets/projects/project-5.webp";
import project6 from "../assets/projects/project-6.webp";
import project7 from "../assets/projects/project-7.webp";
import project8 from "../assets/projects/project-8.webp";
import project10 from "../assets/projects/project-10.webp";
import project11 from "../assets/projects/project-11.png";

/** A row rendered by `SectionList`. Proper nouns keep their casing; prose is lowercase. */
export interface Item {
  title: string;
  href: string;
  /** Secondary line, e.g. "python, react · 2025". */
  meta?: string;
  description: string;
  tags?: string[];
  image?: string;
}

export const NAME = "Daniel Ortiz";
export const SUBTITLE = "ai developer at cyclops · Medellín, Colombia";

export const BIO = `i'm a 20 y/o cs undergrad student working across software development and data science. i care about building things that are well engineered and actually get used. if i'm not coding, i'm probably at the gym chasing a new lift, or reading about the latest trends in ai.`;

/** Google Drive share link. `/view` is the page URL; `/preview` is the iframe embed URL. */
export const CV_URL =
  "https://drive.google.com/file/d/1n5urswkG7qNEiIJX9unNdRZSwshQGR3f/view";

export const EMAIL = "ortizdaniel796@gmail.com";
export const GITHUB_URL = "https://github.com/dano796";
export const LINKEDIN_URL = "https://www.linkedin.com/in/daniel-ortiza/";

export const LINKS: { label: string; href: string }[] = [
  { label: "github", href: GITHUB_URL },
  { label: "linkedin", href: LINKEDIN_URL },
  { label: "email", href: `mailto:${EMAIL}` },
  { label: "cv", href: CV_URL },
];

/** Medellín — used for the local time and temperature readout in the navbar. */
export const LOCATION = {
  latitude: 6.2442,
  longitude: -75.5812,
  timeZone: "America/Bogota",
} as const;

export const COPYRIGHT = "© 2026 Daniel Ortiz";

/** The site this design is based on. Credited in the footer and the README. */
export const INSPIRATION = {
  label: "nexxel.dev",
  href: "https://www.nexxel.dev",
  repo: "https://github.com/nexxeln/nexxel.dev",
};

export const EDUCATION: Item[] = [
  {
    title: "Universidad Pontificia Bolivariana",
    href: "https://www.upb.edu.co/",
    meta: "Ingeniería de Sistemas e Informática · 2023 — 2027",
    description:
      "studying systems and computer engineering across a wide range of subjects, including AI and cybersecurity, alongside extracurricular projects for practical experience.",
  },
  {
    title: "Colegio de la Universidad Pontificia Bolivariana",
    href: "https://www.upb.edu.co/",
    meta: "high school · 2017 — 2022",
    description: "secondary education.",
  },
  {
    title: "Colegio de la Universidad Pontificia Bolivariana",
    href: "https://www.upb.edu.co/",
    meta: "elementary school · 2012 — 2016",
    description: "primary education.",
  },
];

export const CERTIFICATIONS: Item[] = [
  {
    title: "Databricks Fundamentals",
    href: "https://credentials.databricks.com/d846041d-d62c-4b7b-8722-0c2414fdcf88#acc.7x695DWQ",
    meta: "Databricks · jan 2026",
    description: "lakehouse architecture fundamentals.",
    tags: ["Databricks Lakehouse"],
  },
  {
    title: "MySQL Implementation Certified Associate",
    href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=BFA3F87360CDAC45CB643C3337254D2AC488C2B33E5BA718A337DB36DC3A5CD4",
    meta: "Oracle · jun 2025",
    description: "designing and implementing MySQL databases.",
    tags: ["MySQL Implementation"],
  },
  {
    title: "AWS Educate Introduction to Generative AI",
    href: "https://www.credly.com/badges/5e95bc84-052f-44bd-a846-3d40541d5c8e/public_url",
    meta: "Amazon Web Services · mar 2025",
    description: "generative ai concepts and services on AWS.",
    tags: ["AWS Cloud", "AI"],
  },
  {
    title: "AWS Knowledge: Cloud Essentials",
    href: "https://www.credly.com/badges/325a6fb3-6170-4047-a502-92df9c0c0fe3/public_url",
    meta: "Amazon Web Services · jan 2025",
    description: "core AWS services and cloud fundamentals.",
    tags: ["AWS Core Services"],
  },
  {
    title: "GitHub Foundations",
    href: "https://www.credly.com/badges/8879aa2b-03fe-4348-9c76-ffc044f99933/public_url",
    meta: "GitHub · dec 2024",
    description: "collaborative workflows, repository management and version control.",
    tags: ["Collaborative Workflows", "Repository Management", "Version Control"],
  },
];

/** Newest first — the home page features the first three. */
export const PROJECTS: Item[] = [
  {
    title: "React Algo",
    href: "https://github.com/dano796/react-algo",
    image: project11,
    description:
      "open source collection of animated canvas backgrounds for React, inspired by algorithmic concepts.",
    tags: ["React", "TypeScript", "Canvas2D"],
  },
  {
    title: "W8ly",
    href: "https://github.com/dano796/w8ly",
    image: project10,
    description:
      "offline-first web and mobile app for planning and tracking strength training workouts.",
    tags: ["React", "Tailwind CSS"],
  },
  {
    title: "Inventory Management System for UPB Art Collection",
    href: "https://inventario-patrimonio-artistico-upb.netlify.app/",
    image: project8,
    description:
      "web app for UPB's Central Library to manage and track the university's art collection.",
    tags: ["Angular", "TypeScript", "Supabase"],
  },
  {
    title: "Coffee Bean Maturity Classification using CNN",
    href: "https://github.com/dano796/clasificacion-madurez-cafe",
    image: project7,
    description:
      "CNN built with PyTorch that classifies coffee bean maturity across five stages from images, reaching 93.44% accuracy.",
    tags: ["Python", "PyTorch", "Computer Vision"],
  },
  {
    title: "All In One Fitness App",
    href: "https://github.com/dano796/all-in-one-fitness-app",
    image: project6,
    description:
      "full-featured fitness tracker covering everything from macros and nutrition to strength training logs and progress over time.",
    tags: ["React", "Tailwind CSS", "Express"],
  },
  {
    title: "Full-Stack Veterinary Project",
    href: "https://github.com/dano796/full-stack-veterinary",
    image: project5,
    description:
      "web platform that connects pet owners with home veterinary services, handling everything from profiles to appointments and payments.",
    tags: ["React", "Tailwind CSS", "Express"],
  },
  {
    title: "PriceHome",
    href: "https://github.com/dano796/price-home",
    image: project4,
    description:
      "web app that estimates Colombian real estate prices for rental or sale using a predictive model trained on local market data.",
    tags: ["Python", "React", "FastAPI"],
  },
  {
    title: "Virtual Menu App",
    href: "https://github.com/dano796/voraz-restaurante-app",
    image: project2,
    description:
      "Android app for restaurants with a virtual menu, order placement, reservations and customer ratings.",
    tags: ["Java", "Android Studio"],
  },
  {
    title: "Automated Deployment of a Playable Piano",
    href: "https://github.com/dano796/virtual-piano-iac-deployment",
    image: project1,
    description:
      "IaC pipeline that provisions and deploys a browser-playable piano on AWS using Terraform and Docker.",
    tags: ["AWS", "Docker", "Terraform"],
  },
];
