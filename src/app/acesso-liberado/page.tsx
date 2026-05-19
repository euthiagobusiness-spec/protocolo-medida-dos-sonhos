import { AlertCircle, MessageCircle } from "lucide-react";
import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { PrimaryLink } from "@/components/ui/PrimaryButton";
import { getCommunityUrl } from "@/lib/env";
import { validateAccessToken } from "@/services/lead.service";

export const dynamic = "force-dynamic";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export default async function AccessReleasedPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const tokenParam = params.token;
  const token = Array.isArray(tokenParam) ? tokenParam[0] : tokenParam;
  const hasValidToken = token ? await validateAccessToken(token) : false;

  if (!hasValidToken) {
    return (
      <>
        <main className="grid min-h-screen place-items-center px-4 py-16">
          <section className="liquid-panel w-full max-w-xl rounded-md border border-white/12 bg-white/[0.045] p-7 text-center md:p-10">
            <AlertCircle aria-hidden className="mx-auto text-copperSoft" size={42} />
            <h1 className="mt-5 font-display text-4xl text-mist">Não encontramos seu acesso</h1>
            <p className="mt-4 leading-7 text-mist/68">
              O link pode estar incompleto ou expirado. Volte para a página inicial, preencha o cadastro e tente
              novamente.
            </p>
            <Link
              className="liquid-link focus-ring mt-7 inline-flex min-h-12 items-center justify-center rounded-md border border-copper/70 px-5 text-sm font-bold uppercase tracking-[0.08em] text-copperSoft transition"
              href="/#cadastro"
            >
              Voltar para o cadastro
            </Link>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  const communityUrl = getCommunityUrl();

  return (
    <>
      <main className="grid min-h-screen place-items-center px-4 py-16">
        <section className="liquid-panel w-full max-w-2xl rounded-md border border-white/12 bg-white/[0.045] p-7 text-center shadow-copper md:p-12">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-copper/18 text-copperSoft">
            <MessageCircle aria-hidden size={30} />
          </div>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-copperSoft">Acesso liberado</p>
          <h1 className="mt-3 font-display text-5xl leading-tight text-mist">Seu acesso foi liberado</h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-mist/70">
            Entre agora na comunidade oficial do Protocolo Medida dos Sonhos e acompanhe os próximos passos do
            lançamento.
          </p>
          <PrimaryLink className="mt-8 w-full sm:w-auto" href={communityUrl}>
            Entrar na comunidade do WhatsApp
          </PrimaryLink>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-mist/54">
            Ao entrar na comunidade, você estará sujeita às configurações e políticas do WhatsApp. Evite compartilhar
            dados sensíveis no grupo.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
