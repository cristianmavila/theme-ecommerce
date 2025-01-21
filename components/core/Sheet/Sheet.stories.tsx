// Import React dependencies
import React from "react";

// Import Story dependencies
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./Sheet";
import { StoryFn, Meta } from "@storybook/react";
import Button from "../Button";
import { X } from "lucide-react";

// Sheet Story
export default {
  title: "Core/Sheet",
  component: Sheet,
  argTypes: {},
} as Meta<typeof Sheet>;

const Template: StoryFn<typeof Sheet> = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button>Open Sheet</Button>
    </SheetTrigger>
    <SheetContent
      side="right"
      className="top-0 flex h-screen w-[320px] max-w-full flex-col justify-between overflow-y-auto bg-contentPrimaryReversed p-4"
    >
      <SheetHeader className="flex flex-row items-center justify-between">
        <div>3</div>
        <SheetClose asChild>
          <X size={30} className="cursor-pointer" />
        </SheetClose>
      </SheetHeader>
    </SheetContent>
  </Sheet>
);

// Sheet Story Variations
export const Default = Template.bind({});
Default.args = {};
