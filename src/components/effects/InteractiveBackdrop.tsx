"use client";

import { useEffect } from "react";

export function InteractiveBackdrop() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    function updatePointer(event: PointerEvent) {
      if (frame) {
        cancelAnimationFrame(frame);
      }

      frame = requestAnimationFrame(() => {
        const x = event.clientX / window.innerWidth;
        const y = event.clientY / window.innerHeight;
        const centeredX = x - 0.5;
        const centeredY = y - 0.5;

        root.style.setProperty("--mouse-x", `${(x * 100).toFixed(2)}%`);
        root.style.setProperty("--mouse-y", `${(y * 100).toFixed(2)}%`);
        root.style.setProperty("--tilt-x", `${(-centeredY * 13).toFixed(2)}deg`);
        root.style.setProperty("--tilt-y", `${(centeredX * 16).toFixed(2)}deg`);
        root.style.setProperty("--tilt-x-soft", `${(-centeredY * 8).toFixed(2)}deg`);
        root.style.setProperty("--tilt-y-soft", `${(centeredX * 10).toFixed(2)}deg`);
        root.style.setProperty("--tilt-x-reverse", `${(centeredY * 7).toFixed(2)}deg`);
        root.style.setProperty("--tilt-y-reverse", `${(-centeredX * 9).toFixed(2)}deg`);
        root.style.setProperty("--layer-a-x", `${(-centeredX * 110).toFixed(2)}px`);
        root.style.setProperty("--layer-b-x", `${(centeredX * 92).toFixed(2)}px`);
        root.style.setProperty("--copy-x", `${(-centeredX * 42).toFixed(2)}px`);
        root.style.setProperty("--shadow-x", `${(centeredX * -34).toFixed(2)}px`);
        root.style.setProperty("--shadow-y", `${(centeredY * -28).toFixed(2)}px`);
        root.style.setProperty("--section-tilt-x", `${(-centeredY * 4.4).toFixed(2)}deg`);
        root.style.setProperty("--section-tilt-y", `${(centeredX * 5.4).toFixed(2)}deg`);
        root.style.setProperty("--section-shift-x", `${(centeredX * 28).toFixed(2)}px`);
        root.style.setProperty("--section-shift-y", `${(centeredY * 18).toFixed(2)}px`);
      });
    }

    function updateScroll() {
      const max = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      const progress = window.scrollY / max;

      root.style.setProperty("--scroll-progress", progress.toFixed(4));
      root.style.setProperty("--scroll-shift", `${(progress * 100).toFixed(2)}px`);
      root.style.setProperty("--scroll-up-soft", `${(-progress * 28).toFixed(2)}px`);
      root.style.setProperty("--scroll-up-mid", `${(-progress * 52).toFixed(2)}px`);
      root.style.setProperty("--scroll-down-soft", `${(progress * 34).toFixed(2)}px`);
      root.style.setProperty("--scroll-card", `${(-progress * 18).toFixed(2)}px`);
      root.style.setProperty("--scroll-section", `${(-progress * 30).toFixed(2)}px`);
    }

    updateScroll();
    window.addEventListener("pointermove", updatePointer, { passive: true });
    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <div aria-hidden className="interactive-backdrop">
      <div className="depth-cursor-field" />
      <div className="depth-gradient depth-gradient-a" />
      <div className="depth-gradient depth-gradient-b" />
      <div className="depth-grid" />
      <div className="depth-vignette" />
    </div>
  );
}
