import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { responsibilityNotice } from "@/features/privacy/consent";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="py-16">
        <article className="section-shell max-w-3xl space-y-8">
          <header>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-copperSoft">Termos</p>
            <h1 className="mt-3 font-display text-5xl text-mist">Termos de Uso</h1>
            <p className="mt-4 text-mist/62">
              Condições iniciais para uso da landing page e acesso à comunidade do Protocolo Medida dos Sonhos.
            </p>
          </header>

          <LegalSection title="Finalidade da página">
            Esta página tem como objetivo capturar leads qualificadas e liberar acesso à comunidade oficial do
            lançamento. Não há checkout, pagamento, área de membros ou liberação automática de produto no MVP.
          </LegalSection>

          <LegalSection title="Comunidade">
            Após o cadastro, a usuária poderá acessar a comunidade do WhatsApp. A equipe conduzirá conteúdos,
            orientações e próximos passos manualmente dentro da comunidade.
          </LegalSection>

          <LegalSection title="Responsabilidade sobre resultados">{responsibilityNotice}</LegalSection>

          <LegalSection title="Uso adequado">
            A usuária se compromete a informar dados verdadeiros e a não compartilhar dados sensíveis no grupo. O uso do
            WhatsApp também está sujeito às políticas da própria plataforma.
          </LegalSection>

          <LegalSection title="Oferta futura">
            A consultoria poderá ser ofertada durante o lançamento, com preço, garantia e condições comerciais
            apresentados pela equipe no momento adequado.
          </LegalSection>
        </article>
      </main>
      <Footer />
    </>
  );
}

function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="liquid-card rounded-md border border-white/10 bg-white/[0.04] p-6">
      <h2 className="text-xl font-semibold text-mist">{title}</h2>
      <p className="mt-3 leading-7 text-mist/68">{children}</p>
    </section>
  );
}
