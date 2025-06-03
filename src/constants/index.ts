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

export const HERO_CONTENT: string = `Computer Science Student at Universidad Pontificia Bolivariana, currently in my fifth semester. People who know me describe me as a organized, serious, and responsible person, and as someone who maintains excellent interpersonal relationships. I demonstrate a positive attitude towards completing my tasks and find it easy to collaborate with others. I am open to new challenges, constantly seeking opportunities to learn and improve. I always strive for excellence in every aspect of my life.`;

export const ABOUT_TEXT: string = `I consider myself a dedicated and versatile student. Throughout my studies, I have worked with multiple programming languages, including Java, JavaScript, TypeScript, C# and Python, as well as technologies like Git, React, Tailwind CSS, Figma and Microsoft SQL Server. This has allowed me to develop a strong foundation in both backend and frontend development, and I continue to deepen my skills as I tackle new projects. My journey began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. Outside of my career, I enjoy exercising and exploring new technologies.`;

export const EDUCATION: EducationItem[] = [
  {
    year: "2023 - 2027",
    role: "Ingeniería de Sistemas e Informática",
    company: "Universidad Pontifica Bolivariana",
    description: `Currently pursuing a degree in Systems and Computer Engineering at Universidad Pontificia Bolivariana. Studying a wide range of subjects including Artificial Intelligence and Operating Systems. Participating in extracurricular activities and projects to gain practical experience in the field.`,
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
    image: "https://i.postimg.cc/BQFfcpKH/project-1.png",
    description:
      "Automated deployment a playable piano using Git, Terraform, Docker, and AWS. This project demonstrates my ability to leverage modern DevOps practices and tools to streamline the deployment process.",
    technologies: ["AWS", "Dockerfile", "Terraform"],
    githubLink: "https://github.com/dano796/virtual-piano-iac-deployment",
  },
  {
    title: "Virtual Menu App",
    image: "https://i.postimg.cc/3xH5LGX6/project-2.png",
    description:
      "Virtual menu app for a restaurant, developed as an application in Android Studio. It allows users to browse the menu, view detailed descriptions of dishes, place orders, make reservations, see the restaurant's location and rate their experience. The project highlights my skills in mobile app development and my understanding of user experience design.",
    technologies: ["Java", "Android Studio"],
    githubLink: "https://github.com/dano796/voraz-restaurante-app",
  },
  {
    title: "Portfolio Website",
    image: "https://i.postimg.cc/Ls9dSM03/project-3.png",
    description: "Personal portfolio showcasing my experience.",
    technologies: ["TypeScript", "React", "Tailwind CSS"],
    githubLink: "https://github.com/dano796/personal-portfolio",
  },
  {
    title: "PriceHome",
    image: "https://i.postimg.cc/v8kdVkcG/project-4.png",
    description:
      "PriceHome is a web app designed to provide quick, accurate estimates of property market value, whether for rental or sale. By leveraging a predictive model trained on data from the Colombian real estate market, PriceHome delivers contextually relevant valuations that reflect current market trends.",
    technologies: ["Python", "React", "FastAPI"],
    githubLink: "https://github.com/dano796/price-home",
  },
  {
    title: "Full-Stack Veterinary Project",
    image: "https://i.postimg.cc/Bb2r2GLQ/project-5.png",
    description:
      "Full Stack project for a web app that provides home veterinary services. The app allows users to register, manage pet information, book appointments or exams, make payments, and more.",
    technologies: ["React", "Tailwind CSS", "Express"],
    githubLink: "https://github.com/dano796/full-stack-veterinary",
  },
  {
    title: "All In One Fitness App",
    image: "https://i.postimg.cc/2ydtVFM1/project-6.png",
    description:
      "All In One Fitness is a web application designed to help users manage their healthy habits and fitness journey. It offers features like calorie and macronutrient tracking, exercise and weight logging for strength training, hydration tracking, a calorie calculator, a one-rep max calculator and more.",
    technologies: ["React", "Tailwind CSS", "Express"],
    githubLink: "https://github.com/dano796/all-in-one-fitness-app",
  },
  {
    title: "Coffee Bean Maturity Classification using CNN",
    image: "https://i.postimg.cc/nzz1VxDQ/project-7.webp",
    description:
      "Machine learning project implementing Convolutional Neural Networks with PyTorch to classify coffee bean maturity levels from images. The model identifies five maturity stages (green, semi-ripe, ripe, overripe, and dry) achieving 93.44% accuracy with the optimized version.",
    technologies: ["Python", "PyTorch", "Computer Vision"],
    githubLink: "https://github.com/dano796/clasificacion-madurez-cafe",
  },
];

export const CONTACT: ContactInfo = {
  address: "Medellín, Colombia",
  copyright: "Copyright © 2025 Daniel Ortiz.",
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
      "https://images.credly.com/size/680x680/images/ec621e2a-c8f0-4459-806c-ae11829d372a/image.png",
    skills: ["AWS Core Services"],
  },
  {
    title: "AWS Educate Introduction to Generative AI",
    issuer: "Amazon Web Services",
    date: "March 2025",
    credlyLink:
      "https://www.credly.com/badges/5e95bc84-052f-44bd-a846-3d40541d5c8e/public_url",
    badgeImage:
      "https://images.credly.com/images/4b68a030-53d0-414b-be57-b1837bc3b3e6/image.png",
    skills: ["AWS Cloud", "AI"],
  },
];
