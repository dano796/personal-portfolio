import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
// import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";
import project5 from "../assets/projects/project-5.webp";
import project6 from "../assets/projects/project-6.webp";
import project7 from "../assets/projects/project-7.webp";
import project8 from "../assets/projects/project-8.webp";
// import project9 from "../assets/projects/project-9.webp";
import project10 from "../assets/projects/project-10.webp";
import project11 from "../assets/projects/project-11.png";

export interface EducationItem {
  year: string;
  role: string;
  company: string;
  description?: string;
  technologies?: string[];
}

export interface ProjectItem {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  githubLink: string;
}

export interface ContactInfo {
  address: string;
  copyright: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credlyLink: string;
  badgeImage: string;
  skills: string[];
}

export const CV_URL: string =
  "https://drive.google.com/file/d/1n5urswkG7qNEiIJX9unNdRZSwshQGR3f/preview";

export const HERO_CONTENT: string = `Computer Science student (7th semester) at Universidad Pontificia Bolivariana, building bridge solutions between software development and data science. Working on projects that combine full-stack development, data analysis, and machine learning to transform data into functional, scalable, and impactful software solutions.`;

export const ABOUT_TEXT: string = `Throughout my academic journey, I have worked with multiple programming languages, including Java, JavaScript, TypeScript, Python, and SQL, along with tools and technologies such as Git, GitHub, React, Tailwind CSS, Supabase, Figma, and AWS. This experience has allowed me to build a solid foundation in both frontend and backend development, while progressively integrating data analysis and machine learning into my projects.

My interest in tech began with a strong curiosity about how systems work and has evolved into a continuous pursuit of learning and problem-solving through software and data-driven solutions.

Outside of my professional interests, I value maintaining an active lifestyle through strength training and calisthenics, while staying up to date with new tools and trends in the tech ecosystem.`;

export const EDUCATION: EducationItem[] = [
  {
    year: "2023 - 2027",
    role: "Ingeniería de Sistemas e Informática",
    company: "Universidad Pontifica Bolivariana",
    description: `Currently pursuing a degree in Systems and Computer Engineering at Universidad Pontificia Bolivariana. Studying a wide range of subjects including AI and Cybersecurity. Participating in extracurricular activities and projects to gain practical experience.`,
  },
  {
    year: "2017 - 2022",
    role: "High School",
    company: "Colegio de la Universidad Pontifica Bolivariana",
  },
  {
    year: "2012 - 2016",
    role: "Elementary School",
    company: "Colegio de la Universidad Pontifica Bolivariana",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Automated Deployment of a Playable Piano",
    image: project1,
    description:
      "IaC pipeline that provisions and deploys a browser-playable piano on AWS using Terraform and Docker.",
    technologies: ["AWS", "Dockerfile", "Terraform"],
    githubLink: "https://github.com/dano796/virtual-piano-iac-deployment",
  },
  {
    title: "Virtual Menu App",
    image: project2,
    description:
      "Android app for restaurants with virtual menu, order placement, reservations, and customer ratings.",
    technologies: ["Java", "Android Studio"],
    githubLink: "https://github.com/dano796/voraz-restaurante-app",
  },
  /*{
    title: "Portfolio Website",
    image: project3,
    description: "Personal portfolio showcasing my experience.",
    technologies: ["TypeScript", "React", "Tailwind CSS"],
    githubLink: "https://github.com/dano796/personal-portfolio",
  },*/
  {
    title: "PriceHome",
    image: project4,
    description:
      "Web app that estimates Colombian real estate prices for rental or sale using a predictive model trained on local market data.",
    technologies: ["Python", "React", "FastAPI"],
    githubLink: "https://github.com/dano796/price-home",
  },
  {
    title: "Full-Stack Veterinary Project",
    image: project5,
    description:
      "Web platform that connects pet owners with home veterinary services, handling everything from profiles to appointments and payments.",
    technologies: ["React", "Tailwind CSS", "Express"],
    githubLink: "https://github.com/dano796/full-stack-veterinary",
  },
  {
    title: "All In One Fitness App",
    image: project6,
    description:
      "Full-featured fitness tracker covering everything from macros and nutrition to strength training logs and progress over time.",
    technologies: ["React", "Tailwind CSS", "Express"],
    githubLink: "https://github.com/dano796/all-in-one-fitness-app",
  },
  {
    title: "Coffee Bean Maturity Classification using CNN",
    image: project7,
    description:
      "CNN built with PyTorch that classifies coffee bean maturity across five stages from images, achieving 93.44% accuracy.",
    technologies: ["Python", "PyTorch", "Computer Vision"],
    githubLink: "https://github.com/dano796/clasificacion-madurez-cafe",
  },
  {
    title: "Inventory Management System for UPB Art Collection",
    image: project8,
    description:
      "Web app for UPB's Central Library to manage and track the university's art collection.",
    technologies: ["Angular", "TypeScript", "Supabase"],
    githubLink: "https://inventario-patrimonio-artistico-upb.netlify.app/",
  },
  /*{
    title: "BiteLearn",
    image: project9,
    description:
      "Web application for learning concepts through bite-sized lessons. Users can access concise educational content on various topics and create custom lesson plans leveraging AI.",
    technologies: ["React", "Supabase", "NestJS"],
    githubLink: "",
  },*/
  {
    title: "W8ly",
    image: project10,
    description:
      "Offline-first web/mobile app for planning and tracking strength training workouts.",
    technologies: ["React", "Tailwind CSS"],
    githubLink: "https://github.com/dano796/w8ly",
  },
  {
    title: "React Algo",
    image: project11,
    description:
      "Open source collection of animated canvas backgrounds for React, inspired by algorithmic concepts.",
    technologies: ["React", "TypeScript", "Canvas2D"],
    githubLink: "https://github.com/dano796/react-algo",
  },
];

