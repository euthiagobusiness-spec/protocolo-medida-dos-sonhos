import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-graphite/88 backdrop-blur">
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <a className="focus-ring flex flex-col leading-none" href="#topo" aria-label="Início">
          <span className="text-xs uppercase tracking-[0.22em] text-copperSoft">Protocolo</span>
          <span className="font-display text-lg text-mist">Medida dos Sonhos</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-mist/75 md:flex" aria-label="Navegação principal">
          <a className="focus-ring transition hover:text-mist" href="#protocolo">
            O protocolo
          </a>
          <a className="focus-ring transition hover:text-mist" href="#maicon">
            {siteConfig.expert}
          </a>
          <a className="focus-ring transition hover:text-mist" href="#informacoes">
            Informações
          </a>
          <a className="focus-ring transition hover:text-mist" href="#faq">
            FAQ
          </a>
          <a className="focus-ring transition hover:text-mist" href="#suporte">
            Suporte
          </a>
        </nav>
        <a
          className="liquid-link focus-ring inline-flex h-10 items-center gap-2 rounded-md border border-copper/70 px-3 text-xs font-bold uppercase tracking-[0.08em] text-copperSoft transition"
          href="#cadastro"
        >
          Entrar <ArrowRight aria-hidden size={15} />
        </a>
      </div>
    </header>
  );
}
