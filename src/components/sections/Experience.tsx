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
          {/* Experience timeline */}
          <div className="reveal" ref={expRef}>
            <p className="section-label">Career</p>
            <div className="gold-line" />
            <h2 className="section-heading">Experience</h2>
            <div className="timeline">
              {experience.map((exp) => (
                <div
                  className={`timeline-item ${exp.roles[0]?.isCurrent ? "active" : ""}`}
                  key={exp.company}
                >
                  <div className="timeline-company">{exp.company}</div>
                  {exp.roles.map((role) => (
                    <div key={role.title}>
                      <div className="timeline-role">
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
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="reveal" ref={eduRef}>
            <p className="section-label">Education</p>
            <div className="gold-line" />
            <h2 className="section-heading">Academic</h2>
            {education.map((edu) => (
              <div className="edu-card" key={edu.institution}>
                <div className="edu-institution">{edu.institution}</div>
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-footer">
                  <span className="edu-period">{edu.period}</span>
                  {edu.percentage && (
                    <span className="edu-percentage">Percentage: {edu.percentage}</span>
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
