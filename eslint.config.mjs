import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import eslint from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import tsEslint from 'typescript-eslint';
import globals from 'globals';

export default tsEslint.config(
  {
    // config with just ignores is the replacement for `.eslintignore`
    ignores: ['**/dist/**'],
  },
  eslint.configs.recommended,
  tsEslint.configs.strict,
  tsEslint.configs.stylistic,
  {
    languageOptions: {
      globals: {
        // https://eslint.org/docs/latest/use/configure/migration-guide#configuring-language-options
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    files: ['**/*.{jsx,tsx}'],
    ...importPlugin.flatConfigs.recommended,
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'react/jsx-curly-brace-presence': ['warn', { props: 'never' }],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-boolean-value': ['warn', 'never'],
      'import/prefer-default-export': 'off',
      'global-require': 'off',
      'no-console': 'off',
    },
    // settings: {
    //   'import/resolver': {
    //     node: {
    //       extensions: ['.js', '.jsx', '.ts', '.tsx'],
    //     },
    //     typescript: {},
    //     webpack: {
    //       config: webpackConfig,
    //     },
    //   },
    // },
  },
);
