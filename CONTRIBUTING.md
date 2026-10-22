# Contribuindo

Obrigado por considerar contribuir com o **invest-skill**.

## Conventional Commits

Todos os commits deste repositório **devem** seguir o formato [Conventional Commits](https://www.conventionalcommits.org/).

### Formato

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types permitidos

| Type | Quando usar |
|------|-------------|
| `feat` | Nova skill, funcionalidade ou capacidade |
| `fix` | Correção de bug ou de prompt |
| `docs` | Apenas documentação (README, ADR, etc.) |
| `style` | Formatação, espaços, sem mudança de significado |
| `refactor` | Refatoração sem mudar comportamento |
| `perf` | Melhoria de performance |
| `test` | Adição ou correção de testes |
| `build` | Build, dependências, tooling |
| `ci` | Configuração de CI/CD |
| `chore` | Manutenção (configs, limpeza, etc.) |
| `revert` | Reverte um commit anterior |

### Exemplos

```bash
feat: add portfolio-review skill for Brazilian assets

feat(fii): add vacancy and P/VP metrics to analysis prompt

fix: correct Tesouro Direto duration calculation guidance

docs: update ADR index with licensing decision

chore: configure commitlint and husky

ci: add commitlint workflow for pull requests
```

### Escopo (opcional)

Use escopo quando a mudança for específica de uma área, por exemplo:

- `feat(fii): ...`
- `docs(adr): ...`
- `fix(portfolio-review): ...`

### Setup local

```bash
npm install
```

Isso instala as dependências e ativa o Husky. O hook `commit-msg` valida cada commit com o Commitlint.

### Template de mensagem de commit (opcional)

O repositório inclui o arquivo `.gitmessage`. Para usá-lo no seu clone:

```bash
git config commit.template .gitmessage
```

Assim, `git commit` (sem `-m`) abre o editor já com o template do Conventional Commits.

Para desativar:

```bash
git config --unset commit.template
```

### Pull Requests

O workflow de CI também valida todos os commits do PR. Garanta que o histórico esteja em Conventional Commits antes de abrir ou atualizar o PR.

## Documentação de decisões

Mudanças arquiteturais relevantes devem ser registradas como ADR em `docs/adr/` (veja [docs/adr/README.md](docs/adr/README.md)).
