// Import React dependencies
import React from "react";

// Import Story dependencies
import { StoryFn, Meta } from "@storybook/react";
import Footer from "./Footer";
import { NavigationMenuProps } from "@/components/molecules/NavigationMenu/types";
import { SocialIcon } from "@/components/atoms/SocialLinks";

// Header Story
export default {
  title: "Organisms/Footer",
  component: Footer,
  argTypes: {},
} as Meta<typeof Footer>;

const socialLinks: SocialIcon[] = [
  {
    id: 1,
    url: "mailto:info@companyname.com",
    type: "email",
    target: "_blank",
  },
  {
    id: 2,
    url: "https://www.facebook.com/",
    type: "facebook",
    target: "_blank",
  },
  {
    id: 3,
    url: "https://www.instagram.com/",
    type: "instagram",
    target: "_blank",
  },
];

const NavigationMenuItems: NavigationMenuProps[] = [
  {
    id: 1,
    href: "#",
    title: "Sales and conditions",
  },
  {
    id: 2,
    href: "#",
    title: "Privacy Policy",
  },
  {
    id: 3,
    href: "#",
    title: "Contact Us",
  },
  {
    id: 4,
    href: "#",
    title: "Chat with us",
  },
  {
    id: 5,
    href: "#",
    title: "Returns",
  },
];

const Template: StoryFn<typeof Footer> = (args) => <Footer {...args} />;

// Header Story Variations
export const Default = Template.bind({});
Default.args = {
  menu: NavigationMenuItems,
  social: socialLinks,
};
