# invest-skill

**Adaptação brasileira do [InvestSkill](https://github.com/yennanliu/InvestSkill)** — frameworks de análise de investimentos baseados em prompts (skills) para qualquer agente de IA.

## Objetivo

Framework leve e totalmente executável em repositório Git para **rebalanceamento mensal de carteira**, considerando:

- Patrimônio atual completo
- Estratégia atual + estratégia de longo prazo
- Setores/temas pesquisados pelo investidor
- Oportunidades dentro de cada setor
- Ativos brasileiros: **ações B3**, **Fundos Imobiliários (FIIs)**, **Tesouro Direto**, **CDI/DI** e outros produtos de renda fixa

## Por que esta abordagem?

O InvestSkill original oferece frameworks estruturados em Markdown puro (sem runtime, sem API keys obrigatórias).  
Isso permite:

- Usar em qualquer LLM / agente (Claude, Gemini, Cursor, Grok, Ollama etc.)
- Versionar prompts e decisões no Git
- Adaptar facilmente para o contexto brasileiro (classes de ativos, métricas de FII, Selic/IPCA, tributação local)
- Manter o investidor no controle dos dados (você cola a carteira e as fontes)

A decisão de arquitetura está registrada em:

- [`docs/adr/0001-adapt-investskill-for-brazilian-portfolio.md`](docs/adr/0001-adapt-investskill-for-brazilian-portfolio.md) (formato ADR — [npryce/adr-tools](https://github.com/npryce/adr-tools))

## Status atual

Repositório em configuração inicial.  
Próximos passos planejados:

1. Adaptar skills prioritárias (`portfolio-review`, `sector-analysis`, `risk-stress-test` etc.)
2. Criar skills específicas para FIIs e Tesouro Direto
3. Definir estrutura de carteira (YAML/Markdown) + fluxo mensal
4. Exemplos de uso e templates

## Origem

Baseado no excelente trabalho de [yennanliu/InvestSkill](https://github.com/yennanliu/InvestSkill) (MIT License).  
Esta é uma adaptação independente focada no mercado brasileiro.

## Licença

MIT (mesmo espírito do projeto original).
