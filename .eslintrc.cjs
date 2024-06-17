module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  plugins: ['import-helpers'],
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['/^@/', 'module', '/^~/', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
