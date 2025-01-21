// Library dependencies
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "@/components/core/Link";

// Import Menu dependencies
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/extended/NavigationMenu";
import Text from "@/components/core/Typography/Text";
import ConditionalWrapper from "@/components/core/ConditionalWrapper";
import { NavigationMenuProps } from "@/components/extended/NavigationMenu/types";

// types
interface NavigationDesktopProps {
  // Navigation Array with links
  navigationMenuItems: NavigationMenuProps[];
  /** Custom ClassNames */
  className?: string;
  // Custom css class for background
  backgroundColor?: string;
}

/// Framer motion variant for navigation wrapper
const MenuVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export default function NavigationDesktop({
  className,
  backgroundColor,
  navigationMenuItems,
}: NavigationDesktopProps) {
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList className="gap-4" asChild>
        <motion.ul variants={MenuVariants}>
          {navigationMenuItems?.map(
            ({ id, title, href, children, target }: NavigationMenuProps) => {
              return (
                <NavigationMenuItem key={id}>
                  {/* Navigation menu link with children */}
                  {children && children.length > 0 ? (
                    <>
                      <NavigationMenuTrigger>
                        <ConditionalWrapper
                          condition={!!href}
                          wrapper={(children) => (
                            <Link
                              href={href}
                              target={target}
                              className={cn(navigationMenuTriggerStyle())}
                            >
                              {children}
                            </Link>
                          )}
                        >
                          <>{title}</>
                        </ConditionalWrapper>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div
                          className={cn(
                            backgroundColor,
                            "min-h-[280px] lg:py-8"
                          )}
                        >
                          <div className="container">
                            <div className="grid grid-cols-4 gap-4">
                              {children?.map(({ id, title, children }) => {
                                return (
                                  <div key={id} className="flex flex-col">
                                    <motion.div
                                      key={id}
                                      className="grid gap-3"
                                      variants={MenuVariants}
                                      initial="closed"
                                      animate="open"
                                    >
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
                                          <motion.div
                                            key={id}
                                            transition={{
                                              duration: 0.3,
                                              delay: 0.1,
                                            }}
                                            variants={MenuItemVariants}
                                          >
                                            <Link
                                              href={href}
                                              target={target}
                                              className="border-none text-sm"
                                            >
                                              {title}
                                            </Link>
                                          </motion.div>
                                        )
                                      )}
                                    </motion.div>
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
        </motion.ul>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
