# Protocolo Medida dos Sonhos

Landing page de captura para o lançamento digital fitness do **Protocolo Medida dos Sonhos**, projeto do expert **Maicon Silva**.

O MVP foi criado para apresentar a promessa do protocolo, validar dados básicos da visitante e liberar o redirecionamento para a comunidade oficial do WhatsApp. A landing **não vende diretamente**, **não possui checkout**, **não processa pagamentos**, **não possui área de membros** e **não ativa pixel, analytics ou cookies não essenciais** nesta versão.

## Objetivo do projeto

Capturar interessadas qualificadas para uma comunidade de lançamento da consultoria online de definição feminina, mantendo uma experiência visual premium, responsiva e com cuidados básicos de LGPD e segurança.

O fluxo atual prioriza simplicidade operacional:

1. A visitante acessa a landing page.
2. Entende a proposta do Protocolo Medida dos Sonhos.
3. Preenche nome completo, telefone e Instagram.
4. Aceita a Política de Privacidade.
5. Com os campos válidos, é redirecionada para a comunidade do WhatsApp.

## Público-alvo

Mulheres de 25 a 45 anos que buscam emagrecimento, definição corporal, melhora de autoestima, feminilidade e constância sem dietas extremas ou rotinas impossíveis de manter.

## Proposta de valor

Definir o corpo com estratégia, leveza e feminilidade, sem viver na restrição, por meio de um protocolo focado em treino, alimentação, acompanhamento e mentalidade.

## Funcionalidades principais

- Landing page responsiva e mobile-first.
- Header minimalista com navegação e CTA.
- Hero com promessa principal e formulário de acesso no topo.
- Seções comerciais: transformação, entregáveis, como funciona, informações, prova social, expert, bônus, garantia, FAQ e suporte.
- Identidade visual dark premium com liquid glass/glassmorphism.
- Interações visuais com movimento do ponteiro e scroll.
- Imagens locais para expert, estrategista, desenvolvedor, prova social e background.
- Formulário obrigatório com nome completo, telefone, Instagram e aceite LGPD.
- Validação nativa do navegador no fluxo ativo do formulário.
- Redirecionamento direto para a comunidade do WhatsApp após preenchimento válido.
- Páginas legais iniciais de Política de Privacidade e Termos de Uso.
- Documentação de LGPD, segurança, deploy e analytics futuro.
- Headers de segurança configurados no Next.js.
- Estrutura preparada para futura retomada de API, Prisma, PostgreSQL e persistência de leads.

## Stack utilizada

- **Next.js** com App Router.
- **TypeScript**.
- **React**.
- **Tailwind CSS**.
- **Lucide React** para ícones.
- **Next Fonts** com `Plus Jakarta Sans` e `Cormorant Garamond`.
- **Zod** para schemas e validação server-side preparada.
- **Prisma** com schema PostgreSQL preparado para uso futuro.
- **React Hook Form** instalado como dependência, mas não usado no formulário ativo atual.

## Decisões técnicas importantes

- O fluxo ativo atual **não salva leads no banco**. A decisão de produto mais recente foi liberar o acesso ao WhatsApp após preenchimento obrigatório e aceite LGPD.
- O formulário ativo está em `src/components/forms/LeadCaptureForm.tsx` e usa `<form action="...">` com `method="get"` para redirecionamento direto ao WhatsApp.
- Os campos do formulário não possuem atributo `name`, para evitar que nome, telefone e Instagram sejam anexados à URL do WhatsApp.
- O link ativo da comunidade está centralizado em `src/config/site.ts`, em `siteConfig.communityUrl`.
- `COMMUNITY_URL` continua existindo em `.env.example` e em `src/lib/env.ts` para rotas server-side e arquitetura futura. Enquanto o fluxo direto continuar ativo, o valor de `COMMUNITY_URL` e `siteConfig.communityUrl` devem ser mantidos iguais.
- Prisma e o model `Lead` continuam no projeto como fundação futura, mas não fazem parte do funil ativo.
- A rota `POST /api/leads` permanece no projeto como base preparada, com validação, rate limit e resposta segura, mas não é usada pelo formulário principal neste momento.
- A página `/acesso-liberado` ainda existe como fluxo legado/preparado com token, mas o fluxo principal atual redireciona direto para o WhatsApp.
- Não há analytics, pixel ou banner de cookies ativo. A estrutura para uma implementação futura está documentada em `docs/analytics-consent.md`.

