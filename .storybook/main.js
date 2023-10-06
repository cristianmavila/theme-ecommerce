// Imports
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
const path = require('path');

const config = {
  stories: ["../components/**/*.stories.mdx", "../components/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "storybook-design-token"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  docs: {
    autodocs: true
  },
  webpackFinal: (config) => {
    config.resolve.plugins = config.resolve.plugins || [];
    config.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../tsconfig.json"),
      })
    );  
    return config;
  }

};
export default config;
