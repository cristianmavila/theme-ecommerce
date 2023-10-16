// Library dependencies
import { cn } from "@/lib/utils";
import Link from "@/components/atoms/Link";

// Import Menu dependencies
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/molecules/NavigationMenu";
import Text from "@/components/atoms/Typography/Text";
import { NavigationMenuProps } from "@/components/molecules/NavigationMenu/types";

interface NavigationDesktopProps {
  // Navigation Array with links
  navigationMenuItems: NavigationMenuProps[];
  /** Custom ClassNames */
  className?: string;
  // Custom css class for background
  backgroundColor?: string;
}

export default function NavigationDesktop({
  className,
  backgroundColor,
  navigationMenuItems,
}: NavigationDesktopProps) {
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList className="gap-4">
        {navigationMenuItems?.map(
          ({ id, title, href, children, target }: NavigationMenuProps) => {
            return (
              <NavigationMenuItem key={id}>
                {/* Navigation menu link with children */}
                {children && children.length > 0 ? (
                  <>
                    {!!href ? (
                      <NavigationMenuTrigger>
                        <Link
                          href={href}
                          target={target}
                          className={cn(navigationMenuTriggerStyle())}
                        >
                          {title}
                        </Link>
                      </NavigationMenuTrigger>
                    ) : (
                      <NavigationMenuTrigger
                        className={cn(navigationMenuTriggerStyle())}
                      >
                        {title}
                      </NavigationMenuTrigger>
                    )}
                    <NavigationMenuContent>
                      <div
                        className={cn(backgroundColor, "min-h-[353px] lg:py-8")}
                      >
                        <div className="container">
                          <div className="grid grid-cols-4 gap-4">
                            {children?.map(({ id, title, children }) => {
                              return (
                                <div key={id} className="flex flex-col">
                                  <div className="grid gap-3">
                                    <Text className="text-sm font-bold">
                                      {title}
                                    </Text>
                                    {children?.map(
                                      ({
                                        id,
                                        title,
                                        href,
                                        target,
                                      }: NavigationMenuProps) => (
                                        <Link
                                          key={id}
                                          href={href}
                                          target={target}
                                          className="border-none text-sm"
                                        >
                                          {title}
                                        </Link>
                                      )
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  // Navigation Menu without children
                  <Link href={href} target={target} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(navigationMenuTriggerStyle())}
                    >
                      {title}
                    </NavigationMenuLink>
                  </Link>
                )}
              </NavigationMenuItem>
            );
          }
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
