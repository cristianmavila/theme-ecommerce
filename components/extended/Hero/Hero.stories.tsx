// Import React dependencies
import React from "react";

// Import Story dependencies
import { StoryFn, Meta } from "@storybook/react";
import Hero, { HeroLinkProps } from "./Hero";
import { MediaProps } from "@/components/core/Media";

// Hero Story
export default {
  title: "Extended/Hero",
  component: Hero,
  argTypes: {},
} as Meta<typeof Hero>;

const Template: StoryFn<typeof Hero> = (args) => <Hero {...args} />;

// Hero mocked data
const mobileImg: MediaProps = {
  id: 3,
  media: {
    type: "media--image",
    src: "https://picsum.photos/717/1079",
    width: 717,
    height: 1079,
    fill: true,
    alt: "Example image",
  },
};

const desktopImg: MediaProps[] = [
  {
    id: 1,
    media: {
      type: "media--image",
      src: "https://picsum.photos/1200/750?random=1",
      width: 1200,
      height: 750,
      fill: true,
      alt: "Example image",
    },
  },
  {
    id: 2,
    media: {
      type: "media--image",
      src: "https://picsum.photos/1200/750?random=2",
      width: 1200,
      height: 750,
      alt: "Example image",
      fill: true,
      caption: "",
    },
  },
];

const linkHero: HeroLinkProps = {
  children: "This is a link",
  href: "#falselink",
  arrow: true,
};

// Hero Variations
export const Default = Template.bind({});
Default.args = {
  content:
    "<h2>Best Selling Jumpsuits</h2><p>How to get out the door in minutes</p><a>Shop All</a>",
  mobileImage: mobileImg,
  desktopImages: desktopImg,
};

export const TopCenter = Template.bind({});
TopCenter.args = {
  content:
    "<h2>Best Selling Jumpsuits</h2><p>How to get out the door in minutes</p><a>Shop All</a>",
  mobileImage: mobileImg,
  desktopImages: desktopImg,
  textPosition: "centerTop",
};

export const TopRight = Template.bind({});
TopRight.args = {
  content:
    "<h2>Best Selling Jumpsuits</h2><p>How to get out the door in minutes</p><a>Shop All</a>",
  mobileImage: mobileImg,
  desktopImages: [desktopImg[0]],
  textPosition: "rightTop",
};

export const MiddleLeft = Template.bind({});
MiddleLeft.args = {
  content:
    "<h2>Best Selling Jumpsuits</h2><p>How to get out the door in minutes</p><a>Shop All</a>",
  mobileImage: mobileImg,
  desktopImages: desktopImg,
  textPosition: "leftMiddle",
};

export const MiddleCenter = Template.bind({});
MiddleCenter.args = {
  content:
    "<h2>Best Selling Jumpsuits</h2><p>How to get out the door in minutes</p><a>Shop All</a>",
  mobileImage: mobileImg,
  desktopImages: [desktopImg[0]],
  textPosition: "centerMiddle",
};

export const MiddleRight = Template.bind({});
MiddleRight.args = {
  content:
    "<h2>Best Selling Jumpsuits</h2><p>How to get out the door in minutes</p><a>Shop All</a>",
  mobileImage: mobileImg,
  desktopImages: desktopImg,
  textPosition: "rightMiddle",
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  content:
    "<h2>Best Selling Jumpsuits</h2><p>How to get out the door in minutes</p><a>Shop All</a>",
  mobileImage: mobileImg,
  desktopImages: [desktopImg[0]],
  textPosition: "leftBottom",
};

export const BottomCenter = Template.bind({});
BottomCenter.args = {
  content:
    "<h2>Best Selling Jumpsuits</h2><p>How to get out the door in minutes</p><a>Shop All</a>",
  mobileImage: mobileImg,
  desktopImages: desktopImg,
  textPosition: "centerBottom",
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  content:
    "<h2>Best Selling Jumpsuits</h2><p>How to get out the door in minutes</p><a>Shop All</a>",
  mobileImage: mobileImg,
  desktopImages: [desktopImg[0]],
  textPosition: "rightBottom",
};
