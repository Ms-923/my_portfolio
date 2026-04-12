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
  "Web Developer",
  "Cybersecurity",
  "IoT Enthusiast",
];

export default function About({ data }: AboutProps) {
  const textRef = useReveal();
  const photoRef = useReveal(0.2);

  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          {/* Photo */}
          <div className="about-photo-wrapper">
            <div className="about-photo-frame reveal" ref={photoRef}>
              <Image
                src="/images/profile.jpg"
                alt={data.name}
                fill
                sizes="340px"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
              <div className="about-corner tr" />
              <div className="about-corner bl" />
              <div className="about-corner br" />
            </div>
          </div>

          {/* Text */}
          <div className="reveal" ref={textRef}>
            <p className="section-label">About Me</p>
            <div className="gold-line" />
            <h2 className="about-heading">
            <em>MOHAMEMD</em> SAIF
            </h2>
            <p className="about-text">
              I'm a Computer Science student at Muffakham Jah
              College of Engineering & Technology, passionate about building
              things that live on the internet. I bring together front-end
              aesthetics with back-end logic.
            </p>
            <p className="about-text">
              Currently serving as Web Dev Core Team at TSIG and Cybersecurity
              Core Team at GDGC on campus — I thrive at the intersection of
              code, security, and community. Based in {data.location}.
            </p>
            <div className="about-badges">
              {badges.map((badge) => (
                <div className="badge" key={badge}>
                  <span className="badge-dot" />
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
