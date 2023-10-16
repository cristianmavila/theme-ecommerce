// Import React dependencies
import React from "react";

// Import Story dependencies
import { StoryFn, Meta } from "@storybook/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";

// Accordion Story
export default {
  title: "Atoms/Accordion",
  component: Accordion,
  argTypes: {
    type: {
      control: {
        type: "select",
      },
    },
  },
} as Meta<typeof Accordion>;

const Template: StoryFn<typeof Accordion> = (args) => (
  <Accordion {...args}>
    <AccordionItem value="Accordion item 01" className="relative">
      <AccordionTrigger className="w-full px-3 py-2 text-sm uppercase">
        Accordion item 01
      </AccordionTrigger>
      <AccordionContent className="py-2">
        This is the content of accordion item 01
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="Accordion item 02" className="relative">
      <AccordionTrigger className="w-full px-3 py-2 text-sm uppercase">
        Accordion item 02
      </AccordionTrigger>
      <AccordionContent className="py-2">
        This is the content of accordion item 02
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="Accordion item 03" className="relative">
      <AccordionTrigger className="w-full px-3 py-2 text-sm uppercase">
        Accordion item 03
      </AccordionTrigger>
      <AccordionContent className="py-2">
        This is the content of accordion item 03
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

// Accordion Story Variations
export const Default = Template.bind({});
Default.args = { type: "multiple" };
