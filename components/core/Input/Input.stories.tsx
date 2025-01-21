// Import React dependencies
import React from "react";

// Import Story dependencies
import { StoryFn, Meta } from "@storybook/react";
import { Input, InputVariants } from "./Input";

// Button Story
export default {
  title: "Core/Input",
  component: Input,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: Object.keys(InputVariants({})),
      },
    },
    className: {
      control: "text",
    },
  },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

// Input Story Variations
export const Default = Template.bind({});
Default.args = {};

export const Border = Template.bind({});
Border.args = {
  variant: "default",
};
