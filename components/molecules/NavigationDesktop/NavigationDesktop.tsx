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
import Heading from "@/components/atoms/Typography/Heading";
import { NavigationMenuProps } from "@/components/molecules/NavigationMenu/types";

interface NavigationDesktopProps {
  navigationMenuItems: NavigationMenuProps[];
  /** Custom ClassNames */
  className?: string;
}

export default function NavigationDesktop({
  navigationMenuItems,
  className,
}: NavigationDesktopProps) {
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        {navigationMenuItems?.map(
          ({
            id,
            title,
            href,
            children,
            target,
            backgroundColor,
          }: NavigationMenuProps) => {
            return (
              <NavigationMenuItem key={id}>
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
                        className={cn(
                          "min-h-[353px] bg-backgroundBrandPrimaryReversed py-8 text-black",
                          backgroundColor
                        )}
                      >
                        <div className="container">
                          <div className="flex justify-between gap-6">
                            <div className="grid min-w-[266px] auto-cols-max grid-flow-col gap-4">
                              {children?.map(
                                ({ id, title, children, target }) => {
                                  return (
                                    <div key={id} className="flex flex-col">
                                      <Heading variant="h5" className="pb-2">
                                        {title}
                                      </Heading>
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
                                            legacyBehavior
                                            passHref
                                          >
                                            <NavigationMenuLink className="border-none py-2 text-xs">
                                              {title}
                                            </NavigationMenuLink>
                                          </Link>
                                        )
                                      )}
                                    </div>
                                  );
                                }
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
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
