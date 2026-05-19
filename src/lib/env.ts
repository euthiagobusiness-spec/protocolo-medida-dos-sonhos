import { z } from "zod";

const httpsUrl = z.string().url().refine((value) => value.startsWith("https://"), "URL must start with https://.");
const optionalHttpsUrl = z
  .string()
  .optional()
  .transform((value) => (value?.trim() ? value.trim() : undefined))
  .pipe(httpsUrl.optional());

const envSchema = z.object({
  COMMUNITY_URL: httpsUrl,
  CONSENT_VERSION: z.string().min(1, "CONSENT_VERSION must be configured."),
  ACCESS_TOKEN_SECRET: z.string().min(32, "ACCESS_TOKEN_SECRET must have at least 32 characters.").optional(),
  NEXT_PUBLIC_SITE_URL: optionalHttpsUrl,
  CHECKOUT_URL: optionalHttpsUrl,
  LAUNCH_DATE: z.string().optional(),
  PAYMENT_PROVIDER: z.string().optional(),
  NODE_ENV: z.enum(["development", "test", "production"]).default("development")
});

type AppEnv = z.infer<typeof envSchema>;

let cachedEnv: AppEnv | null = null;

function getEnv(): AppEnv {
  if (cachedEnv) {
    return cachedEnv;
  }

  const parsed = envSchema.safeParse(process.env);

  if (!parsed.success) {
    const details = parsed.error.issues.map((issue) => `${issue.path.join(".")}: ${issue.message}`).join("; ");
    throw new Error(`Invalid environment configuration. ${details}`);
  }

  cachedEnv = parsed.data;
  return cachedEnv;
}

export function getCommunityUrl(): string {
  return getEnv().COMMUNITY_URL;
}

export function getConsentVersion(): string {
  return getEnv().CONSENT_VERSION;
}

export function getAccessTokenSecret(): string {
  const env = getEnv();

  return env.ACCESS_TOKEN_SECRET ?? `dev-only:${env.CONSENT_VERSION}:${env.COMMUNITY_URL}`;
}

export function getPublicSiteUrl(): string | null {
  return getEnv().NEXT_PUBLIC_SITE_URL ?? null;
}

export function getFutureLaunchConfig() {
  const env = getEnv();

  return {
    checkoutUrl: env.CHECKOUT_URL ?? null,
    launchDate: env.LAUNCH_DATE ?? null,
    paymentProvider: env.PAYMENT_PROVIDER ?? null
  };
}
