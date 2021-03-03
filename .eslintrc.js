module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'plugin:vue/vue3-recommended',
    // Airbnb style guide 적용
    'airbnb-base',
    // TypeScript ESLint recommanded style 적용
    'plugin:@typescript-eslint/eslint-recommended',
    '@vue/typescript',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'warn',
    'comma-dangle': ['error', 'always-multiline'],
    'linebreak-style': 0,
    'max-len': ['warn', { code: 200 }],
    'import/extensions': ['error', 'always', {
      js: 'never',
      jsx: 'never',
      tsx: 'never',
      vue: 'never',
    }],
    indent: [2, 2],
  },
  settings: {
    'import/parsers': { 'vue-eslint-parser': ['.js', '.jsx', '.ts', '.tsx', '.vue'] },
    'import/resolver': { typescript: './tsconfig.json' },
  },
};
