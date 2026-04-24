import { cn } from '@utils/cn'

// ── Base Card ─────────────────────────────────────────────
const Card = ({
  children,
  className,
  hover = false,
  padding = 'md',
  ...props
}) => {
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  }

  return (
    <div
      className={cn(
        'bg-white border border-gray-100 rounded-xl',
        hover &&
          'hover:shadow-md hover:border-green-200 transition-all duration-300 cursor-pointer',
        paddings[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// ── Card Header ───────────────────────────────────────────
const CardHeader = ({
  children,
  className,
  title,
  subtitle,
  action,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex items-center justify-between mb-6',
        className
      )}
      {...props}
    >
      {title || subtitle ? (
        <div>
          {title && (
            <h3 className="text-gray-900 font-bold text-base">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-gray-500 text-sm mt-0.5">{subtitle}</p>
          )}
        </div>
      ) : (
        children
      )}
      {action && <div>{action}</div>}
    </div>
  )
}

// ── Card Body ─────────────────────────────────────────────
const CardBody = ({ children, className, ...props }) => {
  return (
    <div className={cn('', className)} {...props}>
      {children}
    </div>
  )
}

// ── Card Footer ───────────────────────────────────────────
const CardFooter = ({
  children,
  className,
  bordered = true,
  ...props
}) => {
  return (
    <div
      className={cn(
        'mt-6 pt-4',
        bordered && 'border-t border-gray-100',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// ── Stat Card ─────────────────────────────────────────────
export const StatCard = ({
  title,
  value,
  icon: Icon,
  trend,
  trendValue,
  color = 'green',
  className,
}) => {
  const colors = {
    green: {
      bg: 'bg-green-100',
      icon: 'text-green-800',
      trend: 'text-green-600',
    },
    yellow: {
      bg: 'bg-yellow-100',
      icon: 'text-yellow-700',
      trend: 'text-yellow-600',
    },
    blue: {
      bg: 'bg-blue-100',
      icon: 'text-blue-700',
      trend: 'text-blue-600',
    },
    red: {
      bg: 'bg-red-100',
      icon: 'text-red-700',
      trend: 'text-red-600',
    },
  }

  const scheme = colors[color] || colors.green

  return (
    <Card
      className={cn('flex items-center gap-4', className)}
      padding="md"
    >
      {Icon && (
        <div
          className={cn(
            'w-12 h-12 rounded-xl flex items-center justify-center shrink-0',
            scheme.bg
          )}
        >
          <Icon className={cn('w-6 h-6', scheme.icon)} />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <p className="text-gray-500 text-xs font-medium uppercase tracking-wide truncate">
          {title}
        </p>
        <p className="text-2xl font-black text-gray-900 mt-0.5">
          {value}
        </p>
        {trendValue && (
          <p className={cn('text-xs mt-1 font-medium', scheme.trend)}>
            {trend === 'up' ? '↑' : '↓'} {trendValue}
          </p>
        )}
      </div>
    </Card>
  )
}

// ── Empty State Card ──────────────────────────────────────
export const EmptyCard = ({
  icon: Icon,
  title = 'No data found',
  description,
  action,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center py-16 px-6',
        'bg-gray-50 border border-dashed border-gray-200 rounded-xl',
        'text-center',
        className
      )}
    >
      {Icon && (
        <div className="w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-4">
          <Icon className="w-7 h-7 text-gray-400" />
        </div>
      )}
      <p className="text-gray-700 font-semibold text-sm">{title}</p>
      {description && (
        <p className="text-gray-400 text-xs mt-1 max-w-xs">
          {description}
        </p>
      )}
      {action && <div className="mt-5">{action}</div>}
    </div>
  )
}

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter

export default Card