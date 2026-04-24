import { useState } from 'react'
import { cn } from '@utils/cn'
import {
  ChevronUp,
  ChevronDown,
  ChevronsUpDown,
  ChevronLeft,
  ChevronRight,
  Search,
} from 'lucide-react'
import { EmptyCard } from './Card'

// ── Table ─────────────────────────────────────────────────
const Table = ({
  columns = [],
  data = [],
  loading = false,
  emptyTitle = 'No records found',
  emptyDescription,
  emptyIcon,
  sortable = false,
  pagination = false,
  pageSize = 10,
  searchable = false,
  searchPlaceholder = 'Search...',
  className,
}) => {
  const [sortKey, setSortKey] = useState(null)
  const [sortDir, setSortDir] = useState('asc')
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')

  // ── Search ──────────────────────────────────────────────
  const searched = searchQuery.trim()
    ? data.filter((row) =>
        columns.some((col) => {
          const val = col.accessor
            ? row[col.accessor]
            : col.render?.(row)
          return String(val ?? '')
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        })
      )
    : data

  // ── Sort ────────────────────────────────────────────────
  const sorted = sortKey
    ? [...searched].sort((a, b) => {
        const aVal = a[sortKey]
        const bVal = b[sortKey]
        if (aVal === bVal) return 0
        const result = aVal > bVal ? 1 : -1
        return sortDir === 'asc' ? result : -result
      })
    : searched

  // ── Pagination ──────────────────────────────────────────
  const totalPages = Math.ceil(sorted.length / pageSize)
  const paginated = pagination
    ? sorted.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    : sorted

  const handleSort = (key) => {
    if (!sortable || !key) return
    if (sortKey === key) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortDir('asc')
    }
    setCurrentPage(1)
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1)
  }

  const SortIcon = ({ colKey }) => {
    if (!sortable) return null
    if (sortKey !== colKey) {
      return <ChevronsUpDown className="w-3.5 h-3.5 text-gray-400" />
    }
    return sortDir === 'asc' ? (
      <ChevronUp className="w-3.5 h-3.5 text-green-700" />
    ) : (
      <ChevronDown className="w-3.5 h-3.5 text-green-700" />
    )
  }

  return (
    <div className={cn('flex flex-col gap-4', className)}>

      {/* Search Bar */}
      {searchable && (
        <div className="relative max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={handleSearch}
            className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
          />
        </div>
      )}

      {/* Table Wrapper */}
      <div className="w-full overflow-x-auto rounded-xl border border-gray-100">
        <table className="w-full text-sm">

          {/* Head */}
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              {columns.map((col, i) => (
                <th
                  key={col.key ?? i}
                  onClick={() =>
                    col.sortable !== false && handleSort(col.accessor)
                  }
                  className={cn(
                    'px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide whitespace-nowrap',
                    sortable &&
                      col.sortable !== false &&
                      col.accessor &&
                      'cursor-pointer hover:text-green-800 select-none',
                    col.align === 'center' && 'text-center',
                    col.align === 'right' && 'text-right',
                    col.width && `w-${col.width}`
                  )}
                >
                  <span className="inline-flex items-center gap-1">
                    {col.header}
                    {sortable && col.sortable !== false && col.accessor && (
                      <SortIcon colKey={col.accessor} />
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <tbody className="divide-y divide-gray-50 bg-white">
            {loading ? (
              // Loading Skeleton Rows
              Array.from({ length: 5 }).map((_, i) => (
                <tr key={i} className="animate-pulse">
                  {columns.map((col, j) => (
                    <td key={j} className="px-4 py-3.5">
                      <div className="h-4 bg-gray-200 rounded w-3/4" />
                    </td>
                  ))}
                </tr>
              ))
            ) : paginated.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-4 py-2">
                  <EmptyCard
                    icon={emptyIcon}
                    title={emptyTitle}
                    description={emptyDescription}
                  />
                </td>
              </tr>
            ) : (
              paginated.map((row, rowIndex) => (
                <tr
                  key={row.id ?? rowIndex}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  {columns.map((col, colIndex) => (
                    <td
                      key={col.key ?? colIndex}
                      className={cn(
                        'px-4 py-3.5 text-gray-700 whitespace-nowrap',
                        col.align === 'center' && 'text-center',
                        col.align === 'right' && 'text-right',
                        col.className
                      )}
                    >
                      {col.render
                        ? col.render(row, rowIndex)
                        : col.accessor
                        ? row[col.accessor] ?? '—'
                        : '—'}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {pagination && totalPages > 1 && (
        <div className="flex items-center justify-between px-1">
          <p className="text-gray-500 text-xs">
            Showing{' '}
            <span className="font-semibold text-gray-700">
              {(currentPage - 1) * pageSize + 1}
            </span>{' '}
            to{' '}
            <span className="font-semibold text-gray-700">
              {Math.min(currentPage * pageSize, sorted.length)}
            </span>{' '}
            of{' '}
            <span className="font-semibold text-gray-700">
              {sorted.length}
            </span>{' '}
            records
          </p>

          <div className="flex items-center gap-1">
            <button
              onClick={() =>
                setCurrentPage((p) => Math.max(1, p - 1))
              }
              disabled={currentPage === 1}
              className="p-1.5 rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(
                (page) =>
                  page === 1 ||
                  page === totalPages ||
                  Math.abs(page - currentPage) <= 1
              )
              .reduce((acc, page, i, arr) => {
                if (i > 0 && page - arr[i - 1] > 1) {
                  acc.push('...')
                }
                acc.push(page)
                return acc
              }, [])
              .map((item, i) =>
                item === '...' ? (
                  <span
                    key={`ellipsis-${i}`}
                    className="px-2 text-gray-400 text-sm"
                  >
                    ...
                  </span>
                ) : (
                  <button
                    key={item}
                    onClick={() => setCurrentPage(item)}
                    className={cn(
                      'w-8 h-8 rounded-md text-sm font-medium transition-colors',
                      currentPage === item
                        ? 'bg-green-800 text-white'
                        : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                    )}
                  >
                    {item}
                  </button>
                )
              )}

            <button
              onClick={() =>
                setCurrentPage((p) => Math.min(totalPages, p + 1))
              }
              disabled={currentPage === totalPages}
              className="p-1.5 rounded-md border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Table