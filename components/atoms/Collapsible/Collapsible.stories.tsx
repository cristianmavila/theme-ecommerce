// Import React dependencies
import React from "react";

// Import Story dependencies
import { StoryFn, Meta } from "@storybook/react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./Collapsible";

// Collapsible Story
export default {
  title: "Collapsible",
  component: Collapsible,
  argTypes: {},
} as Meta<typeof Collapsible>;

const Template: StoryFn<typeof Collapsible> = () => (
  <Collapsible>
    <CollapsibleTrigger>Click here to see the content.</CollapsibleTrigger>
    <CollapsibleContent className="bg-slate-200 p-2 rounded-md">
      Yes. Free to use for personal and commercial projects. No attribution required.
    </CollapsibleContent>
  </Collapsible>
);

// Collapsible Story Variations
export const Default = Template.bind({});
Default.args = {};
