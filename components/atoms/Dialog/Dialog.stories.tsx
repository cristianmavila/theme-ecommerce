// Import React dependencies
import React from "react";

// Import Story dependencies
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "./Dialog";
import { StoryFn, Meta } from "@storybook/react";
import Button from "../Button";

// Dialog Story
export default {
  title: "Atoms/Dialog",
  component: Dialog,
  argTypes: {},
} as Meta<typeof Dialog>;

const Template: StoryFn<typeof Dialog> = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button>Open Dialog</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>Dialog Header</DialogHeader>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industrys standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </DialogContent>
  </Dialog>
);

// Dialog Story Variations
export const Default = Template.bind({});
Default.args = {};
