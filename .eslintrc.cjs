module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
  plugins: ['@typescript-eslint', 'prettier'],
  'overrides': [
    {
      'files': ['tests/**/*'],
      'env': {
        'jest': true
      }
    }
  ],
  rules: {},
};
