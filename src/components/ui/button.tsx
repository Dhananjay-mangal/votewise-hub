import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-[var(--shadow-soft)]",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-[var(--shadow-soft)]",
        ghost: "hover:bg-secondary hover:text-secondary-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Hero section CTAs
        hero: "bg-gradient-to-br from-[hsl(220,60%,20%)] via-[hsl(220,55%,28%)] to-[hsl(210,50%,35%)] text-primary-foreground shadow-[var(--shadow-elevated)] hover:shadow-[var(--shadow-card)] hover:scale-[1.02] active:scale-[0.98] font-semibold",
        heroOutline: "border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/50",
        // Accent buttons
        accent: "bg-gradient-to-br from-[hsl(32,85%,55%)] to-[hsl(28,90%,60%)] text-white shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] hover:scale-[1.02] active:scale-[0.98] font-semibold",
        trust: "bg-gradient-to-br from-[hsl(210,75%,50%)] to-[hsl(200,70%,55%)] text-white shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elevated)] hover:scale-[1.02] active:scale-[0.98] font-semibold",
        // Civic/government style
        civic: "bg-card text-foreground border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] hover:border-primary/30",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
