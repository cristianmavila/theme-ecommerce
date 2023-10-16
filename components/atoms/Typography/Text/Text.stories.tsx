// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { StoryFn, Meta } from "@storybook/react";

// Import component dependencies
import Text, { textVariants } from ".";

export default {
  title: "Atoms/Text",
  component: Text,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: Object.keys(textVariants({})),
      },
    },
    tag: {
      control: {
        type: "select",
        options: Object.keys(textVariants({})),
      },
    },
    decoration: {
      control: {
        type: "select",
        options: Object.keys(textVariants({})),
      },
    },
    className: {
      control: "text",
    },
  },
  args: {
    tag: "span",
  },
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  children: "This is a text component",
};

export const DefaultUnderline = Template.bind({});
DefaultUnderline.args = {
  variant: "default",
  children: "This is a text component",
  className: "underline",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "This is a text component",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  children: "This is a text component",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
  children: "This is a text component",
};

export const Danger = Template.bind({});
Danger.args = {
  variant: "danger",
  children: "This is a text component",
};

export const Mark = Template.bind({});
Mark.args = {
  variant: "mark",
  children: "This is a text component",
};
