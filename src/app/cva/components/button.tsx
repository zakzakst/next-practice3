import {cva, VariantProps} from 'class-variance-authority'
import { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none',
  {
    variants: {
      variant: {
        default: 'bg-blue-500 text-white hover:bg-blue-600',
        outline: 'border border-gray-300 text-gray-800',
      },
      size: {
        sm: 'h-8 px-3',
        md: 'h-10 px-4',
        lg: 'h-12 px-6',
      },
      loading: {
        true: 'opacity-75'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
  }

export const Button = ({className, variant, size, loading = false, disabled, children, ...rest}: ButtonProps) => {
  return <button
    // TODO: エラー対応する
    // className={cn(buttonVariants({variant, size, loading: loading ? 'true' : undefined}), className)}
    disabled={disabled || loading}
    aria-disabled={disabled || loading}
    {...rest}
  >
    {loading ? <>loading...</> : <>{children}</>}
  </button>
}