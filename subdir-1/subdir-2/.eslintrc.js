module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    '@vue/typescript/recommended',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: {
      'js': 'espree',
      'ts': '@typescript-eslint/parser',
      '<template>': 'espree'
    },
    project: [
      './tsconfig.json'
    ],
    vueFeatures: {
      filter: false
    }
  }
};
