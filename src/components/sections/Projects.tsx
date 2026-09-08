"use client";

import { useReveal } from "@/lib/useReveal";
import type { PortfolioData } from "@/types/portfolio";
import type { MouseEvent } from "react";

interface ProjectsProps {
  projects: PortfolioData["projects"];
}

export default function Projects({ projects }: ProjectsProps) {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="projects">
      <div className="container">
        <header className="section-head reveal" ref={ref}>
          <h2 className="section-heading">Projects</h2>
          <p className="section-intro">
            Things I&apos;ve built end to end, from hardware and cloud
            plumbing through to the interface.
          </p>
        </header>

        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
}: {
  project: PortfolioData["projects"][number];
}) {
  const ref = useReveal<HTMLElement>(0.1);

  // Feeds the card's hover glow. These custom properties were referenced
  // in CSS but never actually set, so the effect sat fixed at centre.
  const handleMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty(
      "--mx",
      `${((e.clientX - rect.left) / rect.width) * 100}%`
    );
    e.currentTarget.style.setProperty(
      "--my",
      `${((e.clientY - rect.top) / rect.height) * 100}%`
    );
  };

  return (
    <article className="project-card reveal" ref={ref} onMouseMove={handleMove}>
      {/* No 01/02 markers: two projects are a set, not a sequence. */}
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>

      <ul className="project-tech">
        {project.tech.map((t) => (
          <li className="tech-tag" key={t}>
            {t}
          </li>
        ))}
      </ul>

      {project.link && (
        <a
          href={project.link}
          className="project-link"
          target="_blank"
          rel="noreferrer"
        >
          View live project
        </a>
      )}
    </article>
  );
}
