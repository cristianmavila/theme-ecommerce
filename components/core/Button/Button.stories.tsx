// Import React dependencies
import React from "react";

// Import Story dependencies
import { StoryFn, Meta } from "@storybook/react";
import { Button, buttonVariants } from "./Button";

// Button Story
export default {
  title: "Core/Button",
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: Object.keys(buttonVariants({})),
      },
    },
    size: {
      control: {
        type: "select",
        options: Object.keys(buttonVariants({})),
      },
    },
    asChild: {
      control: "boolean",
    },
    className: {
      control: "text",
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

// Button Story Variations
export const Default = Template.bind({});
Default.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: "default",
  disabled: true,
};
