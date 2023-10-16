// Import React dependencies
import React from "react";

// Import Story dependencies
import { StoryFn, Meta } from "@storybook/react";
import { Skeleton } from "./Skeleton";

// Skeleton Story
export default {
  title: "Atoms/Skeleton",
  component: Skeleton,
  argTypes: {
    className: {
      control: "text",
    },
  },
} as Meta<typeof Skeleton>;

const Template: StoryFn<typeof Skeleton> = (args) => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};

// Button Story Variations
export const SkeletonDemo = Template.bind({});
SkeletonDemo.args = {};
