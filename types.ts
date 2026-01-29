
export interface GitHubProject {
  id: string;
  name: string;
  description: string;
  url: string;
  languages: string[];
  primaryLanguage: string;
  category: ProjectCategory;
  featured?: boolean;
}

export enum ProjectCategory {
  ML = 'Machine Learning',
  Analytics = 'Data Analytics',
  Security = 'Security',
  Development = 'Web Development'
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  current?: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}