export const CONTACT: ContactInfo = {
  address: "Medellín, Colombia",
  copyright: "Copyright © 2026 Daniel Ortiz",
};

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "GitHub Foundations",
    issuer: "GitHub",
    date: "Dec 2024",
    credlyLink:
      "https://www.credly.com/badges/8879aa2b-03fe-4348-9c76-ffc044f99933/public_url",
    badgeImage:
      "https://images.credly.com/size/680x680/images/024d0122-724d-4c5a-bd83-cfe3c4b7a073/image.png",
    skills: [
      "Collaborative Workflows",
      "Repository Management",
      "Version Control",
    ],
  },
  {
    title: "AWS Knowledge: Cloud Essentials",
    issuer: "Amazon Web Services",
    date: "Jan 2025",
    credlyLink:
      "https://www.credly.com/badges/325a6fb3-6170-4047-a502-92df9c0c0fe3/public_url",
    badgeImage:
      "https://images.credly.com/size/680x680/images/7cf036b0-c609-4378-a7be-9969e1dea7ab/blob",
    skills: ["AWS Core Services"],
  },
  {
    title: "AWS Educate Introduction to Generative AI",
    issuer: "Amazon Web Services",
    date: "March 2025",
    credlyLink:
      "https://www.credly.com/badges/5e95bc84-052f-44bd-a846-3d40541d5c8e/public_url",
    badgeImage:
      "https://images.credly.com/size/680x680/images/e50c657a-edd9-4c93-b1cf-2b6634b54abf/blob",
    skills: ["AWS Cloud", "AI"],
  },
  {
    title: "MySQL Implementation Certified Associate",
    issuer: "Oracle",
    date: "Jun 2025",
    credlyLink:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=BFA3F87360CDAC45CB643C3337254D2AC488C2B33E5BA718A337DB36DC3A5CD4",
    badgeImage:
      "https://brm-workforce.oracle.com/pdf/certview/images/MYSQLIMPOCA.png",
    skills: ["MySQL Implementation"],
  },
  {
    title: "Databricks Fundamentals",
    issuer: "Databricks",
    date: "Jan 2026",
    credlyLink:
      "https://credentials.databricks.com/d846041d-d62c-4b7b-8722-0c2414fdcf88#acc.7x695DWQ",
    badgeImage:
      "https://www.databricks.com/sites/default/files/2021/12/lakehouse-fundamentals.png",
    skills: ["Databricks Lakehouse"],
  },
];
