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
      "Automated deployment a playable piano using Git, Terraform, Docker, and AWS. This project demonstrates my ability to leverage modern DevOps practices and tools to streamline the deployment process.",
    technologies: ["AWS", "Dockerfile", "Terraform"],
    githubLink: "https://github.com/dano796/virtual-piano-iac-deployment",
  },
  {
    title: "Virtual Menu App",
    image: project2,
    description:
      "Virtual menu app for a restaurant, developed as an application in Android Studio. It allows users to browse the menu, view detailed descriptions of dishes, place orders, make reservations, see the restaurant's location and rate their experience. The project highlights my skills in mobile app development and my understanding of user experience design.",
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
      "PriceHome is a web app designed to provide quick, accurate estimates of property market value, whether for rental or sale. By leveraging a predictive model trained on data from the Colombian real estate market, PriceHome delivers contextually relevant valuations that reflect current market trends.",
    technologies: ["Python", "React", "FastAPI"],
    githubLink: "https://github.com/dano796/price-home",
  },
  {
    title: "Full-Stack Veterinary Project",
    image: project5,
    description:
      "Full Stack project for a web app that provides home veterinary services. The app allows users to register, manage pet information, book appointments or exams, make payments, and more.",
    technologies: ["React", "Tailwind CSS", "Express"],
    githubLink: "https://github.com/dano796/full-stack-veterinary",
  },
  {
    title: "All In One Fitness App",
    image: project6,
    description:
      "All In One Fitness is a web application designed to help users manage their healthy habits and fitness journey. It offers features like calorie and macronutrient tracking, exercise and weight logging for strength training, hydration tracking, a calorie calculator, a one-rep max calculator and more.",
    technologies: ["React", "Tailwind CSS", "Express"],
    githubLink: "https://github.com/dano796/all-in-one-fitness-app",
  },
  {
    title: "Coffee Bean Maturity Classification using CNN",
    image: project7,
    description:
      "Machine learning project implementing Convolutional Neural Networks with PyTorch to classify coffee bean maturity levels from images. The model identifies five maturity stages (green, semi-ripe, ripe, overripe, and dry) achieving 93.44% accuracy with the optimized version.",
    technologies: ["Python", "PyTorch", "Computer Vision"],
    githubLink: "https://github.com/dano796/clasificacion-madurez-cafe",
  },
  {
    title: "Inventory Management System for UPB Art Collection",
    image: project8,
    description:
      "Web application for the Central Library at Universidad Pontificia Bolivariana that centralizes the management and tracking of the university's art collection.",
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
];

export const CONTACT: ContactInfo = {
  address: "Medellín, Colombia",
  copyright: "Copyright © 2026 Daniel Ortiz Aristizábal.",
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
