module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],

    'prettier/prettier': 'warn',

    // typescript
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/no-empty-interface': [
      'error',
      { allowSingleExtends: true },
    ],

    // vue
    'vue/no-unused-vars': 'error',
    'vue/no-mutating-props': 'warn',
  },
};
