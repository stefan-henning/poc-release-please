module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'release',
        'feat',
        'fix',
        'perf',
        'deps',
        'revert',
        'doc',
        'style',
        'chore',
        'refactor',
        'test',
        'build',
        'ci',
      ],
    ],
    'subject-case': [0],
  },
};
