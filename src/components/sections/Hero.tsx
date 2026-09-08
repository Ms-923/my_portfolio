import type { PortfolioData } from "@/types/portfolio";

interface HeroProps {
  data: Pick<PortfolioData, "name" | "title" | "tagline" | "email">;
}

export default function Hero({ data }: HeroProps) {
  const [firstName, ...lastParts] = data.name.split(" ");
  const lastName = lastParts.join(" ");

  return (
    <section className="hero" id="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-glow hero-glow--left" aria-hidden="true" />

      <div className="container">
        <div className="hero-content-wrapper">
          <div className="hero-content">
            {/*
              Solid fill rather than the previous outline stroke — outlined
              type over a moving shader is very hard to read.
            */}
            <h1 className="hero-name">
              {firstName} <span className="last">{lastName}</span>
            </h1>

            {/* The page's single orchestrated load moment */}
            <div className="hero-rule" aria-hidden="true" />

            <p className="hero-role">{data.title}</p>
            <p className="hero-tagline">{data.tagline}</p>

            <div className="hero-cta">
              <a href="#projects" className="btn-primary">
                See my projects
              </a>
              <a href="#contact" className="btn-secondary">
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
