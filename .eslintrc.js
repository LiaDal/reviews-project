module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['react'],
  // ignorePatters: [],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        bracketSpacing: true,
        eslintIntegration: true,
        printWidth: 120,
        endOfLine: 'auto',
      },
    ],
  },
}
