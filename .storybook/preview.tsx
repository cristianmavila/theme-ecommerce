// Import dependencies
import type { Preview } from "@storybook/react";
import React from "react";

// Import styles
import { JetBrainsMono } from "@/styles/fonts";
import "@/styles/global.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [
    (Story) => (
      <div className={`${JetBrainsMono.variable}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
