import Image from "next/image";

import { SectionIntro } from "@/components/sections/SectionIntro";
import { responsibilityNotice } from "@/features/privacy/consent";

const socialProofImages = [
  {
    src: "/social-proof/Resultado 01.jpg.jpeg",
    alt: "Registro visual de evolução corporal de aluna acompanhada por Maicon Silva"
  },
  {
    src: "/social-proof/Resultado 02.jpg.jpeg",
    alt: "Comparativo de evolução corporal feminina com acompanhamento fitness"
  },
  {
    src: "/social-proof/Resultado 03.jpg.jpeg",
    alt: "Registro de transformação corporal feminina com treino e rotina"
  },
  {
    src: "/social-proof/Resultado 04.jpg.jpeg",
    alt: "Comparativo de definição abdominal de aluna acompanhada"
  },
  {
    src: "/social-proof/Resultado 05.jpg.jpeg",
    alt: "Registro de evolução visual e autoestima de aluna"
  },
  {
    src: "/social-proof/Resultado 06.jpg.jpeg",
    alt: "Comparativo lateral de evolução corporal feminina"
  }
];

export function TestimonialsSection() {
  return (
    <section className="border-y border-white/10 bg-night py-20">
      <div className="section-shell space-y-10">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <SectionIntro
            eyebrow="Prova social"
            title={
              <>
                Resultados visuais de alunas acompanhadas por <span className="animated-highlight">Maicon Silva</span>
              </>
            }
            text="Registros reais do trabalho já realizado, usados aqui como referência de transformação, constância e direcionamento."
          />
          <p className="liquid-card rounded-md border border-white/10 bg-white/[0.045] p-4 text-sm leading-6 text-white/62">
            {responsibilityNotice} As imagens são apresentadas como prova social e não representam promessa de resultado
            individual.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socialProofImages.map((image, index) => (
            <figure
              className="depth-card group overflow-hidden rounded-md border border-white/10 bg-black shadow-copper"
              key={image.src}
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink">
                <Image
                  alt={image.alt}
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  src={image.src}
                />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between bg-gradient-to-b from-black/70 to-transparent p-4">
                  <span className="rounded-full border border-white/14 bg-black/55 px-3 py-1 text-xs font-extrabold uppercase tracking-[0.14em] text-white">
                    Resultado {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
              <figcaption className="border-t border-white/10 p-4 text-sm leading-6 text-white/62">
                Evolução acompanhada com estratégia, rotina e direcionamento.
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
