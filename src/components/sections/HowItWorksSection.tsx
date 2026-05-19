import { SectionIntro } from "@/components/sections/SectionIntro";

const steps = [
  "Preencha seus dados",
  "Entre na comunidade",
  "Receba conteúdos e próximos passos"
];

export function HowItWorksSection() {
  return (
    <section className="py-20">
      <div className="section-shell space-y-10">
        <SectionIntro
          eyebrow="Como funciona"
          title="Um cadastro simples para liberar sua entrada na comunidade"
          text="A primeira etapa é entrar na comunidade. Lá, você acompanha os conteúdos e os próximos passos do lançamento."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <article className="liquid-card depth-card rounded-md border border-white/10 bg-white/[0.04] p-6" key={step}>
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-copperSoft">Passo {index + 1}</span>
              <h3 className="mt-4 text-xl font-semibold text-mist">{step}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
