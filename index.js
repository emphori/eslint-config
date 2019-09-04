'use strict';

module.exports = {
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 9,
  },
  rules: {
    'block-scoped-var': 'error',
    'class-methods-use-this': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-param-reassign': ['error', {
      props: true,
    }],
    'no-return-await': 'error',
    'quotes': ['error', 'single', {
      avoidEscape: true,
    }],
    'require-await': 'error',
    'strict': ['error', 'global'],
    'valid-jsdoc': ['error', {
      prefer: {
        returns: 'return',
      },
    }],
    'yoda': ['error', 'never', {
      exceptRange: true,
    }],
  },
  extends: 'eslint:recommended',
};
