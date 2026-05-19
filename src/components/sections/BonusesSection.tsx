import { Check } from "lucide-react";

import { SectionIntro } from "@/components/sections/SectionIntro";

const bonuses = [
  "Guia de Constância Feminina",
  "Lista de refeições práticas",
  "Mini guia Como reduzir inchaço",
  "Checklist de definição feminina"
];

export function BonusesSection() {
  return (
    <section className="border-y border-white/10 bg-black/22 py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionIntro
          eyebrow="Bônus"
          title="Materiais práticos para reduzir atrito na rotina"
          text="Recursos pensados para facilitar decisões simples do dia a dia e apoiar sua constância."
        />
        <div className="grid gap-3">
          {bonuses.map((bonus) => (
            <div className="liquid-card flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] p-4" key={bonus}>
              <Check aria-hidden className="shrink-0 text-copperSoft" size={18} />
              <span className="font-semibold text-mist">{bonus}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
