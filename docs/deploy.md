# Deploy

Passo a passo para publicar o MVP na Vercel sem banco obrigatÃ³rio.

## 1. Configurar variÃ¡veis na Vercel

ObrigatÃ³rias:

```bash
COMMUNITY_URL="https://chat.whatsapp.com/GuCZGKrSJU11sJX63yyvR7"
CONSENT_VERSION="2026-05-13"
NEXT_PUBLIC_SITE_URL="https://seudominio.com.br"
```

Futuras opcionais:

```bash
CHECKOUT_URL=""
LAUNCH_DATE="2026-05-31"
PAYMENT_PROVIDER=""
```

Regras:

- `COMMUNITY_URL` deve obrigatoriamente comeÃ§ar com `https://`.
- `CHECKOUT_URL`, se for usada futuramente, tambÃ©m deve comeÃ§ar com `https://`.

## 2. Configurar Vercel

1. Conecte o repositÃ³rio Ã  Vercel.
2. Confirme o comando de build: `npm run build`.
3. Confirme que as variÃ¡veis estÃ£o disponÃ­veis no ambiente de produÃ§Ã£o.
4. FaÃ§a o primeiro deploy.
5. Verifique logs sem expor dados pessoais.

## 3. DomÃ­nio e HTTPS

1. Configure o domÃ­nio na Vercel.
2. Aponte DNS pela Cloudflare ou provedor escolhido.
3. Confirme certificado HTTPS ativo.
4. Confirme que `NEXT_PUBLIC_SITE_URL` usa HTTPS.
5. Confirme que HSTS estÃ¡ presente em produÃ§Ã£o.

## 4. Checklist prÃ©-publicaÃ§Ã£o

- Landing responsiva revisada no celular.
- FormulÃ¡rio validando campos obrigatÃ³rios.
- Backend validando campos obrigatÃ³rios.
- Aceite de PolÃ­tica de Privacidade obrigatÃ³rio.
- Redirecionamento direto para WhatsApp liberado apÃ³s cadastro vÃ¡lido.
- `COMMUNITY_URL` configurada com HTTPS.
- `siteConfig.communityUrl` apontando para o mesmo link da comunidade.
- PolÃ­tica de Privacidade publicada.
- Termos de Uso publicados.
- Sem checkout como destino da landing.
- Sem gateway de pagamento.
- Sem pixel ou analytics ativo.
- Sem cookies nÃ£o essenciais.
- Headers de seguranÃ§a ativos.
- Nenhum dado pessoal em logs.

## 5. Banco de dados futuro

O MVP atual nÃ£o exige PostgreSQL. Se a equipe decidir armazenar leads futuramente:

1. Criar banco Supabase Postgres, Neon ou outro provedor gerenciado.
2. Configurar `DATABASE_URL` somente no ambiente de deploy.
3. Reativar a persistÃªncia no serviÃ§o de leads.
4. Salvar apenas hash de tokens, nunca token puro, se tokens forem reativados.
5. Atualizar PolÃ­tica de Privacidade, Termos de Uso, `docs/lgpd.md` e `docs/security.md`.
6. Configurar backup, retenÃ§Ã£o, controle de acesso e canal de exclusÃ£o.

## 6. Analytics/pixel futuro

NÃ£o ativar pixel ou analytics no MVP.

Para adicionar futuramente:

1. Criar banner de consentimento de cookies.
2. Separar cookies essenciais de marketing/analytics.
3. Registrar versÃ£o e data do consentimento.
4. Carregar scripts somente apÃ³s aceite.
5. Atualizar PolÃ­tica de Privacidade, Termos de Uso e `docs/analytics-consent.md`.

