import eslint from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import sort from 'eslint-plugin-sort';
import globals from 'globals';
import tsEslint from 'typescript-eslint';

export default tsEslint.config(
  {
    // config with just ignores is the replacement for `.eslintignore`
    ignores: ['**/dist/**'],
  },
  eslint.configs.recommended,
  tsEslint.configs.strict,
  tsEslint.configs.stylistic,
  sort.configs['flat/recommended'],
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
      '@typescript-eslint/no-explicit-any': 'off',
      'global-require': 'off',
      'import/prefer-default-export': 'off',
      'no-console': 'off',
      'no-undef': 'warn',
      'no-unused-vars': 'warn',
      'react/jsx-boolean-value': ['warn', 'never'],
      'react/jsx-curly-brace-presence': ['warn', { props: 'never' }],
      'react/react-in-jsx-scope': 'off',
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
