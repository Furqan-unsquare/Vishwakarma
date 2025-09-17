import type { StreamedDonation } from '@/types/api'
import type { SortingState, ColumnFiltersState } from '@tanstack/react-table'
import { useState } from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import {
  IconChevronDown,
  IconChevronUp,
  IconFilterOff,
} from '@tabler/icons-react'
import clsx from 'clsx'

const columnHelper = createColumnHelper<StreamedDonation>()

export function DonationTable({ data }: { data: StreamedDonation[] }) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  })
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const table = useReactTable({
    columns: [
      columnHelper.accessor('donatorName', {
        header: 'Donator',
        cell: (info) => (
          <p className="font-semibold uppercase tracking-wide">
            {info.getValue()}
          </p>
        ),
        sortingFn: 'text',
        filterFn: 'includesString',
      }),
      columnHelper.accessor('eventName', {
        header: 'Event Name',
        cell: (info) => <p>{info.getValue()}</p>,
        sortingFn: 'text',
        filterFn: 'includesString',
      }),
      columnHelper.accessor('amount', {
        header: 'Amount',
        cell: (info) => `₹${info.getValue()}`,
        sortingFn: 'alphanumeric',
        filterFn: (row, columnId, filterValue) => {
          return parseInt(row.getValue(columnId)) <= filterValue
        },
      }),
      columnHelper.accessor('paymentMode', {
        header: 'Mode',
        cell: (info) => info.getValue(),
        sortingFn: 'text',
        filterFn: 'equalsString',
      }),
      columnHelper.accessor('createdAt', {
        header: 'Timestamp',
        cell: (info) =>
          new Date(info.getValue()).toLocaleString('en-IN', {
            timeZone: 'UTC',
            dateStyle: 'medium',
            timeStyle: 'short',
          }),
        sortingFn: 'datetime',
        filterFn: (row, columnId, filterValue) => {
          const rowDate = new Date(row.getValue(columnId) as string)
            .toISOString()
            .slice(0, 10)
          return rowDate.includes(filterValue) // simple YYYY-MM-DD search
        },
      }),
    ],
    data,
    state: { sorting, pagination, columnFilters },
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getPaginationRowModel: getPaginationRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <div className="pb-4 pt-8">
      <div className="flex items-center justify-between mt-8 mb-2">
        <h1 className="font-Poppins font-semibold text-xl tracking-tight md:text-3xl md:leading-14">
          All Donations
        </h1>
        <div className="flex flex-wrap items-center gap-3">
          <IconFilterOff
            onClick={() => table.resetColumnFilters()}
            className="text-gray-700 hover:text-black cursor-pointer mr-4"
          />
          <input
            className="border rounded px-2 py-1"
            placeholder="Filter Donator"
            value={
              (table.getColumn('donatorName')?.getFilterValue() as string) ?? ''
            }
            onChange={(e) =>
              table.getColumn('donatorName')?.setFilterValue(e.target.value)
            }
          />
          <input
            className="border rounded px-2 py-1"
            placeholder="Filter Event"
            value={
              (table.getColumn('eventName')?.getFilterValue() as string) ?? ''
            }
            onChange={(e) =>
              table.getColumn('eventName')?.setFilterValue(e.target.value)
            }
          />
          <input
            type="number"
            className="border rounded px-2 py-1"
            placeholder="Filter Amount"
            value={
              (table.getColumn('amount')?.getFilterValue() as string) ?? ''
            }
            onChange={(e) =>
              table.getColumn('amount')?.setFilterValue(e.target.value)
            }
          />
          <select
            className="border rounded px-2 py-1"
            value={
              (table.getColumn('paymentMode')?.getFilterValue() as string) ?? ''
            }
            onChange={(e) =>
              table
                .getColumn('paymentMode')
                ?.setFilterValue(e.target.value || undefined)
            }
          >
            <option value="">All Modes</option>
            <option value="card">Card</option>
            <option value="cash">Cash</option>
            <option value="upi">UPI</option>
          </select>
          <input
            type="date"
            className="border rounded px-2 py-1"
            value={
              (table.getColumn('createdAt')?.getFilterValue() as string) ?? ''
            }
            onChange={(e) =>
              table.getColumn('createdAt')?.setFilterValue(e.target.value)
            }
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
        <table className="min-w-full text-sm text-gray-800">
          <thead className="bg-gray-100">
            {table.getHeaderGroups().map((head) => (
              <tr key={head.id}>
                {head.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="px-4 py-3 text-left font-medium font-Outfit tracking-wide cursor-pointer select-none"
                  >
                    <div className="flex items-center gap-1">
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {{
                        asc: <IconChevronUp size={16} />,
                        desc: <IconChevronDown size={16} />,
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row, idx) => (
              <tr
                key={row.id}
                className={clsx(
                  'transition-colors',
                  idx % 2 === 0 ? 'bg-white' : 'bg-gray-50',
                  'hover:bg-orange-50',
                )}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-3">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-end gap-2 mt-2">
        <button
          className="border rounded-sm border-gray-300 px-3 py-2 bg-gray-100 cursor-pointer hover:bg-gray-200"
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<<'}
        </button>
        <button
          className="border rounded-sm border-gray-300 px-3 py-2 bg-gray-100 cursor-pointer hover:bg-gray-200"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          {'<'}
        </button>
        <button
          className="border rounded-sm border-gray-300 px-3 py-2 bg-gray-100 cursor-pointer hover:bg-gray-200"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>'}
        </button>
        <button
          className="border rounded-sm border-gray-300 px-3 py-2 bg-gray-100 cursor-pointer hover:bg-gray-200"
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </button>
      </div>
    </div>
  )
}
