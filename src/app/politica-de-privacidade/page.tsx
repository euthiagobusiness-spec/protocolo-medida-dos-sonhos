import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getConsentVersion } from "@/lib/env";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="py-16">
        <article className="section-shell max-w-3xl space-y-8">
          <header>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-copperSoft">LGPD</p>
            <h1 className="mt-3 font-display text-5xl text-mist">Política de Privacidade</h1>
            <p className="mt-4 text-mist/62">Versão do consentimento: {getConsentVersion()}</p>
          </header>

          <LegalSection title="Dados coletados">
            Solicitamos nome completo, telefone, Instagram e dados de origem/UTM quando disponíveis para validar o
            cadastro e liberar o acesso à comunidade. No MVP atual, esses dados não são armazenados em banco pela
            aplicação. Não coletamos peso, medidas, fotos, informações de saúde ou outros dados sensíveis.
          </LegalSection>

          <LegalSection title="Finalidades">
            Usamos os dados para liberar acesso à comunidade, enviar comunicações sobre o Protocolo Medida dos Sonhos,
            organizar o relacionamento comercial durante o lançamento, permitir contato por WhatsApp, telefone ou
            Instagram e medir origem dos cadastros de forma operacional.
          </LegalSection>

          <LegalSection title="Base de consentimento">
            O cadastro exige aceite da Política de Privacidade. Após a validação dos campos e do aceite, o sistema libera
            o redirecionamento para a comunidade oficial configurada pela equipe.
          </LegalSection>

          <LegalSection title="Compartilhamento e terceiros">
            O acesso à comunidade ocorre pelo WhatsApp, sujeito às configurações e políticas da plataforma. Ferramentas
            futuras de banco, CRM, planilhas, pixel ou analytics exigem nova revisão de consentimento e documentação.
          </LegalSection>

          <LegalSection title="Exclusão de dados">
            Para solicitar exclusão, correção ou esclarecimentos sobre seus dados, entre em contato com a equipe do
            Protocolo Medida dos Sonhos pelo canal oficial informado durante o lançamento.
          </LegalSection>

          <LegalSection title="Aviso jurídico">
            Este documento é uma versão inicial para MVP e deve ser revisado por assessoria jurídica antes da publicação
            definitiva.
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
