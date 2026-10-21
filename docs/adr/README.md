# Architecture Decision Records (ADRs)

Este diretório contém os **Architecture Decision Records** do projeto `invest-skill`.

Seguimos o formato e a convenção do [npryce/adr-tools](https://github.com/npryce/adr-tools), baseado no template de [Michael Nygard](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions).

## Formato de cada ADR

```markdown
# N. Título da decisão

Date: YYYY-MM-DD

## Status

Proposed | Accepted | Deprecated | Superseded by ADR-XXXX | Rejected

## Context

O problema ou motivação que levou à decisão.

## Decision

A decisão tomada.

## Consequences

O que se torna mais fácil ou mais difícil por causa desta decisão.
```

## Convenções

| Item | Padrão |
|------|--------|
| Nome do arquivo | `NNNN-titulo-em-kebab-case.md` |
| Numeração | Sequencial, com 4 dígitos (`0001`, `0002`, …) |
| Idioma | Português (decisões e contexto do projeto) |
| Status inicial | `Accepted` (quando a decisão já foi tomada) ou `Proposed` |

## Índice de ADRs

| Número | Título | Status | Data |
|--------|--------|--------|------|
| [0001](0001-adapt-investskill-for-brazilian-portfolio.md) | Adapt InvestSkill for Brazilian multi-asset portfolio management | Accepted | 2026-10-21 |

## Como criar um novo ADR

1. Escolha o próximo número disponível.
2. Crie o arquivo `docs/adr/NNNN-titulo-em-kebab-case.md`.
3. Preencha as seções **Status**, **Context**, **Decision** e **Consequences**.
4. Atualize a tabela de índice acima.
5. Faça o commit.

Opcionalmente, use a ferramenta [`adr-tools`](https://github.com/npryce/adr-tools) localmente:

```bash
adr new "Título da decisão"
```

## Referências

- [Documenting Architecture Decisions – Michael Nygard](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions)
- [npryce/adr-tools](https://github.com/npryce/adr-tools)
