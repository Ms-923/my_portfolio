"use client";

import { useReveal } from "@/lib/useReveal";
import type { PortfolioData } from "@/types/portfolio";

interface ProjectsProps {
  projects: PortfolioData["projects"];
}

export default function Projects({ projects }: ProjectsProps) {
  const ref = useReveal();

  return (
    <section id="projects" className="projects-bg">
      <div className="container">
        <div className="reveal" ref={ref}>
          <p className="section-label">Work</p>
          <div className="gold-line" />
          <h2 className="section-heading">Featured Projects</h2>
        </div>

        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: PortfolioData["projects"][number];
  index: number;
}) {
  const ref = useReveal(0.1);

  return (
    <div className="project-card reveal" ref={ref}>
      <div className="project-number">0{index + 1}</div>
      <div>
        <p className="project-label">Featured Project</p>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tech">
          {project.tech.map((t) => (
            <span className="tech-tag" key={t}>
              {t}
            </span>
          ))}
        </div>
        {project.link && (
          <a href={project.link} className="project-link" target="_blank" rel="noreferrer">
            View Live Project <span>→</span>
          </a>
        )}
      </div>
    </div>
  );
}
