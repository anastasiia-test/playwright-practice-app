//linting only for Playwright files
import playwright from 'eslint-plugin-playwright'

export default [
    {
      ...playwright.configs['flat/recommended'],
      files: ['tests/**', 'page-objects/**'],
      rules: {
        ...playwright.configs['flat/recommended'].rules,
        // Customize Playwright rules
        // ...
      },
    },
  ]