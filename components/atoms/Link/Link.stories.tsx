// Import React.js dependencies
import React from "react";

// Import Storybook dependencies
import { StoryFn, Meta } from "@storybook/react";
import { ArrowRight } from "lucide-react";

// Import component dependencies
import Link from ".";

export default {
  title: "Atoms/Link",
  component: Link,
  argTypes: {
    className: {
      control: "text",
    },
  },
} as Meta<typeof Link>;

const Template: StoryFn<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      This is a link <ArrowRight size={20} className="ml-2" />
    </>
  ),
  href: "#",
};

export const White = Template.bind({});
White.args = {
  variant: "white",
  children: (
    <>
      This is a link{" "}
      <ArrowRight size={20} className="ml-2 group-hover:stroke-contentAction" />
    </>
  ),
  href: "#",
};
