module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base', 'plugin:jest/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
    }],
  },
};
