// Import React dependencies
import React from "react";

// Import Story dependencies
import { StoryFn, Meta } from "@storybook/react";
import Header from "./Header";
import { NavigationMenuProps } from "@/components/molecules/NavigationMenu/types";
import { Search, ShoppingBag } from "lucide-react";

// Header Story
export default {
  title: "Organisms/Header",
  component: Header,
  argTypes: {
    className: {
      control: "text",
    },
    textColor: {
      control: {
        type: "select",
      },
    },
    backgroundColor: {
      control: {
        type: "select",
      },
    },
    logoPosition: {
      control: {
        type: "select",
      },
    },
    menuPosition: {
      control: {
        type: "select",
      },
    },
  },
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof Header>;

const NavigationMenuItems: NavigationMenuProps[] = [
  {
    id: 1,
    href: "/women",
    title: "Women",
    children: [
      {
        id: 5,
        href: "/women/featured",
        title: "Featured",
        children: [
          {
            id: 6,
            href: "/women/sleep",
            title: "Sleep",
          },
          {
            id: 7,
            href: "/women/Swimwear",
            title: "Swimwear",
          },
          {
            id: 8,
            href: "/women/Underwear",
            title: "Underwear",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    href: "/men",
    title: "Men",
  },
  {
    id: 3,
    href: "/company",
    title: "Company",
  },
  {
    id: 4,
    href: "/stores",
    title: "Stores",
  },
];

const SecondaryMenuItems: NavigationMenuProps[] = [
  {
    id: 1,
    href: "#search",
    title: "Search",
    icon: <Search size={20} className="lg:me-2" />,
  },
  {
    id: 2,
    href: "#account",
    title: "Account",
    icon: <ShoppingBag size={20} className="me-2 ml-2" />,
  },
];

// @TODO: Implement the card functionality

// const ShoppingCartData: ShoppingCartProps = {
// };

const Template: StoryFn<typeof Header> = (args) => (
  <div className="relative min-h-[500px] bg-slate-400">
    <Header {...args} />
  </div>
);

// Header Story Variations
export const Default = Template.bind({});
Default.args = {
  navigationMenuItems: NavigationMenuItems,
  secondaryMenuItems: SecondaryMenuItems,
};
