'use strict';

module.exports = {
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {
    'valid-jsdoc': ['error', {
      prefer: {
        returns: 'return'
      }
    }],
    'block-scoped-var': 'error',
    'class-methods-use-this': 'error',
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-param-reassign': ['error', {
      props: true
    }],
    'no-return-await': 'error',
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'require-await': 'error',
    'yoda': ['error', 'never', { exceptRange: true }],
    'strict': ['error', 'global']
  },
  extends: 'eslint:recommended'
};
