"use client";

import { useReveal } from "@/lib/useReveal";
import type { PortfolioData } from "@/types/portfolio";

interface ExperienceProps {
  experience: PortfolioData["experience"];
  education: PortfolioData["education"];
}

export default function Experience({ experience, education }: ExperienceProps) {
  const expRef = useReveal();
  const eduRef = useReveal();

  return (
    <section id="experience">
      <div className="container">
        <div className="experience-layout">
          <div className="reveal" ref={expRef}>
            {/* The heading carries the section; the old eyebrow + rule above
                every heading was decoration rather than information. */}
            <header className="section-head">
              <h2 className="section-heading">Experience</h2>
            </header>

            <div className="timeline">
              {experience.map((exp) => (
                <div
                  className={`timeline-item ${
                    exp.roles[0]?.isCurrent ? "active" : ""
                  }`}
                  key={exp.company}
                >
                  <h3 className="timeline-company">{exp.company}</h3>
                  {exp.roles.map((role) => (
                    <div className="timeline-role" key={role.title}>
                      <span
                        className={
                          role.isCurrent
                            ? "timeline-role-title"
                            : "timeline-role-secondary"
                        }
                      >
                        {role.title}
                      </span>
                      <span className="timeline-period">{role.period}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="reveal" ref={eduRef}>
            <header className="section-head">
              <h2 className="section-heading">Education</h2>
            </header>

            {education.map((edu) => (
              <div className="edu-card" key={edu.institution}>
                <h3 className="edu-institution">{edu.institution}</h3>
                <p className="edu-degree">{edu.degree}</p>
                <div className="edu-footer">
                  <span className="edu-period">{edu.period}</span>
                  {edu.percentage && (
                    <span className="edu-percentage">{edu.percentage}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