## Estrutura de pastas

```txt
.
├── docs
│   ├── analytics-consent.md
│   ├── deploy.md
│   ├── lgpd.md
│   └── security.md
├── prisma
│   └── schema.prisma
├── public
│   ├── backgrounds
│   ├── developer
│   ├── expert
│   ├── social-proof
│   └── strategist
├── src
│   ├── app
│   │   ├── acesso-liberado
│   │   ├── api
│   │   │   └── leads
│   │   ├── politica-de-privacidade
│   │   ├── termos-de-uso
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components
│   │   ├── effects
│   │   ├── forms
│   │   ├── layout
│   │   ├── sections
│   │   └── ui
│   ├── config
│   ├── features
│   │   ├── analytics
│   │   └── privacy
│   ├── lib
│   ├── schemas
│   ├── services
│   └── types
├── next.config.ts
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Arquivos mais importantes

- `src/app/page.tsx`: renderiza a landing principal.
- `src/components/sections/LandingPage.tsx`: organiza a ordem das seções da landing.
- `src/components/forms/LeadCaptureForm.tsx`: formulário ativo de captura e redirecionamento.
- `src/config/site.ts`: informações centrais do projeto, links, imagens, expert, suporte, comunidade e data do lançamento.
- `src/app/globals.css`: identidade visual, liquid glass, responsividade, efeitos globais e refinamentos de layout.
- `src/components/effects/InteractiveBackdrop.tsx`: efeito visual que acompanha mouse e scroll.
- `src/config/security.ts`: CSP e headers de segurança.
- `next.config.ts`: configuração do Next.js e aplicação dos headers.
- `src/lib/env.ts`: validação de variáveis de ambiente com Zod para rotas server-side/preparadas.
- `src/app/api/leads/route.ts`: rota preparada para captura via API, atualmente fora do fluxo principal.
- `prisma/schema.prisma`: modelo `Lead` preparado para uma versão futura com PostgreSQL.
- `docs/lgpd.md`: mapa de dados, consentimento, terceiros e retenção sugerida.
- `docs/security.md`: checklist de segurança.
- `docs/deploy.md`: guia de publicação na Vercel.
- `docs/analytics-consent.md`: orientação para analytics/pixel futuro com consentimento.

## Fluxo de uso

### Fluxo ativo atual

1. A usuária acessa `/`.
2. O CTA rola até o formulário ou mantém o formulário visível no hero.
3. A usuária preenche:
   - Nome completo.
   - Telefone com DDD.
   - Instagram.
4. A usuária marca o aceite da Política de Privacidade.
5. O navegador valida os campos obrigatórios e padrões definidos no formulário.
6. Se tudo estiver correto, o formulário redireciona para a comunidade do WhatsApp configurada em `siteConfig.communityUrl`.

### Fluxo preparado/legado

O projeto ainda contém estrutura para um fluxo com API, token e validação em `/acesso-liberado`, mas este fluxo não está ativo no formulário principal neste momento.

Se a captura com banco for retomada futuramente, será necessário revisar:

- Persistência em `src/services/lead.service.ts`.
- Uso de `POST /api/leads`.
- Configuração de `DATABASE_URL`.
- Migrations Prisma.
- Registro real de consentimento.
- Hash de token e página `/acesso-liberado`.
- Atualização da Política de Privacidade e dos documentos de LGPD.

## Pré-requisitos

- Node.js compatível com Next.js 16.
- npm.
- Git, caso o projeto seja versionado em repositório remoto.
- Conta Vercel para deploy, se for publicar em produção.
- Domínio final e HTTPS configurado antes de divulgar publicamente.

Para uma futura versão com banco:

- PostgreSQL gerenciado, como Supabase ou Neon.
- `DATABASE_URL` configurada.

## Como instalar

No terminal, dentro da pasta do projeto:

```bash
npm install
```

## Como configurar o `.env`

Crie um arquivo `.env.local` a partir do exemplo:

```bash
cp .env.example .env.local
```

No Windows PowerShell, se preferir:

```powershell
Copy-Item .env.example .env.local
```

Depois ajuste os valores.

### Variáveis obrigatórias para server-side/preparação de produção

```bash
COMMUNITY_URL="https://chat.whatsapp.com/GuCZGKrSJU11sJX63yyvR7"
CONSENT_VERSION="2026-05-13"
NEXT_PUBLIC_SITE_URL="https://seudominio.com.br"
```

| Variável | Obrigatória | Função |
| --- | --- | --- |
| `COMMUNITY_URL` | Sim para rotas server-side/preparadas | Link HTTPS da comunidade oficial do WhatsApp. |
| `CONSENT_VERSION` | Sim | Versão do texto de consentimento LGPD. |
| `NEXT_PUBLIC_SITE_URL` | Recomendado em produção | URL pública final do site, sempre com HTTPS. |

### Variáveis opcionais/preparadas para futuro

```bash
CHECKOUT_URL=""
LAUNCH_DATE="2026-05-31"
PAYMENT_PROVIDER=""
ACCESS_TOKEN_SECRET=""
DATABASE_URL=""
```

| Variável | Obrigatória | Função |
| --- | --- | --- |
| `CHECKOUT_URL` | Não | Placeholder futuro. Não é usada no MVP atual. |
| `LAUNCH_DATE` | Não | Data futura de lançamento. O site atual destaca `31/05` via `src/config/site.ts`. |
| `PAYMENT_PROVIDER` | Não | Placeholder futuro. Não há pagamento no MVP. |
| `ACCESS_TOKEN_SECRET` | Não no fluxo atual | Segredo para token assinado caso o fluxo `/acesso-liberado` seja reativado. |
| `DATABASE_URL` | Não no fluxo atual | Necessária apenas se Prisma/PostgreSQL forem ativados. |

Regras:

- Não use URL `http://` em produção.
- `COMMUNITY_URL`, `NEXT_PUBLIC_SITE_URL` e `CHECKOUT_URL`, se usada, devem começar com `https://`.
- Enquanto o formulário direto estiver ativo, mantenha `src/config/site.ts` e `.env.local` com o mesmo link da comunidade.

