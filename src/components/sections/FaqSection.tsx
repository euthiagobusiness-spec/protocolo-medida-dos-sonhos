import { ChevronRight } from "lucide-react";

import { SectionIntro } from "@/components/sections/SectionIntro";

const faqs = [
  {
    question: "Para quem é o Protocolo Medida dos Sonhos?",
    answer: "Para mulheres que querem emagrecer, definir e se sentir mais confiantes com estratégia, constância e direcionamento."
  },
  {
    question: "Preciso fazer dieta extrema?",
    answer: "Não. A proposta é trabalhar uma rotina alimentar adaptável, com foco em adesão e sustentabilidade."
  },
  {
    question: "Preciso treinar todos os dias?",
    answer: "Não necessariamente. A rotina deve respeitar disponibilidade, nível atual e capacidade de manter constância."
  },
  {
    question: "É apenas para quem já treina?",
    answer: "Não. O protocolo é pensado para mulheres em diferentes fases, desde que estejam dispostas a seguir orientação."
  },
  {
    question: "Como funciona a comunidade?",
    answer: "Depois do cadastro, você recebe acesso à comunidade oficial para acompanhar conteúdos, avisos e próximos passos."
  },
  {
    question: "A consultoria é online?",
    answer: "Sim. A consultoria é online e foi estruturada para entregar treino, alimentação, materiais e acompanhamento."
  },
  {
    question: "Os resultados são garantidos?",
    answer: "Não prometemos resultado igual para todas. Resultados variam conforme rotina, adesão, individualidade biológica e acompanhamento."
  }
];

export function FaqSection() {
  return (
    <section id="faq" className="py-20">
      <div className="section-shell space-y-10">
        <SectionIntro
          eyebrow="FAQ"
          title="Perguntas comuns antes de entrar"
          text="Respostas diretas para reduzir dúvidas sem prometer resultados absolutos."
        />
        <div className="grid gap-3">
          {faqs.map((item) => (
            <details className="group rounded-md border border-white/10 bg-white/[0.04] p-5" key={item.question}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-semibold text-mist">
                {item.question}
                <ChevronRight aria-hidden className="shrink-0 transition group-open:rotate-90" size={18} />
              </summary>
              <p className="mt-4 leading-7 text-mist/66">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
