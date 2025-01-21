"use client";

// React dependencies
import * as React from "react";

// Import Component dependencies
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Play } from "lucide-react";

// Import library dependencies
import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const [toggleSubMenus, setToggleSubMenus] = React.useState(false);
  return (
    <div
      data-state={toggleSubMenus ? "open" : "closed"}
      className={cn("flex flex-1 items-center justify-between", className)}
    >
      {children}
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between px-3 py-4 transition-all [&[data-state=open]>svg]:rotate-90",
          className
        )}
        {...props}
        onClick={() => setToggleSubMenus(!toggleSubMenus)}
      >
        <Play fill="currentColor" className="h-3 w-3" />
      </AccordionPrimitive.Trigger>
    </div>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div className="pb-0 pt-0">{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
