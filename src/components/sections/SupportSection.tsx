import { MessageCircle } from "lucide-react";

import { PrimaryLink } from "@/components/ui/PrimaryButton";
import { siteConfig } from "@/config/site";

export function SupportSection() {
  return (
    <section id="suporte" className="py-20">
      <div className="section-shell liquid-panel depth-card rounded-md border border-white/12 bg-white/[0.055] p-7 md:p-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-copperSoft">Suporte</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-mist md:text-5xl">
              Precisa de ajuda? Fale conosco
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-mist/70">
              Se tiver dúvida sobre cadastro, acesso à comunidade ou informações do lançamento, chame o suporte pelo
              WhatsApp.
            </p>
          </div>

          <PrimaryLink
            className="w-full lg:w-auto"
            href={siteConfig.support.whatsappUrl}
            rel="noreferrer"
            target="_blank"
          >
            <MessageCircle aria-hidden size={18} />
            Falar com suporte
          </PrimaryLink>
        </div>
      </div>
    </section>
  );
}
