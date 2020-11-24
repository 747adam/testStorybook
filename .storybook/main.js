// module.exports = {
//   "stories": [
//     "../src/**/*.stories.mdx",
//     "../src/**/*.stories.@(js|jsx|ts|tsx)"
//   ],
//   "addons": [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials"
//   ]
// }
module.exports = {
  stories: ['../src/components/**/*.stories.js'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};