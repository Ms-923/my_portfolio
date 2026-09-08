"use client";

import { useReveal } from "@/lib/useReveal";
import type { PortfolioData } from "@/types/portfolio";

interface SkillsProps {
  skills: PortfolioData["skills"];
}

export default function Skills({ skills }: SkillsProps) {
  const headerRef = useReveal<HTMLElement>();
  const gridRef = useReveal<HTMLUListElement>(0.1);

  return (
    <section id="skills">
      <div className="container">
        <header className="section-head reveal" ref={headerRef}>
          <h2 className="section-heading">Skills &amp; tools</h2>
        </header>

        <ul className="skills-grid reveal" ref={gridRef}>
          {skills.map((skill) => (
            <li className="skill-item" key={skill}>
              <span className="skill-name">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
