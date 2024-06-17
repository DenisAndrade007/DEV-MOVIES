import globals from 'globals';
import pluginJs from '@eslint/js';
import { fixupConfigRules } from '@eslint/compat';

import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import pluginReactHooksConfig from 'eslint-plugin-react-hooks/configs/recommended.js';
import pluginImportConfig from 'eslint-plugin-import/config/recommended.js';

const customRules = {
  'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  'react/jsx-props-no-spreading': 'off',
  'react/prop-types': 'off',
  'import/prefer-default-export': 'off',
  'import/order': [
    'warn',
    {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'always',
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
    },
  ],
};

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  pluginJs.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  ...fixupConfigRules(pluginReactHooksConfig),
  ...fixupConfigRules(pluginImportConfig),
  {
    rules: customRules,
  },
];
