# 2. Use Conventional Commits

Date: 2026-10-21

## Status

Accepted

## Context

O repositório precisa de um padrão claro e consistente de mensagens de commit para facilitar o histórico, geração de changelogs e revisão de mudanças (skills, documentação e configuração).

## Decision

Adotar [Conventional Commits](https://www.conventionalcommits.org/) em todos os commits do projeto.

A validação será feita por:

- **Commitlint** + **@commitlint/config-conventional** (regras locais)
- **Husky** (`commit-msg` hook) para bloquear commits inválidos no ambiente local
- **GitHub Actions** para validar commits em Pull Requests

A documentação da convenção fica em `CONTRIBUTING.md`.

## Consequences

### Positive

- Histórico legível e padronizado
- Facilita automação de changelog e versionamento semântico no futuro
- Commits inválidos são rejeitados cedo (local + CI)

### Negative / Trade-offs

- Requer `npm install` para ativar o hook local
- Contribuidores precisam conhecer o formato (mitigado pela documentação)
