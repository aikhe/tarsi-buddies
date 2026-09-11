// enforces BEM naming: block-name__element--modifier
// allows lowercase with hyphens, double underscores for elements, double hyphens for modifiers
// (mirrors ego-ipse packages/stylelint-config/selectors.js)
export const ONLY_ALLOW_BEM_SELECTORS = [
  /^[a-z][a-z0-9]*(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)*(--[a-z0-9]+(-[a-z0-9]+)*)?$/,
  { message: s => `Expected '${s}' to follow BEM (block__element--modifier)` },
];
