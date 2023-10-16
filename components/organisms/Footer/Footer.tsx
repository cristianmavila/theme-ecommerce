"use client";

// Library dependencies
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/molecules/NavigationMenu";
import { NavigationMenuProps } from "@/components/molecules/NavigationMenu/types";
import SocialLinks, {
  SocialIcon,
} from "@/components/atoms/SocialLinks/SocialLinks";
import FormNewsletter from "@/components/molecules/FormNewsletter";
import Text from "@/components/atoms/Typography/Text";
import Separator from "@/components/atoms/Separator";
import Logo from "@/components/atoms/Logo";

// Types
interface FooterProps {
  social?: SocialIcon[];
  menu?: NavigationMenuProps[];
}

export default function Footer({ social, menu }: FooterProps) {
  return (
    <footer className="w-full py-11 pb-0 text-sm">
      <div className="container">
        <div className="flex flex-col gap-6">
          <Logo />
          {/* Navigation items */}
          <div className="flex flex-col md:flex-row">
            <NavigationMenu className="md:justify-start">
              <NavigationMenuList className="gap-2 lg:gap-8">
                {menu?.map(({ id, title, href }) => {
                  return (
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "inline-flex items-center font-sans no-underline hover:underline"
                      )}
                      key={id}
                      href={href}
                    >
                      {title}
                    </NavigationMenuLink>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          {/* Newsletter form */}
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-start">
              <Text className="font-bold">Subscribe to our newsletter</Text>
              <Text>
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </Text>
            </div>
            <FormNewsletter />
          </div>
          <Separator className="bg-slate-700" />
          {/* Social links */}
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <Text>© 2023 Your Company, Inc. All rights reserved.</Text>
            <SocialLinks social={social} />
          </div>
        </div>
      </div>
    </footer>
  );
}
