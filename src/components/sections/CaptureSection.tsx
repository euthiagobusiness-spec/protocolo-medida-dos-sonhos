import { ArrowUpRight } from "lucide-react";

import { SectionIntro } from "@/components/sections/SectionIntro";

export function CaptureSection() {
  return (
    <section className="border-y border-white/10 bg-night py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <SectionIntro
          eyebrow="Entrada liberada pelo cadastro"
          title={
            <>
              O formulário está no topo para facilitar sua <span className="animated-highlight">entrada</span>
            </>
          }
          text="Se você chegou até aqui e ainda não preencheu, volte ao início da página e libere seu acesso à comunidade."
        />
        <a
          className="liquid-link focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-copper/70 px-5 py-3 text-sm font-extrabold uppercase tracking-[0.08em] text-white transition"
          href="#cadastro"
        >
          Ir para o cadastro <ArrowUpRight aria-hidden size={17} />
        </a>
      </div>
    </section>
  );
}
