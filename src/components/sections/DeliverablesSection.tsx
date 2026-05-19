import { BookOpenCheck, Dumbbell, MessageCircle, Sparkles, Target, Utensils } from "lucide-react";

import { SectionIntro } from "@/components/sections/SectionIntro";

const deliverables = [
  { icon: Dumbbell, title: "Treino personalizado", text: "Direcionamento de treino com foco em definição feminina, rotina e execução." },
  { icon: Utensils, title: "Plano alimentar adaptável", text: "Estrutura alimentar mais sustentável, sem apelo a restrições extremas." },
  { icon: Target, title: "Dicas extras", text: "Ajustes de rotina para melhorar constância, organização e percepção de evolução." },
  { icon: Sparkles, title: "Mentalidade de alta performance", text: "Disciplina, clareza e mentalidade para manter o processo com mais consistência." },
  { icon: BookOpenCheck, title: "PDFs de apoio", text: "Materiais práticos para consultar e transformar orientação em execução." },
  { icon: MessageCircle, title: "Comunidade", text: "Um ambiente para receber conteúdos, avisos e próximos passos do lançamento." }
];

export function DeliverablesSection() {
  return (
    <section id="protocolo" className="border-y border-white/10 bg-black/22 py-20">
      <div className="section-shell space-y-10">
        <SectionIntro
          eyebrow="O que você recebe"
          title={
            <>
              Um protocolo para treinar, comer e sustentar a rotina com mais{" "}
              <span className="animated-highlight">estratégia</span>
            </>
          }
          text="A consultoria foi pensada para mulheres que querem definição, leveza e confiança sem depender de fórmulas agressivas."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item) => (
            <article
              className="depth-card rounded-md border border-white/10 bg-white/[0.045] p-6 transition hover:border-copper/45 hover:bg-white/[0.065]"
              key={item.title}
            >
              <item.icon aria-hidden className="text-copperSoft" size={26} />
              <h3 className="mt-5 text-xl font-extrabold text-mist">{item.title}</h3>
              <p className="mt-3 leading-7 text-mist/66">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
