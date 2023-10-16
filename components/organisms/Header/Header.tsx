"use client";

// next dependencies
import dynamic from "next/dynamic";

// custom hook
import { useScrollDirection } from "@/hooks/useScrollDirection";

// Import Component dependencies
import { VariantProps, cva } from "class-variance-authority";

// Library dependencies
import { cn } from "@/lib/utils";
import Logo from "@/components/atoms/Logo";
import Link from "@/components/atoms/Link";
const MobileMenu = dynamic(() => import("../MobileMenu"), {
  ssr: false,
});
import NavigationDesktop from "@/components/molecules/NavigationDesktop";
import { NavigationMenuProps } from "@/components/molecules/NavigationMenu/types";

// Header style variations
export const headerVariants = cva(
  "sticky left-0 top-0 z-20 w-full py-4 transition duration-300 ease-out lg:py-0",
  {
    variants: {
      textColor: {
        white: "text-white",
        black: "text-black",
      },
      backgroundColor: {
        white: "bg-white hover:bg-white",
        black: "bg-black hover:bg-black",
      },
    },
    defaultVariants: {
      textColor: "black",
      backgroundColor: "white",
    },
  }
);

export const logoVariants = cva("flex flex-1 justify-center lg:flex-none", {
  variants: {
    logoPosition: {
      left: "lg:order-1",
      center: "lg:order-3 lg:flex-1",
    },
  },
});

export const menuVariants = cva("hidden lg:order-2 lg:flex", {
  variants: {
    menuPosition: {
      left: "flex-1 justify-start px-3",
      center: "justify-center",
    },
  },
});

// Header Prop type
export interface HeaderProps
  extends VariantProps<typeof headerVariants>,
    VariantProps<typeof logoVariants>,
    // VariantProps<typeof subMenuVariants>,
    VariantProps<typeof menuVariants> {
  /** home link fo the logo option*/
  homepageUrl?: string;
  /** Custom ClassNames */
  className?: string;
  /** Menu Navigation Links */
  navigationMenuItems: NavigationMenuProps[];
  secondaryMenuItems?: NavigationMenuProps[];
  //   shoppingCart?: ShoppingCartProps;
}

export default function Header({
  backgroundColor,
  textColor,
  homepageUrl = "/",
  navigationMenuItems,
  secondaryMenuItems,
  menuPosition = "center",
  logoPosition = "left",
  className,
}: HeaderProps) {
  const scrollDirection = useScrollDirection();
  const changeBackgroundColor = scrollDirection
    ? backgroundColor
    : "bg-transparent";
  return (
    <header
      className={cn(
        headerVariants({ textColor, backgroundColor }),
        className,
        changeBackgroundColor
      )}
    >
      <div className="container flex items-center lg:justify-between">
        <MobileMenu
          navigationMenuItems={navigationMenuItems}
          secondaryMenuitems={secondaryMenuItems}
        />
        <Link
          href={homepageUrl}
          className={cn(
            "w-16 border-none lg:my-2 lg:w-32",
            logoVariants({ logoPosition })
          )}
        >
          <Logo />
        </Link>
        <NavigationDesktop
          navigationMenuItems={navigationMenuItems}
          className={menuVariants({ menuPosition })}
        />
        <div className="order-last flex min-w-[46px] flex-none justify-end gap-4 lg:min-w-[196px]">
          {secondaryMenuItems?.map(
            ({ id, title, href, icon }: NavigationMenuProps) => (
              <Link key={id} href={href} className="border-none">
                {icon}
              </Link>
            )
          )}
          {/* @TODO: Add the CartModal and CartIcon functionality */}
          {/* <CartModal /> */}
        </div>
      </div>
    </header>
  );
}
