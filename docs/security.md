# Segurança

Checklist estrutural de segurança do MVP.

## Rate limit

- O fluxo principal do botão redireciona direto após validação local e não envia dados pessoais para a API.
- `POST /api/leads` permanece preparado com rate limit básico por IP em memória para uso futuro.
- Para alto tráfego, produção distribuída ou múltiplas instâncias serverless, migrar para Redis, Upstash ou solução equivalente.

## Validação server-side

- Todos os campos do cadastro são validados no formulário com Zod antes do redirecionamento.
- Se a captura em servidor for reativada futuramente, a validação server-side deve voltar a ser obrigatória no fluxo principal.
- Consentimento de privacidade é obrigatório.

## Sanitização

- Nome e campos de origem removem caracteres de controle, `<`, `>` e espaços duplicados.
- Telefone é normalizado para formato internacional simples.
- Instagram remove espaços, `@` duplicado e é convertido para minúsculas.

## Logs seguros

- Não registrar nome, telefone ou Instagram.
- Erros enviados à usuária são genéricos.
- Stack traces não são expostos para o usuário final.

## Secrets

- Segredos ficam em variáveis de ambiente.
- `COMMUNITY_URL` e credenciais futuras não devem ser hardcoded.
- Variáveis de ambiente são validadas com Zod em `src/lib/env.ts`.
- `COMMUNITY_URL` aceita apenas HTTPS.

## Redirecionamento

- A URL da comunidade usada pelo botão principal está centralizada em `src/config/site.ts`.
- `COMMUNITY_URL` permanece disponível para rotas server-side e deve usar o mesmo destino.
- A URL deve começar com `https://`.
- Não há armazenamento de dados pessoais, token ou hash no banco no MVP atual.

## Backup

- Como o MVP atual não armazena leads em banco, não há backup de banco obrigatório para o fluxo de captura.
- Se banco, planilha ou CRM forem ativados futuramente, configurar backup, retenção, controle de acesso e teste de restauração antes de usar dados reais.

## HTTPS

- Produção deve operar somente com HTTPS.
- `COMMUNITY_URL` e `CHECKOUT_URL` futura devem começar com `https://`.
- HSTS é aplicado em produção.

## Headers

Configurados em `next.config.ts` e `src/config/security.ts`:

- `Content-Security-Policy`
- `Strict-Transport-Security` em produção
- `X-Frame-Options`
- `frame-ancestors 'none'` na CSP
- `X-Content-Type-Options`
- `Referrer-Policy`
- `Permissions-Policy`

## Dependências

- Manter `package-lock.json` versionado.
- Rodar `npm audit` periodicamente.
- Evitar novas bibliotecas sem necessidade clara.
- Atualizar dependências com revisão de changelog quando houver breaking changes.

## Banco e queries

- O fluxo atual não usa banco de dados.
- Prisma/PostgreSQL podem ser retomados futuramente caso a equipe decida armazenar leads.
- Se o banco for reativado, usar ORM, migrations revisadas e nunca salvar token puro.

## Analytics e pixel

- Não há analytics, pixel ou cookies não essenciais no MVP.
- Implementação futura deve carregar scripts somente após consentimento explícito.
