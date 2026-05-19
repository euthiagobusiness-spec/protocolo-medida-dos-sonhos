# LGPD

Documento inicial para o MVP do Protocolo Medida dos Sonhos. Deve ser revisado por assessoria jurídica antes da publicação definitiva.

## Mapa de dados

| Dado | Coletado onde | Finalidade | Observação |
| --- | --- | --- | --- |
| Nome completo | Formulário da landing | Identificar a interessada no fluxo de cadastro e melhorar a aparência profissional do acesso | Validado no formulário; não é armazenado no MVP atual |
| Telefone | Formulário da landing | Manter a etapa de cadastro antes do acesso à comunidade | Normalizado no formulário; não é armazenado no MVP atual |
| Instagram | Formulário da landing | Permitir identificação e relacionamento manual durante o lançamento | Normalizado removendo espaços e `@` duplicado; não é armazenado no MVP atual |
| Origem/UTM | Query string, quando existir | Medir origem operacional no momento da submissão | Não é analytics externo; não é armazenado no MVP atual |
| Consentimento | Checkbox do formulário | Autorizar uso dos dados para liberar acesso e comunicações sobre o protocolo | Obrigatório para liberar o redirecionamento |
| URL da comunidade | Variável de ambiente | Redirecionar a usuária após cadastro validado | Deve usar HTTPS |

O MVP não coleta peso, medidas, fotos, dados de saúde ou qualquer dado sensível.

## Finalidades

- Liberar acesso à comunidade do WhatsApp após cadastro e aceite.
- Informar a usuária sobre comunicações relacionadas ao Protocolo Medida dos Sonhos.
- Organizar o fluxo operacional do lançamento sem venda direta na landing page.
- Permitir relacionamento manual por WhatsApp, telefone ou Instagram, caso a equipe use os dados informados no momento do contato.

## Base de uso operacional

O uso dos dados se apoia no consentimento informado pela usuária e na necessidade operacional de liberar acesso à comunidade. A base legal definitiva, o texto final de consentimento e eventuais mudanças de retenção devem ser validados juridicamente antes da publicação.

## Consentimentos registrados

Nesta versão sem banco, o sistema exige aceite da Política de Privacidade antes de liberar o redirecionamento para a comunidade. A versão de consentimento é configurada em `CONSENT_VERSION`.

Texto usado no formulário:

> Li e aceito a Política de Privacidade. Autorizo o uso dos meus dados para receber acesso à comunidade e comunicações sobre o Protocolo Medida dos Sonhos por WhatsApp, telefone ou Instagram.

## Retenção sugerida

Como o MVP atual não armazena leads no banco, não há base de leads persistida pela aplicação. Se a equipe passar a copiar dados para planilha, CRM, WhatsApp Business ou outra ferramenta, deve definir prazo de retenção, canal de exclusão e controle de acesso antes de usar dados reais em produção.

## Terceiros envolvidos

- WhatsApp, para acesso à comunidade.
- Vercel, caso seja usada no deploy.
- Cloudflare ou provedor de DNS/CDN, caso configurado.
- Ferramentas futuras de CRM, planilhas, banco de dados, analytics ou pixel somente após revisão e atualização de consentimento.

## Canal de exclusão

A equipe deve definir e divulgar um canal oficial para solicitações de exclusão, correção ou acesso aos dados. Esse canal precisa constar na versão jurídica final da Política de Privacidade.

## Analytics, pixel e cookies

O MVP não usa analytics, pixel ou cookies não essenciais. Qualquer inclusão futura deve depender de consentimento prévio, registro da versão do consentimento e atualização da Política de Privacidade.

## Observação jurídica

Este documento não substitui revisão jurídica. Antes do lançamento público, valide base legal, prazos de retenção, canal de atendimento e contratos com operadores de dados.
