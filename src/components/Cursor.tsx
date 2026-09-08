"use client";

import { useEffect, useRef } from "react";
import { useFinePointer, usePrefersReducedMotion } from "@/lib/useEnvironment";

const INTERACTIVE = "a, button, input, textarea, select, [data-hover]";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const finePointer = useFinePointer();
  const reducedMotion = usePrefersReducedMotion();
  const enabled = finePointer && !reducedMotion;

  useEffect(() => {
    if (!enabled) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let scale = 1;
    let targetScale = 1;
    let shown = false;
    let animId = 0;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Avoid the ring flying in from the top-left on the first move
      if (!shown) {
        shown = true;
        ringX = mouseX;
        ringY = mouseY;
        dot.style.opacity = "1";
        ring.style.opacity = "1";

        // Only now is it safe to hide the native cursor: the replacement
        // is on screen and tracking. Doing this in CSS instead would leave
        // no pointer at all before hydration, or forever if JS fails.
        document.documentElement.classList.add("cursor-active");
      }

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    };

    /*
      Delegated from the document rather than bound to each element on
      mount. The previous version attached listeners to a one-time
      querySelectorAll snapshot and never removed them, so elements
      rendered later (the mobile menu, form states) were never tracked.
    */
    const onOver = (e: Event) => {
      const target = e.target as Element | null;
      if (target?.closest?.(INTERACTIVE)) targetScale = 2;
    };

    const onOut = (e: Event) => {
      const target = e.target as Element | null;
      if (target?.closest?.(INTERACTIVE)) targetScale = 1;
    };

    const onLeaveWindow = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const onEnterWindow = () => {
      if (shown) {
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
    };

    const animate = () => {
      ringX = lerp(ringX, mouseX, 0.14);
      ringY = lerp(ringY, mouseY, 0.14);
      scale = lerp(scale, targetScale, 0.16);
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${scale})`;
      animId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver, true);
    document.addEventListener("mouseout", onOut, true);
    document.addEventListener("mouseleave", onLeaveWindow);
    document.addEventListener("mouseenter", onEnterWindow);
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver, true);
      document.removeEventListener("mouseout", onOut, true);
      document.removeEventListener("mouseleave", onLeaveWindow);
      document.removeEventListener("mouseenter", onEnterWindow);
      cancelAnimationFrame(animId);
      // Hand the native cursor back, e.g. if the user switches to a
      // reduced-motion preference and this effect tears down.
      document.documentElement.classList.remove("cursor-active");
    };
  }, [enabled]);

  // Touch devices and reduced-motion visitors keep the native cursor
  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="cursor" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
