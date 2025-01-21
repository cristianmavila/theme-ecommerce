// Import React dependencies
import React from "react";

// Import Story dependencies
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./Select";

import { StoryFn, Meta } from "@storybook/react";

// Select Story
export default {
  title: "Core/Select",
  component: Select,
  argTypes: {},
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = () => (
  <Select>
    <SelectTrigger className="w-[280px]">
      <SelectValue placeholder="Theme" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="light">Light</SelectItem>
      <SelectItem value="dark">Dark</SelectItem>
      <SelectItem value="system">System</SelectItem>
    </SelectContent>
  </Select>
);

// Select Story Variations
export const Default = Template.bind({});
Default.args = {};
