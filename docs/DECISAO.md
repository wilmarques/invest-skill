# Documento de Decisão — Escolha do Framework

**Data:** 2026-10-21  
**Repositório:** [wilmarques/invest-skill](https://github.com/wilmarques/invest-skill)

## Contexto

Necessidade de um framework com IA para apoio ao **porte/rebalanceamento mensal de investimentos**, com os seguintes requisitos:

- Baseado nos setores/temas que o investidor pesquisa e considera interessantes
- Identificação de oportunidades dentro de cada setor
- Consideração do patrimônio atual completo, estratégia atual e estratégia de longo prazo
- Suporte nativo (ou facilmente adaptável) a ativos brasileiros além de ações: **Fundos Imobiliários (FIIs)**, **Tesouro Direto**, **DI/CDI** e demais produtos de renda fixa
- Totalmente executável e versionável em um repositório Git

## Alternativas avaliadas

Foram analisados frameworks e projetos de código aberto focados em agentes de IA para análise/gestão de investimentos (multi-agentes estilo hedge fund, otimização de portfólio, trackers diários etc.). A maioria é fortemente orientada ao mercado americano (ações, ETFs, dados via yfinance/SEC) e exige runtime, chaves de API ou adaptação profunda de código para funcionar bem com FIIs, Tesouro Direto e renda fixa brasileira.

## Decisão

**Adotar e adaptar o InvestSkill** ([yennanliu/InvestSkill](https://github.com/yennanliu/InvestSkill)).

### Motivos da escolha

1. **Arquitetura baseada em prompts (skills)**  
   Cada framework é um arquivo Markdown estruturado. Não há runtime pesado. Funciona em qualquer agente de IA (Claude Code, Cursor, Gemini, ChatGPT, Grok, Ollama local etc.).

2. **Alta adaptabilidade**  
   É relativamente simples modificar seções de classes de ativos, setores, métricas e formatos de saída para incluir FIIs (P/VP, vacância, DY, qualidade de gestão), Tesouro Direto (duration, taxa real, Selic/IPCA+), CDI e alocação multi-classe brasileira.

3. **Controle total do investidor**  
   Os dados da carteira e as fontes são fornecidos pelo usuário ("bring your own data"). Ideal para patrimônio privado e estratégia de longo prazo.

4. **Versionamento natural em Git**  
   Prompts, carteira, relatórios mensais e decisões ficam no repositório. Histórico completo e auditável.

5. **Skills já alinhadas com o caso de uso**  
   Especialmente `portfolio-review` (alocação, concentração, rebalanceamento), `sector-analysis`, `risk-stress-test`, `stock-screener` e `thesis-tracker` servem como base sólida.

6. **Licença permissiva (MIT)**  
   Permite fork, adaptação e uso pessoal/comercial sem restrições relevantes.

### O que será feito nesta adaptação

- Manter o espírito original (prompts estruturados, sem runtime obrigatório)
- Adaptar as skills prioritárias para classes de ativos e realidades brasileiras
- Criar skills específicas quando necessário (ex.: análise de FIIs, ranking de títulos do Tesouro)
- Definir estrutura de dados de carteira + fluxo mensal de execução
- Documentar o processo de uso e evolução

## Conclusão

A escolha de uma **adaptação do InvestSkill** atende melhor os requisitos de flexibilidade, controle, suporte a ativos brasileiros e execução 100% via repositório Git, em comparação com frameworks multi-agente mais pesados e centrados no mercado americano.

Este documento registra a decisão para referência futura.
