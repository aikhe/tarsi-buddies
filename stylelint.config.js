/** @type {import('stylelint').Config} */

// enforces BEM naming: block-name__element--modifier
const ONLY_ALLOW_BEM_SELECTORS = [
  /^[a-z][a-z0-9]*(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)*(--[a-z0-9]+(-[a-z0-9]+)*)?$/,
  { message: s => `Expected '${s}' to follow BEM (block__element--modifier)` },
];

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
