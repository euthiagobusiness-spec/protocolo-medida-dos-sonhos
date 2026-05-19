import { generateAccessToken, validateSignedAccessToken } from "@/lib/token";
import type { LeadInput } from "@/schemas/lead.schema";

export async function createLeadAccess(_input: LeadInput): Promise<{ token: string }> {
  return {
    token: generateAccessToken()
  };
}

export async function validateAccessToken(token: string): Promise<boolean> {
  return validateSignedAccessToken(token);
}
