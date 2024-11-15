const js = require('@eslint/js');
// https://eslint.org/blog/2022/08/new-config-system-part-2/#goodbye-environments%2C-hello-globals
const globals = require('globals');
const react = require('eslint-plugin-react');

module.exports = [
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.jsx'],
    ...react.configs.flat.recommended,
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
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
  }
];
