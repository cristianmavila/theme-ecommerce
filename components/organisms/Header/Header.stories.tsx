// Import React dependencies
import React from "react";
import { StoryFn, Meta } from "@storybook/react";

// Import Story dependencies
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
      {
        id: 9,
        href: "/women/categories",
        title: "Categories",
        children: [
          {
            id: 10,
            href: "/women/basic-tees",
            title: "Basic Tees",
          },
          {
            id: 11,
            href: "/women/artwork-tees",
            title: "Artwork Tees",
          },
          {
            id: 12,
            href: "/women/bottoms",
            title: "Bottoms",
          },
          {
            id: 13,
            href: "/women/underwear",
            title: "Underwear",
          },
          {
            id: 14,
            href: "/women/accessories",
            title: "Accessories",
          },
        ],
      },
      {
        id: 15,
        href: "/women/collection",
        title: "Collection",
        children: [
          {
            id: 16,
            href: "/women/everything",
            title: "Everything",
          },
          {
            id: 17,
            href: "/women/core",
            title: "Core",
          },
          {
            id: 18,
            href: "/women/new-arrivals",
            title: "New Arrivals",
          },
          {
            id: 19,
            href: "/women/sale",
            title: "Sale",
          },
        ],
      },
      {
        id: 20,
        href: "/women/brands",
        title: "Brands",
        children: [
          {
            id: 21,
            href: "/women/full-nelson",
            title: "Full Nelson",
          },
          {
            id: 22,
            href: "/women/my-way",
            title: "My way",
          },
          {
            id: 23,
            href: "/women/re-arranged",
            title: "Re-Arranged",
          },
          {
            id: 24,
            href: "/women/counterfeit",
            title: "Counterfeit",
          },
          {
            id: 25,
            href: "/women/significant-other",
            title: "Significant Other",
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
  <div className="relative min-h-[2000px] bg-slate-400">
    <Header {...args} />
  </div>
);

// Header Story Variations
export const Default = Template.bind({});
Default.args = {
  navigationMenuItems: NavigationMenuItems,
  secondaryMenuItems: SecondaryMenuItems,
};

// Header black with white links
export const Black = Template.bind({});
Black.args = {
  textColor: "white",
  backgroundColor: "black",
  menuPosition: "left",
  navigationMenuItems: NavigationMenuItems,
  secondaryMenuItems: SecondaryMenuItems,
};
