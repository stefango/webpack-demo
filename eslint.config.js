// https://eslint.org/blog/2022/08/new-config-system-part-2/#goodbye-environments%2C-hello-globals
const globals = require('globals');
const react = require('eslint-plugin-react');
const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');

const compat = new FlatCompat({
  baseDirectory: __dirname, // optional; default: process.cwd()
  resolvePluginsRelativeTo: __dirname, // optional
  recommendedConfig: js.configs.recommended, // optional unless using "eslint:recommended"
  allConfig: js.configs.all, // optional unless using "eslint:all"
});

module.exports = [
  js.configs.recommended,
  ...compat.extends('airbnb'),
  {
    files: ['**/*.js', '**/*.jsx'],
    ...react.configs.flat.recommended,
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
        ...globals.node,
      },
      parser: require('@babel/eslint-parser'),
    },
    plugins: {
      react,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'react/jsx-curly-brace-presence': ['warn', { props: 'never' }],
      'react/react-in-jsx-scope': 'off',
      'import/prefer-default-export': 'off',
      'global-require': 'off',
      'import/no-extraneous-dependencies': ['error', { devDependencies: ['eslint.config.js', 'build/**'] }],
    },
    // settings: {
    //   'import/resolver': {
    //     node: {
    //       extensions: ['.js', '.jsx', '.ts', '.tsx']
    //     },
    //     typescript: {},
    //     webpack: {
    //       // config: webpackConfig
    //     }
    //   }
    // }
  },
];
