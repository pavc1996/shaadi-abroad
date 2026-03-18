'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-inter font-semibold text-sm tracking-wider uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-maroon text-ivory hover:bg-maroon-dark hover:shadow-lg rounded-sm px-8 py-4',
        secondary: 'border border-maroon text-maroon hover:bg-maroon hover:text-ivory rounded-sm px-8 py-4',
        gold: 'bg-gold text-charcoal hover:bg-gold-dark hover:shadow-lg rounded-sm px-8 py-4',
        outline: 'border border-gold text-gold hover:bg-gold hover:text-charcoal rounded-sm px-8 py-4',
        ghost: 'text-charcoal hover:text-maroon hover:bg-beige rounded-sm px-4 py-2',
        link: 'text-maroon underline-offset-4 hover:underline p-0 h-auto font-normal normal-case tracking-normal',
        ivory: 'bg-ivory text-maroon hover:bg-champagne hover:shadow-lg rounded-sm px-8 py-4',
      },
      size: {
        sm: 'text-xs px-5 py-2.5',
        md: 'text-sm px-8 py-4',
        lg: 'text-base px-10 py-5',
        icon: 'h-10 w-10 p-0',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
