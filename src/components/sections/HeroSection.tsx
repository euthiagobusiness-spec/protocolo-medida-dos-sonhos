import { BadgeCheck, ChevronRight, ShieldCheck } from "lucide-react";

import { LeadCaptureForm } from "@/components/forms/LeadCaptureForm";
import { siteConfig } from "@/config/site";
import { responsibilityNotice } from "@/features/privacy/consent";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-black/20">
      <div className="absolute inset-x-0 top-0 h-px bg-copper/70" />

      <div className="section-shell relative z-10 grid min-h-[calc(100svh-64px)] items-center gap-10 py-10 md:grid-cols-[0.95fr_0.78fr] md:py-14">
        <div className="depth-copy max-w-3xl space-y-7">
          <div className="liquid-chip inline-flex items-center gap-2 rounded-full border border-copper/60 bg-copper/20 px-3 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-white">
            <BadgeCheck aria-hidden size={15} />
            Consultoria online
          </div>

          <div className="space-y-5">
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-mist/62">{siteConfig.name}</p>
            <h1 className="font-display text-5xl font-semibold leading-[0.95] text-mist sm:text-6xl md:text-7xl">
              Defina seu corpo com <span className="animated-highlight">estratégia</span>,{" "}
              <span className="animated-highlight">leveza</span> e <span className="animated-highlight">feminilidade</span>
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-mist/76">
              Entre na comunidade do Protocolo Medida dos Sonhos e acompanhe um caminho mais estratégico para{" "}
              <span className="soft-word">emagrecer</span>, <span className="soft-word">definir</span> e se sentir mais
              confiante sem dietas extremas ou rotinas impossíveis de manter.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              className="liquid-button focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-copper px-5 py-3 text-sm font-extrabold uppercase tracking-[0.08em] text-white shadow-copper transition"
              href="#cadastro"
            >
              Quero entrar na comunidade <ChevronRight aria-hidden size={17} />
            </a>
            <a
              className="liquid-link focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/18 px-5 py-3 text-sm font-extrabold uppercase tracking-[0.08em] text-mist transition"
              href="#protocolo"
            >
              Conhecer o protocolo
            </a>
          </div>

          <p className="flex max-w-2xl items-start gap-2 text-sm leading-6 text-mist/58">
            <ShieldCheck aria-hidden className="mt-0.5 shrink-0 text-copperSoft" size={16} />
            {responsibilityNotice}
          </p>
        </div>

        <div
          id="cadastro"
          className="liquid-panel depth-card rounded-md border border-white/14 bg-black/68 p-5 shadow-copper backdrop-blur md:p-7"
        >
          <div className="mb-5 border-b border-white/10 pb-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-copperSoft">Acesso à comunidade</p>
            <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-white">
              Entre para receber os <span className="animated-highlight">próximos passos</span>
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/62">
              Preencha seus dados para liberar a página de acesso à comunidade oficial.
            </p>
          </div>
          <LeadCaptureForm />
        </div>
      </div>
    </section>
  );
}
