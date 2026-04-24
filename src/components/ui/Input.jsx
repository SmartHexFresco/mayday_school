import { forwardRef } from 'react'
import { cn } from '@utils/cn'
import { AlertCircle, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

// ── Base Input ────────────────────────────────────────────
const Input = forwardRef(({
  label,
  error,
  hint,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  required,
  disabled,
  className,
  containerClassName,
  type = 'text',
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === 'password'
  const inputType = isPassword
    ? showPassword ? 'text' : 'password'
    : type

  return (
    <div className={cn('flex flex-col gap-1.5', containerClassName)}>

      {/* Label */}
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
          {required && (
            <span className="text-red-500 ml-1">*</span>
          )}
        </label>
      )}

      {/* Input Wrapper */}
      <div className="relative">
        {/* Left Icon */}
        {LeftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <LeftIcon className="w-4 h-4" />
          </div>
        )}

        {/* Input */}
        <input
          ref={ref}
          type={inputType}
          disabled={disabled}
          className={cn(
            'w-full border rounded-lg text-sm transition-all duration-200',
            'placeholder:text-gray-400 text-gray-900',
            'focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent',
            'disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed',
            error
              ? 'border-red-400 focus:ring-red-400 bg-red-50'
              : 'border-gray-200 bg-white hover:border-gray-300',
            LeftIcon ? 'pl-10' : 'pl-4',
            isPassword || RightIcon ? 'pr-10' : 'pr-4',
            'py-2.5',
            className
          )}
          {...props}
        />

        {/* Password Toggle / Right Icon */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          {isPassword ? (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          ) : RightIcon ? (
            <div className="text-gray-400 pointer-events-none">
              <RightIcon className="w-4 h-4" />
            </div>
          ) : null}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <p className="flex items-center gap-1.5 text-red-500 text-xs">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          {error}
        </p>
      )}

      {/* Hint */}
      {hint && !error && (
        <p className="text-gray-400 text-xs">{hint}</p>
      )}

    </div>
  )
})

Input.displayName = '@components/Input'

// ── Textarea ──────────────────────────────────────────────
export const Textarea = forwardRef(({
  label,
  error,
  hint,
  required,
  disabled,
  rows = 4,
  className,
  containerClassName,
  ...props
}, ref) => {
  return (
    <div className={cn('flex flex-col gap-1.5', containerClassName)}>
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        ref={ref}
        rows={rows}
        disabled={disabled}
        className={cn(
          'w-full border rounded-lg text-sm px-4 py-2.5 transition-all duration-200',
          'placeholder:text-gray-400 text-gray-900 resize-none',
          'focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent',
          'disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed',
          error
            ? 'border-red-400 focus:ring-red-400 bg-red-50'
            : 'border-gray-200 bg-white hover:border-gray-300',
          className
        )}
        {...props}
      />
      {error && (
        <p className="flex items-center gap-1.5 text-red-500 text-xs">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          {error}
        </p>
      )}
      {hint && !error && (
        <p className="text-gray-400 text-xs">{hint}</p>
      )}
    </div>
  )
})

Textarea.displayName = 'Textarea'

// ── Select ────────────────────────────────────────────────
export const Select = forwardRef(({
  label,
  error,
  hint,
  required,
  disabled,
  options = [],
  placeholder = 'Select an option',
  className,
  containerClassName,
  ...props
}, ref) => {
  return (
    <div className={cn('flex flex-col gap-1.5', containerClassName)}>
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <select
        ref={ref}
        disabled={disabled}
        className={cn(
          'w-full border rounded-lg text-sm px-4 py-2.5 transition-all duration-200',
          'text-gray-900 bg-white',
          'focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent',
          'disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed',
          error
            ? 'border-red-400 focus:ring-red-400 bg-red-50'
            : 'border-gray-200 hover:border-gray-300',
          className
        )}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option
            key={opt.value ?? opt}
            value={opt.value ?? opt}
          >
            {opt.label ?? opt}
          </option>
        ))}
      </select>
      {error && (
        <p className="flex items-center gap-1.5 text-red-500 text-xs">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          {error}
        </p>
      )}
      {hint && !error && (
        <p className="text-gray-400 text-xs">{hint}</p>
      )}
    </div>
  )
})

Select.displayName = 'Select'

export default Input