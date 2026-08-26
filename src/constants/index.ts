import type { Text } from "../i18n/context";

import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project4 from "../assets/projects/project-4.webp";
import project5 from "../assets/projects/project-5.webp";
import project6 from "../assets/projects/project-6.webp";
import project7 from "../assets/projects/project-7.webp";
import project8 from "../assets/projects/project-8.webp";
import project10 from "../assets/projects/project-10.webp";
import project11 from "../assets/projects/project-11.png";

/**
 * A row rendered by `SectionList`. Proper nouns keep their casing; prose is
 * lowercase.
 *
 * Translatable fields are `Text`, so a bare string means "identical in both
 * languages" — product names, tech tags, a degree title that is already
 * Spanish. Only the halves that actually differ are written twice; `href` and
 * `image` stay single-sourced so they cannot drift apart.
 */
export interface Item {
  title: Text;
  href: string;
  /** Secondary line, e.g. "python, react · 2025". */
  meta?: Text;
  description: Text;
  tags?: Text[];
  image?: string;
}

export const NAME = "Daniel Ortiz";

export const SUBTITLE: Text = {
  en: "ai developer at cyclops · Medellín, Colombia",
  es: "desarrollador de ia en cyclops · Medellín, Colombia",
};

export const BIO: Text = {
  en: `i'm a 20 y/o cs undergrad student working across software development and data science. i care about building things that are well engineered and actually get used. if i'm not coding, i'm probably at the gym chasing a new lift, or reading about the latest trends in ai.`,
  es: `tengo 20 años, estudio ingeniería de sistemas y me apasiona trabajar en desarrollo de software y ciencia de datos. me preocupo por construir sistemas bien diseñados, y que de verdad sean utilizados. si no estoy programando, estoy en el gimnasio entrenando, o investigando sobre las últimas tendencias en ia.`,
};

/** Google Drive share link. `/view` is the page URL; `/preview` is the iframe embed URL. */
export const CV_URL =
  "https://drive.google.com/file/d/1y5GrCHi_55zBudFX4XvNnIIOerGBKAvD/view";

export const EMAIL = "ortizdaniel796@gmail.com";
export const GITHUB_URL = "https://github.com/dano796";
export const LINKEDIN_URL = "https://www.linkedin.com/in/daniel-ortiza/";

