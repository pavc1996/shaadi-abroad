import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-sm px-3 py-1 font-inter text-xs font-semibold tracking-wider uppercase transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-maroon text-ivory',
        gold: 'bg-gold text-charcoal',
        outline: 'border border-gold text-gold bg-transparent',
        champagne: 'bg-champagne text-charcoal',
        beige: 'bg-beige text-charcoal',
        success: 'bg-green-100 text-green-800',
        warning: 'bg-yellow-100 text-yellow-800',
        error: 'bg-red-100 text-red-800',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
