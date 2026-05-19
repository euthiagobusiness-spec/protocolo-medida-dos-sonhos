import { Check, Minus } from "lucide-react";

import { SectionIntro } from "@/components/sections/SectionIntro";

const beforeItems = ["Insegurança", "Inchaço", "Baixa constância", "Roupas apertadas", "Vergonha do corpo"];
const afterItems = ["Definição", "Leveza", "Autoestima", "Feminilidade", "Constância"];

export function TransformationSection() {
  return (
    <section className="py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionIntro
          eyebrow="A grande mudança"
          title={
            <>
              Sair do ciclo de frustração para uma <span className="animated-highlight">rotina com direção</span>
            </>
          }
          text="O objetivo é mostrar um caminho mais claro para mulheres que querem se sentir mais firmes, confiantes e no controle, sem pressão por perfeição."
        />
        <div className="grid gap-4 md:grid-cols-2">
          <CompareList title="Antes" items={beforeItems} muted />
          <CompareList title="Depois" items={afterItems} />
        </div>
      </div>
    </section>
  );
}

function CompareList({ title, items, muted = false }: { title: string; items: string[]; muted?: boolean }) {
  const Icon = muted ? Minus : Check;

  return (
    <div className={`depth-card rounded-md border p-6 ${muted ? "border-white/10 bg-white/[0.035]" : "border-copper/40 bg-copper/10"}`}>
      <h3 className="text-xl font-extrabold text-mist">{title}</h3>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li className="flex items-center gap-3 text-mist/72" key={item}>
            <Icon aria-hidden className={muted ? "text-mist/32" : "text-copperSoft"} size={18} />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
