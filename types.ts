
export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image?: string; // Made optional as new design focuses on architecture
  tags: string[];
  link: string;
  github?: string;
  architectureFlow?: string[];
  metric?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}
