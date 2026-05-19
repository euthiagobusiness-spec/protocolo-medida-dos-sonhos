import { Instagram, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { responsibilityNotice } from "@/features/privacy/consent";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/42 py-10 text-sm text-mist/68">
      <div className="section-shell grid gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
        <div className="max-w-2xl space-y-3">
          <p className="font-display text-xl text-mist">Protocolo Medida dos Sonhos</p>
          <p>{responsibilityNotice}</p>
          <p>
            As informações apresentadas não substituem orientação profissional individualizada. Não coletamos dados
            sensíveis no MVP.
          </p>
        </div>

        <div className="grid gap-4">
          <ProfileCard
            label="Estrategista"
            name={siteConfig.strategist.name}
            photo={siteConfig.strategist.photo}
            photoAlt="Foto de Guilherme Alvarenga"
            instagram={siteConfig.strategist.instagram}
            instagramUrl={siteConfig.strategist.instagramUrl}
          />

          <ProfileCard
            label="Desenvolvido por"
            name={siteConfig.developer.name}
            photo={siteConfig.developer.photo}
            photoAlt="Foto de Thiago Carvalho"
            instagram={siteConfig.developer.instagram}
            instagramUrl={siteConfig.developer.instagramUrl}
            email={siteConfig.developer.email}
          />
        </div>

        <div className="flex flex-wrap gap-4 lg:col-span-2">
          <Link className="focus-ring transition hover:text-mist" href="/politica-de-privacidade">
            Política de Privacidade
          </Link>
          <Link className="focus-ring transition hover:text-mist" href="/termos-de-uso">
            Termos de Uso
          </Link>
          <a
            className="focus-ring transition hover:text-mist"
            href={siteConfig.support.whatsappUrl}
            rel="noreferrer"
            target="_blank"
          >
            Suporte no WhatsApp
          </a>
        </div>

        <p className="text-xs text-mist/45 lg:col-span-2">
          © {new Date().getFullYear()} Protocolo Medida dos Sonhos. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

type ProfileCardProps = {
  label: string;
  name: string;
  photo: string;
  photoAlt: string;
  instagram: string;
  instagramUrl: string;
  email?: string;
};

function ProfileCard({ label, name, photo, photoAlt, instagram, instagramUrl, email }: ProfileCardProps) {
  return (
    <div className="liquid-card depth-card rounded-md border border-white/10 bg-white/[0.045] p-4">
      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-copperSoft">{label}</p>
      <div className="mt-4 flex items-center gap-4">
        <div className="liquid-photo relative size-16 shrink-0 overflow-hidden rounded-full border border-copper/55 bg-black shadow-copper">
          <Image src={photo} alt={photoAlt} fill sizes="64px" className="object-cover object-top" />
        </div>
        <div className="min-w-0">
          <p className="font-display text-2xl leading-none text-mist">{name}</p>
          <div className="mt-3 grid gap-2">
            <a
              aria-label={`Abrir Instagram de ${name}`}
              className="liquid-profile-link focus-ring inline-flex max-w-full items-center gap-2 rounded-md border border-copper/60 bg-copper/35 px-3 py-2 text-sm font-black text-white transition"
              href={instagramUrl}
              rel="noreferrer"
              target="_blank"
            >
              <Instagram aria-hidden className="shrink-0" size={17} />
              <span className="min-w-0 break-all leading-tight">{instagram}</span>
            </a>

            {email ? (
              <a
                aria-label={`Enviar e-mail para ${name}`}
                className="liquid-link focus-ring inline-flex max-w-full items-center gap-2 rounded-md border border-white/18 bg-black/45 px-3 py-2 text-xs font-bold text-mist transition"
                href={`mailto:${email}`}
              >
                <Mail aria-hidden className="shrink-0 text-copperSoft" size={16} />
                <span className="min-w-0 break-all leading-tight">{email}</span>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
