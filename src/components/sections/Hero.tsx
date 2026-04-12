import type { PortfolioData } from "@/types/portfolio";

interface HeroProps {
  data: Pick<PortfolioData, "name" | "title" | "tagline" | "email">;
}

export default function Hero({ data }: HeroProps) {
  const [firstName, ...lastParts] = data.name.split(" ");
  const lastName = lastParts.join(" ");

  return (
    <section className="hero" id="hero">
      {/* Background layers */}
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-glow hero-glow--left" aria-hidden="true" />

      <div className="container">
        <div className="hero-content-wrapper">
          {/* ── LEFT: text content ── */}
          <div className="hero-content">
            <h1 className="hero-name">
              <span className="first">{firstName}</span>
              <span className="last" data-text={lastName}>{lastName}</span>
            </h1>

            <div className="hero-descriptor">
              <div className="hero-descriptor-dot" />
              <span className="hero-descriptor-text">{data.title}</span>
              <div className="hero-descriptor-dot" />
              <span className="hero-descriptor-text">MJCET &apos;28</span>
              <div className="hero-descriptor-dot" />
              <span className="hero-descriptor-text">Hyderabad</span>
            </div>

            <p className="hero-tagline">{data.tagline}</p>

            <div className="hero-cta">
              <a href="#projects" className="btn-primary">View My Work →</a>
              <a href="#contact" className="btn-secondary">Get In Touch</a>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
