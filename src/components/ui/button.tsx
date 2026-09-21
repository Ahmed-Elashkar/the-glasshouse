import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "pressable inline-flex items-center justify-center gap-2 font-sans text-sm font-medium tracking-wide transition-[background-color,color,box-shadow,transform] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-moss text-cream hover:bg-moss-deep",
        ink: "bg-ink text-cream hover:bg-moss-deep",
        outline:
          "bg-transparent text-ink shadow-[var(--shadow-border)] hover:bg-parchment hover:shadow-[var(--shadow-border-hover)]",
        ghost: "bg-transparent text-ink hover:bg-parchment",
        cream: "bg-cream text-ink hover:bg-parchment",
        onDark:
          "bg-transparent text-cream shadow-[0_0_0_1px_rgb(242_237_228_/_0.35)] hover:bg-cream/10",
      },
      size: {
        sm: "h-10 rounded-md px-4",
        default: "h-11 rounded-md px-5",
        lg: "h-12 rounded-lg px-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
