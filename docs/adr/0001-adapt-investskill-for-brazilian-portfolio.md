# 1. Adapt InvestSkill for Brazilian multi-asset portfolio management

Date: 2026-10-21

## Status

Accepted

## Context

We need an AI-assisted framework to support monthly investment portfolio reviews ("portes"), with these requirements:

- Analysis based on sectors/themes the investor has researched and finds interesting
- Identification of opportunities within each sector
- Full consideration of current net worth, current strategy, and long-term strategy
- Native or easily adaptable support for Brazilian assets beyond stocks: Fundos Imobiliários (FIIs), Tesouro Direto, DI/CDI and other fixed-income products
- Fully executable and versionable inside a Git repository

Most open-source AI investment frameworks are US-centric (stocks, ETFs, SEC filings, yfinance). They usually require a non-trivial runtime, API keys, or significant code changes to handle Brazilian multi-asset reality well.

## Decision

We will adapt [InvestSkill](https://github.com/yennanliu/InvestSkill) (prompt-based analysis skills for LLMs) as the foundation of this repository.

InvestSkill provides structured Markdown prompts ("skills") that work with any AI agent, without a heavy runtime. The approach is highly adaptable: we can modify asset classes, metrics, sectors, and output formats to cover Brazilian FIIs, Tesouro Direto, CDI, and local macro context while keeping full control of portfolio data and decision history in Git.

## Consequences

### Positive

- Lightweight and portable: pure prompts, works with Claude, Gemini, Cursor, Grok, Ollama, etc.
- Easy to version decisions, portfolio snapshots, and monthly reports in Git
- Investor retains full control of private data ("bring your own data")
- Existing skills (`portfolio-review`, `sector-analysis`, `risk-stress-test`, etc.) already align with monthly rebalancing needs
- MIT license allows free adaptation

### Negative / Trade-offs

- Original skills are US-stock oriented; Brazilian adaptations (FII metrics, Tesouro ranking, Selic/IPCA scenarios, local tax considerations) must be written and maintained
- No built-in data fetching for B3/FIIs/Tesouro — data must be supplied by the user or by complementary scripts
- Requires discipline to keep prompts and portfolio files up to date

### Follow-up

- Adapt priority skills for Brazilian asset classes
- Create dedicated skills for FIIs and Tesouro Direto when needed
- Define portfolio data structure and monthly workflow
- Document usage and evolution of the adapted skills
