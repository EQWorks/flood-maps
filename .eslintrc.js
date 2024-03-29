module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  plugins: [
    'react',
    'react-hooks',
    'import',
  ],
  rules: {
    'import/newline-after-import': ['error', { 'count': 2 }],
    indent: [
      'error',
      2,
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    quotes: [
      'error',
      'single',
      { 'avoidEscape': true },
    ],
    semi: [
      'error',
      'never',
    ],
    'no-console': [
      'warn',
      { allow: ['error'] },
    ],
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'eol-last': [
      'error',
      'always',
    ],
    'no-trailing-spaces': [
      'error',
    ],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'react/display-name': 'off', // TODO: many false-positives until react eslint plugin updates
  },
}
