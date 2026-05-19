import { z } from "zod";

function sanitizeText(value: string): string {
  return value
    .replace(/[\u0000-\u001f\u007f]/g, "")
    .replace(/[<>]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

const optionalTrackingField = z
  .string()
  .transform(sanitizeText)
  .pipe(z.string().max(120))
  .optional()
  .transform((value) => value || undefined);

export function normalizePhone(value: string): string {
  const digits = value.replace(/\D/g, "");

  if (digits.length === 10 || digits.length === 11) {
    return `+55${digits}`;
  }

  if ((digits.length === 12 || digits.length === 13) && digits.startsWith("55")) {
    return `+${digits}`;
  }

  return digits ? `+${digits}` : "";
}

export function normalizeInstagram(value: string): string {
  const username = value
    .trim()
    .replace(/\s+/g, "")
    .replace(/^@+/, "")
    .toLowerCase();

  return username ? `@${username}` : "";
}

export const leadInputSchema = z.object({
  fullName: z
    .string()
    .transform(sanitizeText)
    .pipe(
      z
        .string()
        .min(5, "Informe seu nome completo.")
        .max(120, "O nome informado está muito longo.")
        .refine((value) => value.split(/\s+/).filter(Boolean).length >= 2, "Informe nome e sobrenome.")
    ),
  phone: z
    .string()
    .transform(normalizePhone)
    .refine((value) => /^\+?\d{10,14}$/.test(value), "Informe um telefone válido com DDD."),
  instagram: z
    .string()
    .transform(normalizeInstagram)
    .refine((value) => /^@[a-z0-9._]{1,30}$/.test(value), "Informe um Instagram válido."),
  source: optionalTrackingField,
  utmSource: optionalTrackingField,
  utmMedium: optionalTrackingField,
  utmCampaign: optionalTrackingField,
  consentPrivacy: z.boolean().refine((value) => value === true, "Você precisa aceitar a Política de Privacidade."),
  consentMarketing: z.boolean().optional().default(true),
  website: z.string().max(0).optional()
});

export type LeadInput = z.infer<typeof leadInputSchema>;
export type LeadFormValues = z.input<typeof leadInputSchema>;
