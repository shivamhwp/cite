import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";
import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

type TabsListProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
  variant?: "default" | "line";
};

const TabsList = React.forwardRef<React.ElementRef<typeof TabsPrimitive.List>, TabsListProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <TabsPrimitive.List
      className={cn(
        variant === "line"
          ? "inline-flex w-full items-center gap-6 border-b border-border text-muted-foreground"
          : "inline-flex items-center justify-center gap-1 rounded-lg bg-accent p-1 text-accent-foreground",
        className,
      )}
      ref={ref}
      {...props}
    />
  ),
);
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap font-normal outline-none",
      "text-muted-foreground transition-colors data-[state=active]:text-foreground",
      "rounded-md px-3 py-1.5 data-[state=active]:bg-background",
      "data-[orientation=horizontal]:rounded-none data-[orientation=horizontal]:border-b-2",
      "data-[orientation=horizontal]:border-transparent data-[orientation=horizontal]:px-0 data-[orientation=horizontal]:py-2",
      "data-[orientation=horizontal]:data-[state=active]:border-foreground",
      "data-[orientation=horizontal]:data-[state=active]:bg-transparent",
      className,
    )}
    ref={ref}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content className={cn("mt-3 outline-none", className)} ref={ref} {...props} />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsContent, TabsList, TabsTrigger };
