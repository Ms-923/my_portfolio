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
          {/* Left */}
          <div className="reveal" ref={leftRef}>
            <p className="section-label">Get In Touch</p>
            <div className="gold-line" />
            <h2 className="contact-heading">
              Let&apos;s Build
              <span>Something</span>
              Together.
            </h2>
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
                  <span className="social-link-arrow">↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
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
    <form
      ref={formRef}
      className="contact-form"
      onSubmit={handleSubmit}
      noValidate
    >
      {/* Web3Forms hidden fields */}
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
      <input
        type="hidden"
        name="from_name"
        value="Mohammed Saif Portfolio"
      />

      <input
        type="text"
        name="name"
        className="form-input"
        placeholder="Your Name"
        aria-label="Your Name"
        required
        disabled={status === "sending" || status === "success"}
      />
      <input
        type="email"
        name="email"
        className="form-input"
        placeholder="Your Email"
        aria-label="Your Email"
        required
        disabled={status === "sending" || status === "success"}
      />
      <textarea
        name="message"
        className="form-textarea"
        placeholder="Your Message"
        aria-label="Your Message"
        required
        disabled={status === "sending" || status === "success"}
      />

      <button
        className="form-submit"
        type="submit"
        disabled={status === "sending" || status === "success"}
      >
        <span>
          {status === "sending"
            ? "Sending..."
            : status === "success"
            ? "Message Sent ✓"
            : "Send Message →"}
        </span>
      </button>

      {status === "success" && (
        <p className="form-feedback form-feedback--success">
          Thanks! I&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="form-feedback form-feedback--error">
          Something went wrong. Please try again or email directly.
        </p>
      )}
    </form>
  );
}
