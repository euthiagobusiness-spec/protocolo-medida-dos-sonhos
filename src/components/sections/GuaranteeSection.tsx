import { ShieldCheck } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section className="py-20">
      <div className="section-shell liquid-panel depth-card rounded-md border border-white/12 bg-white/[0.045] p-8 md:p-10">
        <div className="flex max-w-4xl flex-col gap-5 md:flex-row md:items-start">
          <ShieldCheck aria-hidden className="shrink-0 text-copperSoft" size={34} />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-copperSoft">Garantia de 30 dias</p>
            <h2 className="mt-3 font-display text-3xl text-mist md:text-4xl">Avalie com tranquilidade</h2>
            <p className="mt-4 text-lg leading-8 text-mist/70">
              Você terá 30 dias para avaliar se a consultoria faz sentido para o seu momento. Caso entenda que o
              protocolo não é para você, poderá solicitar a garantia conforme as condições apresentadas na oferta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
