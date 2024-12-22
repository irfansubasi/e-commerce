import { cva } from 'class-variance-authority';

export const buttonStyles = cva(
  'inline-flex items-center justify-center font-medium rounded-md',
  {
    variants: {
      variant: {
        primary: 'bg-secondary text-white hover:bg-primary',
        outline:
          'bg-transparent outline outline-2 text-secondary hover:bg-secondary hover:text-white',
        rounded: 'rounded-full bg-secondary text-white hover:bg-primary',
        'rounded-outline':
          'bg-transparent outline outline-2 text-secondary hover:bg-secondary hover:text-white rounded-full',
      },
      size: {
        small: 'px-4 py-2 text-sm',
        medium: 'px-6 py-4 text-base',
        large: 'px-8 py-6 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);
