module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true
  },
  extends: [
    'standard'
  ],
  plugins: [
    'svelte3'
  ],
  ignorePatterns: [
    '/public'
  ],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3'
    },
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
  }
}
