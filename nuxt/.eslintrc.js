module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {},
  globals: {
    page: true,
    browser: true,
    context: true,
    jestPuppeteer: true,
  },
}
