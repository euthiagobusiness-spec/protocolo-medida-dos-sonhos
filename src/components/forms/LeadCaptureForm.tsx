import { ArrowRight } from "lucide-react";

import { PrimaryButton } from "@/components/ui/PrimaryButton";
import { siteConfig } from "@/config/site";
import { privacyConsentText } from "@/features/privacy/consent";

export function LeadCaptureForm() {
  return (
    <form
      action={siteConfig.communityUrl}
      className="grid gap-4"
      method="get"
      data-community-form
    >
      <Field label="Nome completo">
        <input
          className="focus-ring h-12 w-full rounded-md border border-white/16 bg-white/[0.075] px-4 text-base text-white placeholder:text-white/34 transition focus:border-copperSoft"
          placeholder="Ex.: Ana Clara Martins"
          autoComplete="name"
          minLength={5}
          pattern=".*\S+\s+\S+.*"
          title="Informe seu nome completo com nome e sobrenome."
          required
        />
      </Field>

      <Field label="Telefone com DDD">
        <input
          className="focus-ring h-12 w-full rounded-md border border-white/16 bg-white/[0.075] px-4 text-base text-white placeholder:text-white/34 transition focus:border-copperSoft"
          placeholder="Ex.: (11) 99999-9999"
          inputMode="tel"
          autoComplete="tel"
          pattern="(?:\+?55\s*)?\(?\d{2}\)?\s*\d{4,5}[-\s]?\d{4}"
          title="Informe um telefone válido com DDD. Exemplo: (11) 99999-9999."
          required
        />
      </Field>

      <Field label="Instagram">
        <input
          className="focus-ring h-12 w-full rounded-md border border-white/16 bg-white/[0.075] px-4 text-base text-white placeholder:text-white/34 transition focus:border-copperSoft"
          placeholder="Ex.: @seuinstagram"
          autoComplete="username"
          pattern="@?[A-Za-z0-9._]{1,30}"
          title="Informe seu usuário do Instagram. Exemplo: @seuinstagram."
          required
        />
      </Field>

      <label
        className="focus-within:outline-copper flex gap-3 rounded-md border border-white/10 bg-white/[0.045] p-4 text-sm leading-relaxed text-white/76"
        data-consent-box
      >
        <input type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-copper" required />
        <span>{privacyConsentText}</span>
      </label>

      <PrimaryButton className="w-full" type="submit" data-redirect-url={siteConfig.communityUrl}>
        <ArrowRight aria-hidden size={18} />
        Quero entrar na comunidade
      </PrimaryButton>

      <p className="text-center text-xs leading-relaxed text-white/48">
        O acesso ao WhatsApp aparece somente depois do cadastro e aceite da Política de Privacidade.
      </p>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-white/84">{label}</span>
      {children}
    </label>
  );
}