## Como executar localmente

```bash
npm run dev
```

Depois abra:

```txt
http://localhost:3000
```

ou:

```txt
http://127.0.0.1:3000
```

## Scripts disponíveis

```bash
npm run dev
```

Inicia o servidor de desenvolvimento.

```bash
npm run build
```

Gera o build de produção.

```bash
npm run start
```

Inicia a aplicação em modo produção depois do build.

```bash
npm run typecheck
```

Executa a checagem TypeScript sem emitir arquivos.

```bash
npm run prisma:generate
```

Gera o Prisma Client. Só é necessário se a estrutura Prisma for usada.

```bash
npm run prisma:migrate
```

Executa migrations em desenvolvimento. Exige `DATABASE_URL`.

```bash
npm run prisma:studio
```

Abre o Prisma Studio. Exige `DATABASE_URL`.

## Banco de dados

O MVP atual **não depende de banco de dados** para funcionar.

Ainda existe uma fundação Prisma/PostgreSQL com o model `Lead`, preparada para uma possível evolução. O model atual possui:

- `id`
- `fullName`
- `phone`
- `instagram`
- `source`
- `utmSource`
- `utmMedium`
- `utmCampaign`
- `status`
- `consentPrivacy`
- `consentMarketing`
- `consentVersion`
- `consentAt`
- `accessTokenHash`
- `createdAt`
- `updatedAt`

Status previstos:

- `NEW`
- `COMMUNITY_ACCESSED`
- `CONTACTED`
- `CONVERTED`
- `LOST`

Antes de ativar banco em produção, confirme:

- Base legal e retenção de dados.
- Canal de exclusão/correção.
- Controle de acesso ao banco.
- Backup e restauração.
- Logs sem dados pessoais.
- Hash de tokens, nunca token puro.

## Segurança

Implementado/preparado:

- CSP inicial.
- `frame-ancestors 'none'`.
- `X-Frame-Options: DENY`.
- `X-Content-Type-Options: nosniff`.
- `Referrer-Policy`.
- `Permissions-Policy`.
- HSTS em produção.
- Validação de ambiente com Zod.
- `COMMUNITY_URL` server-side exige HTTPS.
- Rota de leads preparada com rate limit básico.
- Sanitização e normalização no schema de lead.
- Sem query raw.
- Sem checkout, pagamento, painel admin, área de membros, analytics ou pixel.

