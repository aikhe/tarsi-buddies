import { ONLY_ALLOW_BEM_SELECTORS } from './stylelint.selectors.js';

/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],
  ignoreFiles: [
    '**/dist/**',
    '**/build/**',
    '**/.turbo/**',
    '**/node_modules/**',
  ],
  rules: {
    // enforces BEM: block__element--modifier (mirrors ego-ipse stylelint-config).
    'selector-class-pattern': ONLY_ALLOW_BEM_SELECTORS,
    'selector-id-pattern': ONLY_ALLOW_BEM_SELECTORS,
    // tailwind v4 at-rules (@import "tailwindcss", @theme, @apply, ...).
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwindcss',
          'theme',
          'apply',
          'reference',
          'use',
          'forward',
        ],
      },
    ],
    'at-rule-no-deprecated': [
      true,
      {
        ignoreAtRules: [
          'tailwindcss',
          'theme',
          'apply',
          'reference',
          'use',
          'forward',
        ],
      },
    ],
    // alphabetical css properties (mirrors ego-ipse).
    'order/properties-alphabetical-order': true,
    'no-descending-specificity': null,
    'media-feature-range-notation': 'prefix',
    'import-notation': 'string',
  },
};
