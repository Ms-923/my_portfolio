export interface Experience {
  company: string;
  roles: {
    title: string;
    period: string;
    isCurrent?: boolean;
  }[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  percentage?: string;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

export interface ContactLink {
  label: string;
  href: string;
  icon: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  email: string;
  location: string;
  tagline: string;
  experience: Experience[];
  education: Education[];
  projects: Project[];
  skills: string[];
  contactLinks: ContactLink[];
}
