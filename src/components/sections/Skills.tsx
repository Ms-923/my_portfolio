"use client";

import { useReveal } from "@/lib/useReveal";
import type { PortfolioData } from "@/types/portfolio";

interface SkillsProps {
  skills: PortfolioData["skills"];
}

export default function Skills({ skills }: SkillsProps) {
  const headerRef = useReveal();
  const gridRef = useReveal(0.1);

  return (
    <section id="skills">
      <div className="container">
        <div className="reveal" ref={headerRef}>
          <p className="section-label">Capabilities</p>
          <div className="gold-line" />
          <h2 className="section-heading">Skills & Tools</h2>
        </div>

        <div className="skills-grid reveal" ref={gridRef}>
          {skills.map((skill) => (
            <div className="skill-item" key={skill}>
              <span className="skill-name">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
