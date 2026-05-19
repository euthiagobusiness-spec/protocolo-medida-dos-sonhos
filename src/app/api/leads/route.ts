import { ZodError } from "zod";

import { getCommunityUrl } from "@/lib/env";
import { getClientIp, rateLimit } from "@/lib/rate-limit";
import { isAllowedOrigin, safeErrorResponse } from "@/lib/security";
import { leadInputSchema } from "@/schemas/lead.schema";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return safeErrorResponse("Origem não autorizada.", 403);
  }

  const clientIp = getClientIp(request.headers);
  if (!rateLimit(`lead:${clientIp}`)) {
    return safeErrorResponse("Muitas tentativas. Aguarde um instante e tente novamente.", 429);
  }

  try {
    const body = await request.json();
    const parsed = leadInputSchema.parse(body);

    if (parsed.website) {
      return safeErrorResponse("Não foi possível processar sua solicitação agora.", 400);
    }

    void parsed;

    return Response.json(
      {
        ok: true,
        redirectUrl: getCommunityUrl()
      },
      {
        status: 201,
        headers: {
          "Cache-Control": "no-store"
        }
      }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return Response.json(
        {
          ok: false,
          message: "Revise os campos e tente novamente.",
          fieldErrors: error.flatten().fieldErrors
        },
        {
          status: 400,
          headers: {
            "Cache-Control": "no-store"
          }
        }
      );
    }

    return safeErrorResponse("Não foi possível liberar seu acesso agora. Tente novamente em instantes.", 500);
  }
}
