"use client";

import Image from "next/image";
import { useReveal } from "@/lib/useReveal";
import type { PortfolioData } from "@/types/portfolio";

interface AboutProps {
  data: Pick<PortfolioData, "name" | "location">;
}

const badges = [
  "CSE '28",
  "Hyderabad",
  "Web development",
  "Cybersecurity",
  "IoT",
];

export default function About({ data }: AboutProps) {
  const textRef = useReveal();
  const photoRef = useReveal(0.2);

  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-photo-wrapper">
            <div className="about-photo-frame reveal" ref={photoRef}>
              <Image
                src="/images/profile.jpg"
                alt={`Portrait of ${data.name}`}
                fill
                sizes="(max-width: 768px) 260px, 300px"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
          </div>

          <div className="reveal" ref={textRef}>
            {/*
              Previously this repeated the hero's name (and misspelled it).
              A descriptive heading does more work in this position.
            */}
            <h2 className="about-heading">
              Computer Science student, building for the web.
            </h2>
            <p className="about-text">
              I&apos;m studying Computer Science at Muffakham Jah College of
              Engineering &amp; Technology, where most of my time goes into
              building things that live on the internet — pairing front-end
              craft with back-end logic.
            </p>
            <p className="about-text">
              Alongside coursework I sit on the Tech core team at E-Cell and the
              Cybersecurity core team at GDGC, which keeps me working across
              code, security, and community at once. Based in {data.location}.
            </p>
            <div className="about-badges">
              {badges.map((badge) => (
                <div className="badge" key={badge}>
                  <span className="badge-dot" aria-hidden="true" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
