import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";

import { getAccessTokenSecret, getConsentVersion } from "@/lib/env";

const TOKEN_TTL_SECONDS = 60 * 60 * 24 * 7;

type AccessTokenPayload = {
  version: 1;
  scope: "community-access";
  consentVersion: string;
  issuedAt: number;
  expiresAt: number;
  nonce: string;
};

function encodePayload(payload: AccessTokenPayload): string {
  return Buffer.from(JSON.stringify(payload), "utf8").toString("base64url");
}

function signPayload(payload: string): string {
  return createHmac("sha256", getAccessTokenSecret()).update(payload, "utf8").digest("base64url");
}

export function generateAccessToken(): string {
  const issuedAt = Math.floor(Date.now() / 1000);
  const payload = encodePayload({
    version: 1,
    scope: "community-access",
    consentVersion: getConsentVersion(),
    issuedAt,
    expiresAt: issuedAt + TOKEN_TTL_SECONDS,
    nonce: randomBytes(24).toString("base64url")
  });

  return `${payload}.${signPayload(payload)}`;
}

export function validateSignedAccessToken(token: string): boolean {
  if (!hasTokenShape(token)) {
    return false;
  }

  const [payload, signature] = token.split(".");
  const expectedSignature = signPayload(payload);
  const expectedBuffer = Buffer.from(expectedSignature, "base64url");
  const signatureBuffer = Buffer.from(signature, "base64url");

  if (expectedBuffer.length !== signatureBuffer.length || !timingSafeEqual(expectedBuffer, signatureBuffer)) {
    return false;
  }

  try {
    const parsed = JSON.parse(Buffer.from(payload, "base64url").toString("utf8")) as Partial<AccessTokenPayload>;
    const now = Math.floor(Date.now() / 1000);

    return (
      parsed.version === 1 &&
      parsed.scope === "community-access" &&
      parsed.consentVersion === getConsentVersion() &&
      typeof parsed.expiresAt === "number" &&
      parsed.expiresAt > now
    );
  } catch {
    return false;
  }
}

export function hasTokenShape(token: string): boolean {
  return /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/.test(token);
}
