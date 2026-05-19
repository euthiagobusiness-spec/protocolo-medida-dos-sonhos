import { CalendarDays, LockKeyhole, MessageCircle, ShieldCheck } from "lucide-react";

import { SectionIntro } from "@/components/sections/SectionIntro";
import { siteConfig } from "@/config/site";

const informationItems = [
  {
    icon: ShieldCheck,
    title: "Objetivo do site",
    text: "Esta página existe para liberar o cadastro de interessadas e organizar a entrada na comunidade oficial do lançamento."
  },
  {
    icon: CalendarDays,
    title: "Lançamento em 31/05",
    text: "Os conteúdos, avisos e próximos passos serão conduzidos dentro da comunidade pela equipe do Protocolo."
  },
  {
    icon: LockKeyhole,
    title: "Privacidade e LGPD",
    text: "Coletamos apenas nome, telefone e Instagram para liberar acesso, enviar comunicações e organizar o relacionamento."
  },
  {
    icon: MessageCircle,
    title: "Atendimento humano",
    text: "A comunidade e o suporte não substituem orientação individualizada. Resultados variam conforme rotina e adesão."
  }
];

export function InformationSection() {
  return (
    <section id="informacoes" className="py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <SectionIntro
          eyebrow="Informações importantes"
          title="Tudo que você precisa saber antes de entrar"
          text="O Protocolo Medida dos Sonhos é uma consultoria online focada em definição feminina, com comunicação clara e responsável antes do lançamento."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {informationItems.map((item) => (
            <article className="depth-card rounded-md border border-white/10 bg-white/[0.05] p-6" key={item.title}>
              <item.icon aria-hidden className="text-copperSoft" size={26} />
              <h3 className="mt-5 text-xl font-extrabold text-mist">{item.title}</h3>
              <p className="mt-3 leading-7 text-mist/68">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="liquid-panel rounded-md border border-copper/30 bg-copper/12 p-5 text-sm leading-7 text-mist/68 lg:col-span-2">
          <strong className="text-mist">Sem venda direta nesta página.</strong> O link de checkout, quando existir, será
          conduzido manualmente pela equipe dentro da comunidade. Esta landing page serve para cadastro, relacionamento
          e entrada no aquecimento do lançamento em{" "}
          <strong className="rounded-sm bg-copper px-2 py-1 text-white shadow-copper">{siteConfig.launchDay}</strong>.
        </div>
      </div>
    </section>
  );
}
