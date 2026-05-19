import { Instagram } from "lucide-react";
import Image from "next/image";

import { siteConfig } from "@/config/site";

export function ExpertSection() {
  return (
    <section id="maicon" className="py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="liquid-card depth-card rounded-md border border-copper/35 bg-copper/10 p-6">
          <p className="text-xs uppercase tracking-[0.18em] text-copperSoft">Conheça o expert</p>
          <h2 className="mt-3 font-display text-4xl text-mist">{siteConfig.expert}</h2>

          <div className="liquid-card mt-5 flex items-center gap-4 rounded-md border border-white/10 bg-black/35 p-3">
            <div className="liquid-photo relative size-16 shrink-0 overflow-hidden rounded-full border border-copper/55 bg-black shadow-copper">
              <Image
                src={siteConfig.expertPhoto}
                alt="Foto de Maicon Silva"
                fill
                sizes="64px"
                className="object-cover object-top"
              />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs uppercase tracking-[0.18em] text-mist/45">Instagram</p>
              <a
                aria-label={`Abrir Instagram de ${siteConfig.expert}`}
                className="liquid-profile-link focus-ring mt-2 inline-flex max-w-full items-center gap-2 rounded-md border border-copper/60 bg-copper/35 px-3 py-2 text-sm font-black text-white transition"
                href={siteConfig.instagramUrl}
                rel="noreferrer"
                target="_blank"
              >
                <Instagram aria-hidden className="shrink-0" size={18} />
                <span className="min-w-0 break-all leading-tight">{siteConfig.instagram}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-5 text-lg leading-8 text-mist/72">
          <p>
            Maicon Silva é especialista em definição feminina, com foco em transformar autoestima e corpo por meio de
            treinos estratégicos e acompanhamento personalizado.
          </p>
          <p>
            Já preparou atleta wellness para subir nos palcos e hoje ajuda mulheres comuns a conquistarem um corpo mais
            definido, feminino e confiante, sem extremismos.
          </p>
        </div>
      </div>
    </section>
  );
}
