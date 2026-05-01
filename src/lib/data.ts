import type { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  name: "Mohammed Saif",
  title: "Student & Web Developer",
  email: "Mohammedsaifms2006@gmail.com",
  location: "Hyderabad, Telangana, India",
  tagline: "Building the web, one component at a time.",
  experience: [
    {
      company: "E-CELL – Entrepreneurship Cell @MJCET",
      roles: [
        { title: "Tech – Core Team", period: "Mar 2026 – Present", isCurrent: true },
        { title: "Community Member", period: "Sep 2025 – Mar 2026" },
      ],
    },
    {
      company: "GDGC – Google Developer Groups On Campus @MJCET",
      roles: [
        { title: "Cyber Security – Core Team", period: "Nov 2025 – Present", isCurrent: true },
        { title: "Community Member", period: "Sep 2025 – Nov 2025" },
      ],
    },
    {
      company: "TSIG – Technology Special Interest Group @MJCET",
      roles: [
        { title: "Web Dev – Core Team", period: "Nov 2025 – Present", isCurrent: true },
        { title: "Community Member", period: "Sep 2025 – Nov 2025" },
      ],
    },
    {
      company: "Central Institute of Tool Design",
      roles: [
        { title: "Team Lead", period: "Apr 2025 – May 2025" },
        { title: "Student Intern", period: "Nov 2024 – Mar 2025" },
      ],
    },
  ],
  education: [
    {
      institution: "Muffakham Jah College of Engineering & Technology",
      degree: "B.E Computer Science Engineering",
      period: "2025 – 2028",
    },
    {
      institution: "Brilliant grammar school educational society group of institutions",
      degree: "Diploma – Computer Science Engineering",
      period: "2022 – 2025",
      percentage: "79.97%",
    },
    {
      institution: "Loyola High School",
      degree: "10th – SSC",
      period: "2021 – 2022",
      percentage: "80%",
    },
  ],
  projects: [
    {
      title: "Cloud-Enabled IoT Smart Home Automation",
      description:
        "A full-stack IoT solution enabling real-time smart home control via cloud infrastructure. Manages sensors, actuators, and remote dashboards with live data streams.",
      tech: ["Raspberry Pi", "Flask", "MongoDB", "Cloud"],
      link: "https://iot-homeautomation.onrender.com/",
    },
    {
      title: "Resource Hub - Your Ultimate Web Development Resource Collection",
      description:
        "A curated list of the best resources, tools, and courses to enhance your Web Development journey .",
      tech: ["HTML & CSS", "JavaScript"],
      link: "https://web-development-resource-hub.vercel.app/",
    },
  ],
  skills: [
    "Python",
    "Flask",
    "MongoDB",
    "Front-End Development",
    "Networking",
    "Raspberry Pi",
    "Internet of Things (IoT)",
    "Team Management",
    "HTML & CSS",
    "JavaScript",
    "Cloud",
  ],
  contactLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mohammedsaif923?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", icon: "linkedin" },
    { label: "GitHub", href: "https://github.com/ms-923", icon: "github" },
    { label: "Instagram", href: "https://www.instagram.com/md.saif____?igsh=eGMwcGJoeWZ0bzNy&utm_source=qr", icon: "instagram" },
    { label: "CodeCrafted_labs (Link's)", href: "https://codecraftedlabs.vercel.app/", icon: "link" },
  ],
};
