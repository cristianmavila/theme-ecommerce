// Import React dependencies
import React from "react";

// Import Story dependencies
import { StoryFn, Meta } from "@storybook/react";
import { Checkbox } from "./Checkbox";

// Checkbox Story
export default {
  title: "Atoms/Checkbox",
  component: Checkbox,
  argTypes: {},
} as Meta<typeof Checkbox>;

// Default template
const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />;
export const Default = Template.bind({});

// Example templates
const LabelTemplate: StoryFn<typeof Checkbox> = (args) => (
  <div className="flex items-center space-x-2">
    <Checkbox id="terms" />
    <label
      htmlFor="terms"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Accept terms and conditions
    </label>
  </div>
);

export const Withlabel = LabelTemplate.bind({});

const TextTemplate: StoryFn<typeof Checkbox> = (args) => (
  <div className="items-top flex space-x-2">
    <Checkbox id="terms1" />
    <div className="grid gap-1.5 leading-none">
      <label
        htmlFor="terms1"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
      <p className="text-sm text-muted-foreground">
        You agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  </div>
);

export const WithText = TextTemplate.bind({});
