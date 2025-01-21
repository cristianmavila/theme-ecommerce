// Import React dependencies
import React, { ReactNode } from "react";

// Import Storybook dependencies
import { StoryFn, Meta } from "@storybook/react";

// Import component dependencies
import { Media } from "./Media";

export default {
  title: "atoms/Media",
  component: Media,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof Media>;

const Template: StoryFn<typeof Media> = (args) => <Media {...args} />;

export const ImageCaption = Template.bind({});
ImageCaption.args = {
  media: {
    type: "media--image",
    src: "https://picsum.photos/400/300",
    width: 1200,
    height: 800,
    alt: "Example image",
    caption:
      "Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",
  },
};

export const Vimeo = Template.bind({});
Vimeo.decorators = [
  (Story: () => {}) => (
    <div style={{ width: "600px", maxWidth: "100%" }}>
      {Story() as ReactNode}
    </div>
  ),
];
Vimeo.args = {
  media: {
    type: "media--remote_video",
    src: "https://vimeo.com/686896740",
    width: 640,
    height: 272,
  },
};

export const Youtube = Template.bind({});
Youtube.decorators = [
  (Story: () => {}) => (
    <div style={{ width: "600px", maxWidth: "100%" }}>
      {Story() as ReactNode}
    </div>
  ),
];
Youtube.args = {
  media: {
    type: "media--remote_video",
    src: "https://www.youtube.com/watch?v=YHusujC8MOw",
    aspectRatio: "16:9",
  },
};
