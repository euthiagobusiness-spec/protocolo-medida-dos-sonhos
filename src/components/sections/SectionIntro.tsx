import type { ReactNode } from "react";

export function SectionIntro({ eyebrow, title, text }: { eyebrow: string; title: ReactNode; text: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-copperSoft">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-mist md:text-5xl">{title}</h2>
      <p className="mt-4 text-lg leading-8 text-mist/70">{text}</p>
    </div>
  );
}
