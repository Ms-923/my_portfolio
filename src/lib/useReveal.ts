"use client";

import { useEffect, useRef } from "react";

/**
 * Adds `visible` to an element the first time it scrolls into view.
 *
 * Generic over the element type so it can be attached to any tag — the
 * previous hard-coded HTMLDivElement made `ref` unassignable to <ul>,
 * <article> and other non-div elements.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Nothing to animate towards if motion is reduced or the API is absent
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
