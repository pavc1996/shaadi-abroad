import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[120px] w-full rounded-sm border border-beige bg-white px-4 py-3 font-inter text-sm text-charcoal placeholder-gray-400 transition-colors duration-200 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold disabled:cursor-not-allowed disabled:opacity-50 resize-vertical',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
