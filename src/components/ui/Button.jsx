import { cn } from '@utils/cn'
import { Loader2 } from 'lucide-react'

const variants = {
  primary: 'bg-green-800 hover:bg-green-900 text-white border-transparent',
  secondary: 'bg-yellow-600 hover:bg-yellow-700 text-white border-transparent',
  outline: 'bg-transparent hover:bg-green-50 text-green-800 border-green-800',
  ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 border-transparent',
  danger: 'bg-red-600 hover:bg-red-700 text-white border-transparent',
  success: 'bg-emerald-600 hover:bg-emerald-700 text-white border-transparent',
  warning: 'bg-orange-500 hover:bg-orange-600 text-white border-transparent',
}

const sizes = {
  xs: 'text-xs px-2.5 py-1.5 rounded-md',
  sm: 'text-sm px-3.5 py-2 rounded-md',
  md: 'text-sm px-4 py-2.5 rounded-lg',
  lg: 'text-base px-6 py-3 rounded-lg',
  xl: 'text-base px-8 py-3.5 rounded-lg',
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  className,
  type = 'button',
  onClick,
  ...props
}) => {
  const isDisabled = disabled || loading

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center gap-2',
        'font-medium border transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        'active:scale-[0.98]',
        variants[variant],
        sizes[size],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin shrink-0" />
      ) : (
        LeftIcon && <LeftIcon className="w-4 h-4 shrink-0" />
      )}
      {children}
      {!loading && RightIcon && (
        <RightIcon className="w-4 h-4 shrink-0" />
      )}
    </button>
  )
}

export default Button