export const LINKS: { label: Text; href: string }[] = [
  { label: "github", href: GITHUB_URL },
  { label: "linkedin", href: LINKEDIN_URL },
  { label: { en: "email", es: "correo" }, href: `mailto:${EMAIL}` },
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

/** Newest first — the home page features the first three. */
export const EXPERIENCE: Item[] = [
  {
    title: "Fitally",
    href: "https://www.fitally.mobile/es",
    meta: {
      en: "founder · jul 2026 — present",
      es: "fundador · jul 2026 — presente",
    },
    description: {
      en: "building a fitness app end to end, from the product decisions down to the stack that runs it.",
      es: "construyendo una app de fitness de principio a fin, desde las decisiones de producto hasta el stack que la sostiene.",
    },
    tags: ["React", "TypeScript", "Express", "Supabase"],
  },
  {
    title: "Cyclops",
    href: "https://www.cyclopslab.com/",
    meta: {
      en: "ai developer (L4) · jun 2026 — present",
      es: "desarrollador de ia (L4) · jun 2026 — presente",
    },
    description: {
      en: "working across several projects, building web and mobile products backed by ai.",
      es: "trabajando en varios proyectos, construyendo productos web y móviles impulsados por ia.",
    },
    tags: [".NET", "NestJS", "React", "Expo"],
  },
  {
    title: "Nheo",
    href: "https://nheo.ai/",
    meta: {
      en: "full stack engineer · mar 2026 — present",
      es: "ingeniero full stack · mar 2026 — presente",
    },
    description: {
      en: "designing and building a multi-tenant outbound calling platform handling parallel dialing, live transcription and metered billing.",
      es: "diseñando y construyendo una plataforma multi-tenant de llamadas salientes que maneja marcación en paralelo, transcripción en vivo y facturación por uso.",
    },
    tags: ["Next.js", "Express", "PostgreSQL", "AWS"],
  },
];

export const EDUCATION: Item[] = [
  {
    title: "Universidad Pontificia Bolivariana",
    href: "https://www.upb.edu.co/",
    meta: "Ingeniería de Sistemas e Informática · 2023 — 2027",
    description: {
      en: "studying systems and computer engineering across a wide range of subjects, including AI and cybersecurity, alongside extracurricular projects for practical experience.",
      es: "estudiando ingeniería de sistemas e informática en un amplio rango de materias, incluyendo IA y ciberseguridad, junto a proyectos extracurriculares para adquirir experiencia práctica.",
    },
  },
  {
    title: "Colegio de la Universidad Pontificia Bolivariana",
    href: "https://www.upb.edu.co/",
    meta: {
      en: "high school · 2017 — 2022",
      es: "bachillerato · 2017 — 2022",
    },
    description: { en: "secondary education.", es: "educación secundaria." },
  },
  {
    title: "Colegio de la Universidad Pontificia Bolivariana",
    href: "https://www.upb.edu.co/",
    meta: {
      en: "elementary school · 2012 — 2016",
      es: "primaria · 2012 — 2016",
    },
    description: { en: "primary education.", es: "educación primaria." },
  },
];

export const CERTIFICATIONS: Item[] = [
  {
    title: "Databricks Fundamentals",
    href: "https://credentials.databricks.com/d846041d-d62c-4b7b-8722-0c2414fdcf88#acc.7x695DWQ",
    meta: { en: "Databricks · jan 2026", es: "Databricks · ene 2026" },
    description: {
      en: "lakehouse architecture fundamentals.",
      es: "fundamentos de la arquitectura lakehouse.",
    },
    tags: ["Databricks Lakehouse"],
  },
  {
    title: "MySQL Implementation Certified Associate",
    href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=BFA3F87360CDAC45CB643C3337254D2AC488C2B33E5BA718A337DB36DC3A5CD4",
    meta: "Oracle · jun 2025",
    description: {
      en: "designing and implementing MySQL databases.",
      es: "diseño e implementación de bases de datos MySQL.",
    },
    tags: ["MySQL Implementation"],
  },
  {
    title: "AWS Educate Introduction to Generative AI",
    href: "https://www.credly.com/badges/5e95bc84-052f-44bd-a846-3d40541d5c8e/public_url",
    meta: "Amazon Web Services · mar 2025",
    description: {
      en: "generative ai concepts and services on AWS.",
      es: "conceptos y servicios de ia generativa en AWS.",
    },
    tags: ["AWS Cloud", { en: "AI", es: "IA" }],
  },
  {
    title: "AWS Knowledge: Cloud Essentials",
    href: "https://www.credly.com/badges/325a6fb3-6170-4047-a502-92df9c0c0fe3/public_url",
    meta: {
      en: "Amazon Web Services · jan 2025",
      es: "Amazon Web Services · ene 2025",
    },
    description: {
      en: "core AWS services and cloud fundamentals.",
      es: "servicios principales de AWS y fundamentos de la nube.",
    },
    tags: [{ en: "AWS Core Services", es: "Servicios Principales de AWS" }],
  },
  {
    title: "GitHub Foundations",
    href: "https://www.credly.com/badges/8879aa2b-03fe-4348-9c76-ffc044f99933/public_url",
    meta: { en: "GitHub · dec 2024", es: "GitHub · dic 2024" },
    description: {
      en: "collaborative workflows, repository management and version control.",
      es: "flujos de trabajo colaborativos, gestión de repositorios y control de versiones.",
    },
    tags: [
      { en: "Collaborative Workflows", es: "Flujos de Trabajo Colaborativos" },
      { en: "Repository Management", es: "Gestión de Repositorios" },
      { en: "Version Control", es: "Control de Versiones" },
    ],
  },
];

/** Newest first — the home page features the first three. */
export const PROJECTS: Item[] = [
  {
    title: "React Algo",
    href: "https://github.com/dano796/react-algo",
    image: project11,
    description: {
      en: "open source collection of animated canvas backgrounds for React, inspired by algorithmic concepts.",
      es: "colección open source de fondos animados en canvas para React, inspirados en conceptos algorítmicos.",
    },
    tags: ["React", "TypeScript", "Canvas2D"],
  },
  {
    title: "W8ly",
    href: "https://github.com/dano796/w8ly",
    image: project10,
    description: {
      en: "offline-first web and mobile app for planning and tracking strength training workouts.",
      es: "app web y móvil para planear y registrar entrenamientos de fuerza sin depender de una conexión a internet.",
    },
    tags: ["React", "Tailwind CSS"],
  },
  {
    title: {
      en: "Inventory Management System for UPB Art Collection",
      es: "Sistema de Inventario para la Colección Patrimonial de Arte de la UPB",
    },
    href: "https://inventario-patrimonio-artistico-upb.netlify.app/",
    image: project8,
    description: {
      en: "web app for UPB's Central Library to manage and track the university's art collection.",
      es: "app web para la Biblioteca Central de la UPB que gestiona y permite llevar el seguimiento de la colección patrimonial de arte de la universidad.",
    },
    tags: ["Angular", "TypeScript", "Supabase"],
  },
  {
    title: {
      en: "Coffee Bean Maturity Classification using CNN",
      es: "Clasificación de Madurez del Café con CNN",
    },
    href: "https://github.com/dano796/clasificacion-madurez-cafe",
    image: project7,
    description: {
      en: "CNN built with PyTorch that classifies coffee bean maturity across five stages from images, reaching 93.44% accuracy.",
      es: "CNN construida con PyTorch que clasifica la madurez del grano de café en cinco etapas a partir de imágenes, alcanzando un 93.44% de precisión.",
    },
    tags: ["Python", "PyTorch", { en: "Computer Vision", es: "Visión por Computador" }],
  },
  {
    title: "All In One Fitness App",
    href: "https://github.com/dano796/all-in-one-fitness-app",
    image: project6,
    description: {
      en: "full-featured fitness tracker covering everything from macros and nutrition to strength training logs and progress over time.",
      es: "aplicación fitness de registro, que cubre desde macros y nutrición hasta entrenamientos de fuerza y progreso en el transcurso del tiempo.",
    },
    tags: ["React", "Tailwind CSS", "Express"],
  },
  {
    title: {
      en: "Full-Stack Veterinary Project",
      es: "Proyecto Veterinario Full-Stack",
    },
    href: "https://github.com/dano796/full-stack-veterinary",
    image: project5,
    description: {
      en: "web platform that connects pet owners with home veterinary services, handling everything from profiles to appointments and payments.",
      es: "plataforma web que conecta dueños de mascotas con servicios veterinarios a domicilio, manejando desde perfiles hasta citas y pagos.",
    },
    tags: ["React", "Tailwind CSS", "Express"],
  },
  {
    title: "PriceHome",
    href: "https://github.com/dano796/price-home",
    image: project4,
    description: {
      en: "web app that estimates Colombian real estate prices for rental or sale using a predictive model trained on local market data.",
      es: "app web que estima precios de inmuebles en Colombia, en arriendo o venta, usando un modelo predictivo entrenado con datos del mercado local.",
    },
    tags: ["Python", "React", "FastAPI"],
  },
  {
    title: { en: "Virtual Menu App", es: "App de Menú Virtual" },
    href: "https://github.com/dano796/voraz-restaurante-app",
    image: project2,
    description: {
      en: "Android app for restaurants with a virtual menu, order placement, reservations and customer ratings.",
      es: "app Android para restaurantes con menú virtual, pedidos, reservas y calificaciones de clientes.",
    },
    tags: ["Java", "Android Studio"],
  },
  {
    title: {
      en: "Automated Deployment of a Playable Piano",
      es: "Despliegue Automatizado de un Piano Interactivo",
    },
    href: "https://github.com/dano796/virtual-piano-iac-deployment",
    image: project1,
    description: {
      en: "IaC pipeline that provisions and deploys a browser-playable piano on AWS using Terraform and Docker.",
      es: "pipeline de IaC que aprovisiona y despliega en AWS un piano interactivo desde el navegador, usando Terraform y Docker.",
    },
    tags: ["AWS", "Docker", "Terraform"],
  },
];
