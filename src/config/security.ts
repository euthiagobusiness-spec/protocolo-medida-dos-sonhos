export function buildContentSecurityPolicy(isProduction: boolean): string {
  return [
    "default-src 'self'",
    "base-uri 'self'",
    "form-action 'self' https://chat.whatsapp.com",
    "frame-ancestors 'none'",
    "object-src 'none'",
    "img-src 'self' data: https://images.unsplash.com",
    "font-src 'self' data:",
    "style-src 'self' 'unsafe-inline'",
    `script-src 'self' 'unsafe-inline'${isProduction ? "" : " 'unsafe-eval'"}`,
    "connect-src 'self'",
    isProduction ? "upgrade-insecure-requests" : ""
  ]
    .filter(Boolean)
    .join("; ");
}

export function buildSecurityHeaders(isProduction: boolean) {
  const headers = [
    { key: "Content-Security-Policy", value: buildContentSecurityPolicy(isProduction) },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
    { key: "X-Frame-Options", value: "DENY" }
  ];

  if (isProduction) {
    headers.push({
      key: "Strict-Transport-Security",
      value: "max-age=63072000; includeSubDomains; preload"
    });
  }

  return headers;
}