Pontos de atenção:

- O fluxo ativo atual valida no navegador e redireciona direto. Isso atende à decisão atual de não persistir dados, mas não registra lead no servidor.
- Se a empresa precisar armazenar leads, medir conversão por lead ou auditar consentimento individual, será necessário reativar um backend de captura.

## LGPD

O formulário exige aceite do seguinte texto:

> Li e aceito a Política de Privacidade. Autorizo o uso dos meus dados para receber acesso à comunidade e comunicações sobre o Protocolo Medida dos Sonhos por WhatsApp, telefone ou Instagram.

No MVP atual:

- Nome, telefone e Instagram são exigidos no formulário.
- Os dados não são armazenados pela aplicação.
- Não são coletados peso, medidas, fotos ou dados de saúde.
- Não há cookies não essenciais.
- Não há analytics/pixel.
- Política de Privacidade e Termos de Uso existem como páginas iniciais e devem ser revisados juridicamente.

Documentação relacionada:

- `docs/lgpd.md`
- `docs/security.md`
- `docs/analytics-consent.md`

## Deploy

O deploy recomendado é na Vercel.

Checklist básico:

1. Criar repositório Git.
2. Subir o projeto para GitHub.
3. Conectar o repositório à Vercel.
4. Configurar variáveis de ambiente.
5. Confirmar comando de build: `npm run build`.
6. Configurar domínio final.
7. Confirmar HTTPS ativo.
8. Testar formulário em produção.
9. Validar que o botão redireciona para o link correto do WhatsApp.
10. Revisar Política de Privacidade e Termos de Uso antes de tráfego real.

Mais detalhes em `docs/deploy.md`.

## Estado atual do projeto

Funcional:

- Landing principal.
- Design dark premium com liquid glass.
- Responsividade desktop/mobile.
- Formulário obrigatório.
- Aceite LGPD obrigatório.
- Redirecionamento direto para WhatsApp após validação.
- Links clicáveis para Instagram do expert, estrategista, desenvolvedor, email e suporte.
- Páginas legais iniciais.
- Documentação de LGPD, segurança, deploy e analytics futuro.
- Headers de segurança.

A confirmar antes de produção:

- Domínio final.
- Revisão jurídica dos textos legais.
- Se a equipe manterá o fluxo sem banco ou retomará captura persistida.
- Canal oficial para solicitações LGPD.
- Link final e permanente da comunidade WhatsApp.
- Identidade visual final, logotipo e tipografia definitiva.

## Próximos passos recomendados

Técnicos:

- Criar repositório Git e primeiro commit.
- Configurar deploy na Vercel.
- Configurar domínio final com HTTPS.
- Decidir se `siteConfig.communityUrl` deve continuar centralizado no código ou se o link será lido exclusivamente do ambiente em produção.
- Se banco for retomado, implementar persistência real com Prisma e atualizar fluxo, LGPD e segurança.
- Adicionar testes automatizados mínimos para validação do formulário e links principais.
- Rodar `npm audit` periodicamente.

Produto e UX:

- Validar copy final do lançamento.
- Revisar fotos, background, prova social e identidade visual final.
- Adicionar logotipo definitivo.
- Confirmar data de lançamento `31/05` em todos os textos.
- Revisar mobile em dispositivos reais.
- Garantir que todos os CTAs tenham destino correto.

Segurança e LGPD:

- Revisar Política de Privacidade com assessoria jurídica.
- Revisar Termos de Uso com assessoria jurídica.
- Definir canal oficial de exclusão/correção de dados.
- Documentar operadores de dados envolvidos.
- Se analytics/pixel forem adicionados, implementar banner de consentimento antes de carregar scripts.

## Observações importantes

- Não implementar checkout, gateway de pagamento, área de membros ou painel administrativo neste MVP.
- Não ativar analytics ou pixel sem consentimento.
- Não coletar dados sensíveis.
- Não registrar dados pessoais em logs.
- Não usar HTTP em produção.
- O checkout, se existir no futuro, deve ser conduzido fora da landing e dentro da estratégia definida pela equipe.
