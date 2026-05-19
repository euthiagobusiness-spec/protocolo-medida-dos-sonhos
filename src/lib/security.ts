import { getPublicSiteUrl } from "@/lib/env";

export function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");

  if (!origin) {
    return true;
  }

  const host = request.headers.get("host");
  const protocol = request.headers.get("x-forwarded-proto") ?? "http";
  const currentOrigin = host ? `${protocol}://${host}` : null;
  const publicSiteUrl = getPublicSiteUrl();

  return origin === currentOrigin || origin === publicSiteUrl;
}

export function safeErrorResponse(message = "Não foi possível processar sua solicitação agora.", status = 400) {
  return Response.json(
    {
      ok: false,
      message
    },
    {
      status,
      headers: {
        "Cache-Control": "no-store"
      }
    }
  );
}
