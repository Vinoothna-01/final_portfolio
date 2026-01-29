
import { GitHubProject, ProjectCategory, Experience, SkillCategory, Certification } from './types';

export const PERSONAL_INFO = {
  name: "Vinoothna Dudam",
  role: "Data Analyst & ML Specialist",
  email: "vinoothnaaadhya@gmail.com",
  phone: "+1 (xxx) xxx-xxxx",
  github: "https://github.com/Vinoothna-01",
  linkedin: "https://linkedin.com/in/vinoothnadudam",
  bio: "A sophisticated, modern portfolio website showcasing professional experience, technical projects, and skills. Built with cutting-edge web technologies featuring a dark theme with vibrant gradient accents."
};

export const PROJECTS: GitHubProject[] = [
  {
    id: '1',
    name: "Integrated Deep Vision System",
    description: "A state-of-the-art machine learning system designed for real-time visual recognition and analysis using advanced deep learning architectures.",
    url: "#",
    languages: ["Python", "PyTorch", "OpenCV"],
    primaryLanguage: "Python",
    category: ProjectCategory.ML,
    featured: true
  },
  {
    id: '2',
    name: "Customer Churn Analysis",
    description: "End-to-end data analytics project predicting customer turnover using classification algorithms and visualizing key drivers with Tableau.",
    url: "#",
    languages: ["Python", "Scikit-Learn", "Tableau"],
    primaryLanguage: "Python",
    category: ProjectCategory.Analytics,
    featured: true
  },
  {
    id: '3',
    name: "TruthLens: Real vs. Fake News Analysis",
    description: "Conducted data cleaning and exploratory analysis on news datasets to identify misinformation patterns. Built visual dashboards to communicate trends clearly to non-technical audiences, emphasizing interpretability and insight synthesis.",
    url: "#",
    languages: ["Python", "Power BI", "Data Visualization", "Research Synthesis"],
    primaryLanguage: "Python",
    category: ProjectCategory.Analytics
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Kennesaw State University",
    role: "Graduate Teaching Assistant",
    period: "Jan 2025 - Present",
    description: [
      "Facilitating Computer Science courses and assisting in curriculum development.",
      "Conducting labs and workshops for 50+ students on advanced data structures.",
      "Mentoring students on final projects and technical problem solving."
    ],
    current: true
  },
  {
    company: "Socialz",
    role: "Founder and Developer",
    period: "Hackathons and Projects",
    description: [
      "Designed and developed a cross-platform mobile application using React Native with scalable frontend architecture.",
      "Utilized Cursor AI to accelerate development, generate optimized components, and assist backend logic implementation.",
      "Integrated analytics to support data-driven product decisions and system improvements."
    ]
  },
  {
    company: "Morgan Stanley",
    role: "Code to Give Hackathon Participant",
    period: "Global Technology Philanthropy Event",
    description: [
      "Collaborated in Agile-style teams to develop technology-driven solutions for nonprofit organizations.",
      "Translated business problem statements into measurable technical and analytical outcomes.",
      "Delivered presentations combining data analysis, AI-supported insights, and visual storytelling."
    ]
  },
  {
    company: "CDAC Organisation, Hyderabad, India",
    role: "Data Analyst Intern",
    period: "Jan 2024 – Jun 2024",
    description: [
      "Reviewed, cleaned, validated, and maintained large structured datasets to ensure accuracy, consistency, and data integrity.",
      "Developed SQL queries to identify anomalies, verify records, and support backend database updates.",
      "Created technical and process documentation to support scalable data and system workflows."
    ]
  },
  {
    company: "Goldman Sachs, Hyderabad, India",
    role: "Data Analyst",
    period: "2023",
    description: [
      "Developed interactive dashboards with Power BI and Tableau for senior leadership.",
      "Performed complex SQL and Python data analysis on large financial datasets.",
      "Collaborated using Agile methodology and JIRA for streamlined project delivery."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Technical Skills",
    skills: ["SQL", "Python", "Excel", "API Development", "TypeScript", "Node.js"],
    icon: "Code"
  },
  {
    title: "Analytics",
    skills: ["Power BI", "Tableau", "Data Visualization", "Machine Learning", "Statistical Modeling"],
    icon: "BarChart"
  },
  {
    title: "Design",
    skills: ["UX/UI", "Adobe Creative Suite", "Canva", "Wireframing", "Responsive Design"],
    icon: "Palette"
  },
  {
    title: "Tools & Agile",
    skills: ["JIRA", "Agile", "Research", "Collaboration", "Git/GitHub", "Vite"],
    icon: "Settings"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Career Essentials in Data Analysis",
    issuer: "Microsoft",
    date: "2024",
    link: "#"
  },
  {
    name: "Professional Development: Data Analytics",
    issuer: "Coursera / IBM",
    date: "2023",
    link: "#"
  }
];
