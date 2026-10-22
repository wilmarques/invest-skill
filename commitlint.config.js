/** @type {import('@commitlint/types').UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // nova funcionalidade / skill
        'fix',      // correção de bug
        'docs',     // documentação apenas
        'style',    // formatação, sem mudança de significado
        'refactor', // refatoração sem mudar comportamento
        'perf',     // melhoria de performance
        'test',     // testes
        'build',    // build ou dependências
        'ci',       // CI/CD
        'chore',    // tarefas de manutenção
        'revert',   // reverte um commit anterior
      ],
    ],
    'subject-case': [0], // permite qualquer case no subject (útil em PT)
  },
};
