"use client";

import { useState, useRef, type FormEvent } from "react";
import { useReveal } from "@/lib/useReveal";
import type { PortfolioData } from "@/types/portfolio";

interface ContactProps {
  data: Pick<PortfolioData, "email" | "location" | "contactLinks">;
}

export default function Contact({ data }: ContactProps) {
  const leftRef = useReveal();
  const rightRef = useReveal(0.1);

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-layout">
          <div className="reveal" ref={leftRef}>
            {/* Solid fill instead of the previous outline-stroke word */}
            <h2 className="contact-heading">Let&apos;s build something together.</h2>
            <p className="contact-intro">
              Open to internships, freelance work, and collaborations. The
              fastest way to reach me is email.
            </p>
            <a href={`mailto:${data.email}`} className="contact-email">
              {data.email}
            </a>

            <div className="social-links">
              {data.contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="social-link-label">{link.label}</span>
                  <span className="social-link-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="reveal" ref={rightRef}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

type FormStatus = "idle" | "sending" | "success" | "error";

function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const isLocked = status === "sending" || status === "success";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (json.success) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate>
      <input
        type="hidden"
        name="access_key"
        value="119658f1-7ebb-4eba-b010-d99db2e629ea"
      />
      <input type="hidden" name="botcheck" style={{ display: "none" }} />
      <input
        type="hidden"
        name="subject"
        value="New message from your portfolio"
      />
      <input type="hidden" name="from_name" value="Mohammed Saif Portfolio" />

      {/*
        Visible labels rather than placeholder-only labelling, which
        disappears as soon as someone starts typing.
      */}
      <div className="form-group">
        <label className="form-label" htmlFor="contact-name">
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          name="name"
          className="form-input"
          autoComplete="name"
          required
          disabled={isLocked}
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="contact-email">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          className="form-input"
          autoComplete="email"
          required
          disabled={isLocked}
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="contact-message">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          className="form-textarea"
          required
          disabled={isLocked}
        />
      </div>

      <button className="form-submit" type="submit" disabled={isLocked}>
        {status === "sending"
          ? "Sending…"
          : status === "success"
          ? "Message sent"
          : "Send message"}
      </button>

      {/* Status is announced, not just shown */}
      <div aria-live="polite">
        {status === "success" && (
          <p className="form-feedback form-feedback--success">
            Thanks — I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="form-feedback form-feedback--error">
            That didn&apos;t send. Try again, or email me directly at the
            address on the left.
          </p>
        )}
      </div>
    </form>
  );
}
