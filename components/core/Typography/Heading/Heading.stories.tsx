// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { StoryFn, Meta } from "@storybook/react";

// Import component dependencies
import Heading, { HeadingVariants } from ".";

export default {
  title: "Core/Heading",
  component: Heading,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: Object.keys(HeadingVariants({})),
      },
    },
    className: {
      control: "text",
    },
  },
} as Meta<typeof Heading>;

const Template: StoryFn<typeof Heading> = (args) => <Heading {...args} />;

export const TypographyH1 = Template.bind({});
TypographyH1.args = {
  variant: "h1",
  children: "This is a typography component",
};

export const TypographyH2 = Template.bind({});
TypographyH2.args = {
  variant: "h2",
  children: "This is a typography component",
};

export const TypographyH3 = Template.bind({});
TypographyH3.args = {
  variant: "h3",
  children: "This is a typography component",
};

export const TypographyH4 = Template.bind({});
TypographyH4.args = {
  variant: "h4",
  children: "This is a typography component",
};

export const TypographyH5 = Template.bind({});
TypographyH5.args = {
  variant: "h5",
  children: "This is a typography component",
};
