// Next.js dependencies
import Image from "next/image";
import { useState } from "react";

// Library dependencies
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/core/Accordion";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/core/AlertDialog";
import Link from "@/components/core/Link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import {
  FeaturedProps,
  NavigationMenuProps,
} from "@/components/extended/NavigationMenu/types";
import { useTabletOrMobile } from "@/hooks/useTabletOrMobile";
import ConditionalWrapper from "@/components/core/ConditionalWrapper";

// types
interface MobileMenuProps {
  /// This is the array of items for the main navigation
  navigationMenuItems: NavigationMenuProps[];
  /// This is the array of items for the secondary navigation
  secondaryMenuitems?: NavigationMenuProps[];
}

const MobileMenu = ({
  navigationMenuItems,
  secondaryMenuitems,
}: MobileMenuProps) => {
  const isTabletOrMobile = useTabletOrMobile();
  const [isOpen, setIsOpen] = useState(false);

  if (!isTabletOrMobile) {
    return <></>;
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={(state) => setIsOpen(state)}>
      <AlertDialogTrigger className="px-2" onClick={() => setIsOpen(true)}>
        <Menu size={30} fill="currentColor" />
      </AlertDialogTrigger>
      <AlertDialogContent className="container flex h-screen w-screen max-w-full flex-col justify-between overflow-y-auto">
        <AlertDialogCancel
          className="absolute left-4 top-1 justify-start px-2 py-2"
          onClick={() => setIsOpen(false)}
        >
          <X size={30} fill="currentColor" />
        </AlertDialogCancel>
        <Accordion type="multiple" className="mt-12">
          {navigationMenuItems?.map(
            ({ id, title, href, children, target, featured }) => {
              return (
                <AccordionItem value={title} key={id}>
                  {children && children.length > 0 ? (
                    <>
                      <AccordionTrigger className="w-full px-3 py-2 text-sm">
                        <ConditionalWrapper
                          condition={!!href}
                          wrapper={(children: any) => (
                            <Link
                              className="w-full border-none"
                              href={href}
                              target={target}
                              onClick={() => setIsOpen(false)}
                            >
                              {children}
                            </Link>
                          )}
                        >
                          <>{title}</>
                        </ConditionalWrapper>
                      </AccordionTrigger>
                      <AccordionContent className="pb-0">
                        {/* That is a MenuItem */}
                        {children.map(({ id, title, href, children }) => (
                          <div key={id} onClick={() => setIsOpen(false)}>
                            <MenuAccordionItem
                              {...{ id, title, href, children }}
                            />
                          </div>
                        ))}
                      </AccordionContent>
                    </>
                  ) : (
                    <Link href={href} legacyBehavior passHref>
                      <a className="block w-full px-3 py-2 text-sm">{title}</a>
                    </Link>
                  )}
                </AccordionItem>
              );
            }
          )}
        </Accordion>
        {secondaryMenuitems && (
          <Accordion type="multiple">
            {secondaryMenuitems?.map(
              ({ id, title, href, backgroundColor }: NavigationMenuProps) => {
                return (
                  <AccordionItem
                    key={id}
                    value={title}
                    className={cn(
                      "flex items-center justify-between border-b-0 border-t bg-backgroundBrandPrimaryReversed",
                      backgroundColor
                    )}
                  >
                    <Link href={href} legacyBehavior passHref>
                      <a className="block w-full px-3 py-2 text-sm">{title}</a>
                    </Link>
                  </AccordionItem>
                );
              }
            )}
          </Accordion>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
};

const MenuAccordionItem = (props: FeaturedProps & NavigationMenuProps) => {
  return (
    <>
      <AccordionItem
        value={props.title}
        className="flex items-center justify-between border-b-0 border-t"
      >
        <Link
          href={
            props.href
              ? props.href
              : props.link && props.link.href !== ""
              ? props.link.href
              : "#"
          }
          className="block w-full items-center px-3 py-2 text-sm no-underline"
        >
          {props.title}
        </Link>
      </AccordionItem>
      {/* All sub-items will render here */}
      {props.children &&
        props.children?.map(({ id, title, href }: NavigationMenuProps) => (
          <AccordionItem value={title} key={id} className="border-b-0 border-t">
            <ConditionalWrapper
              condition={!!href}
              wrapper={(children: any) => (
                <Link href={href} className="block w-full px-3 py-2 text-sm">
                  {children}
                </Link>
              )}
            >
              <>{title}</>
            </ConditionalWrapper>
          </AccordionItem>
        ))}
    </>
  );
};

export default MobileMenu;
