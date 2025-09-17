import type { Donation } from '@/types/api'
import type { SortingState } from '@tanstack/react-table'
import { useState } from 'react'
import { IconChevronDown, IconChevronUp, IconTrash } from '@tabler/icons-react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import clsx from 'clsx'
import {
  API_BASE_URL,
  ERROR_TOAST_STYLE,
  SUCCESS_TOAST_STYLE,
} from '@/util/constants'
import { useMutation, type UseQueryResult } from '@tanstack/react-query'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog'
import { toast } from 'sonner'
type QueryResult = UseQueryResult<Donation[], Error>

const columnHelper = createColumnHelper<Donation>()

export function DonationTable({
  data,
  refetch,
}: {
  data: Donation[]
  refetch: QueryResult['refetch']
}) {
  // data = new Array<Donation>(100).fill(data[0])
  const [sorting, setSorting] = useState<SortingState>([])
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  })
  const mutation = useMutation({
    mutationKey: ['delete-donation'],
    mutationFn: async (id: number) => {
      const res = await fetch(`${API_BASE_URL}/donation/delete/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      })
      if (!res.ok) {
        throw new Error('Failed to delete donation')
      }
    },
    onError: (error) => {
      const err = error as Error
      toast(err.message, { style: ERROR_TOAST_STYLE })
    },
    onSuccess: () => {
      toast('Donation deleted successfully', { style: SUCCESS_TOAST_STYLE })
      refetch()
    },
  })

  const table = useReactTable({
    columns: [
      columnHelper.accessor('id', {
        header: 'ID',
        cell: (info) => parseInt(info.row.id) + 1,
      }),
      columnHelper.accessor('eventId', {
        header: 'Event ID',
        cell: (info) => info.getValue(),
        sortingFn: 'alphanumeric',
      }),
      columnHelper.accessor('donatorName', {
        header: 'Donator',
        cell: (info) => info.getValue(),
        sortingFn: 'text',
      }),
      columnHelper.accessor('amount', {
        header: 'Amount',
        cell: (info) => `₹${info.getValue()}`,
        sortingFn: 'alphanumeric',
      }),
      columnHelper.accessor('paymentMode', {
        header: 'Mode',
        cell: (info) => info.getValue(),
        sortingFn: 'text',
      }),
      columnHelper.accessor('createdAt', {
        header: 'Timestamp',
        cell: (info) =>
          new Date(info.getValue()).toLocaleString('en-IN', {
            timeZone: "UTC",
            dateStyle: 'medium',
            timeStyle: 'short',
          }),
        sortingFn: 'datetime',
      }),
      columnHelper.display({
        id: 'actions',
        header: 'Actions',
        cell: (info) => (
          <AlertDialog>
            <AlertDialogTrigger className="hover:bg-red-300 hover:text-white p-1 rounded-sm">
              <IconTrash stroke={1} size={20} />
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-gray-100 border-gray-200">
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently the log.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  className="cursor-pointer bg-red-500 text-white"
                  onClick={() => mutation.mutate(info.cell.row.original['id'])}
                >
                  Continue
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        ),
      }),
    ],
    data,
    state: { sorting, pagination },
    onPaginationChange: setPagination,
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })

  return (
    <div className="p-4 px-8">
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
