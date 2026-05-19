# Analytics e consentimento futuro

O MVP do Protocolo Medida dos Sonhos não ativa pixel, analytics ou cookies não essenciais.

## Como adicionar futuramente

1. Criar banner de consentimento antes de carregar qualquer script não essencial.
2. Separar consentimento por finalidade, como analytics, marketing e remarketing.
3. Registrar versão, data, finalidade e origem do consentimento.
4. Permitir recusa sem bloquear o uso essencial da landing.
5. Carregar scripts somente depois do aceite.
6. Atualizar Política de Privacidade e Termos de Uso.
7. Documentar fornecedores, dados compartilhados e prazos de retenção.

## Eventos planejados

Eventos que podem ser implementados no futuro, mediante consentimento quando necessário:

- `lead_submitted`
- `community_access_released`
- `community_button_clicked`
- `privacy_policy_viewed`
- `form_error`

## Estado atual

Nenhum desses eventos envia dados para ferramentas externas no MVP.
