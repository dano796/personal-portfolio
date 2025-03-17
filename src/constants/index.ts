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
  email: string;
  copyright: string;
}

export const HERO_CONTENT: string = `I am a Computer Science Student at Universidad Pontificia Bolivariana, currently in my fifth semester. People who know me describe me as a organized, serious, and responsible person, and as someone who maintains excellent interpersonal relationships. I demonstrate a positive attitude towards completing my tasks and find it easy to collaborate with others. I am open to new challenges, constantly seeking opportunities to learn and improve. I always strive for excellence in every aspect of my life.`;

export const ABOUT_TEXT: string = `I consider myself a dedicated and versatile student. Throughout my studies, I have worked with multiple programming languages, including Java, JavaScript, C#, and Python, as well as technologies like React and Microsoft SQL Server. This has allowed me to develop a strong foundation in both backend and frontend development, and I continue to deepen my skills as I tackle new projects. My journey began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. Outside of my career, I enjoy exercising and exploring new technologies.`;

export const EDUCATION: EducationItem[] = [
  {
    year: "2023 - 2027",
    role: "Ingeniería de Sistemas e Informática",
    company: "Universidad Pontifica Bolivariana",
    description: `Currently pursuing a degree in Systems and Computer Engineering at Universidad Pontificia Bolivariana. Studying a wide range of subjects, including Databases, Software Engineering, Computer Architecture, and Data Structures and Algorithms. Participating in extracurricular activities and projects to gain practical experience in the field.`,
    //description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    // technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2017 - 2022",
    role: "High School",
    company: "Colegio de la Universidad Pontifica Bolivariana",
    // description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    // technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2012 - 2016",
    role: "Elementary School",
    company: "Colegio de la Universidad Pontifica Bolivariana",
    // description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    // technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Automated Deployment of a Playable Piano",
    image: "https://i.postimg.cc/BQFfcpKH/project-1.png",
    description:
      "Automated deployment a playable piano using Git, Terraform, Docker, and AWS. This project demonstrates my ability to leverage modern DevOps practices and tools to streamline the deployment process. The project showcases how infrastructure as code (IAC) can be applied to set up environments and manage resources efficiently in the cloud.",
    technologies: ["AWS", "Terraform", "Dockerfile"],
    githubLink: "https://github.com/dano796/virtual-piano-iac-deployment",
  },
  {
    title: "Virtual Menu App",
    image: "https://i.postimg.cc/3xH5LGX6/project-2.png",
    description:
      "Virtual menu app for a restaurant, developed as an application in Android Studio. It allows users to browse the menu, view detailed descriptions of dishes, place orders, make reservations, see the restaurant's location and rate their experience. The project highlights my skills in mobile app development and my understanding of user experience design.",
    technologies: ["Android Studio", "Java", "XML"],
    githubLink: "https://github.com/dano796/voraz-restaurante-app",
  },
  {
    title: "Portfolio Website",
    image: "https://i.postimg.cc/Ls9dSM03/project-3.png",
    description:
      "My personal portfolio showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind", "JavaScript"],
    githubLink: "https://github.com/dano796/personal-portfolio",
  },
  {
    title: "PriceHome",
    image: "https://i.postimg.cc/v8kdVkcG/project-4.png",
    description:
      "PriceHome is a user-friendly tool designed to provide quick, accurate estimates of property market value, whether for rental or sale. By leveraging a predictive model trained on data from the Colombian real estate market, PriceHome delivers contextually relevant valuations that reflect current market trends.",
    technologies: ["Python", "React", "FastAPI"],
    githubLink: "https://github.com/dano796/price-home",
  }
];

export const CONTACT: ContactInfo = {
  address: "Medellín, Colombia",
  email: "ortizdaniel796@gmail.com",
  copyright: "Copyright © 2025 Daniel Ortiz.",
};
