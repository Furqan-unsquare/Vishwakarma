import Header from '@/components/Header'
import authClient from '@/lib/authClient'
import { createFileRoute } from '@tanstack/react-router'
import { Loading } from '@/components/Loading'
import { ErrorState } from '@/components/Error'
import { DonationTable } from '@/components/DonationTable'
import { useQuery } from '@tanstack/react-query'
import { API_BASE_URL } from '@/util/constants'
import type { Donation } from '@/types/api'
import { IconTableOff } from '@tabler/icons-react'
import { Forms } from '@/components/Forms'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const { error, isPending, data } = authClient.useSession()
  if (isPending) {
    return <Loading />
  }

  if (error || !data) {
    return <ErrorState />
  }

  return (
    <div className="w-screen h-screen grid grid-cols-4 font-Dm-Sans">
      <Dashboard />
      <Forms />
    </div>
  )
}

function Dashboard() {
  const { data, error, isFetching, refetch } = useQuery<Donation[]>({
    queryKey: ['fetch-all-donations'],
    queryFn: async () => {
      const res = await fetch(`${API_BASE_URL}/donation/fetch-all`, {
        credentials: 'include',
      })
      if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error)
      }
      const data = await res.json()
      return data.donation
    },
  })

  if (isFetching) {
    return <Loading />
  }
  if (error || !data) {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center gap-2">
        <h2 className="text-2xl font-semibold font-Bricolage mb-2 text-Error">
          Failed to fetch data
        </h2>
        <button
          onClick={() => refetch()}
          className="border-[2px] w-full border-Text inset-shadow-2xs/15 underline py-3 px-8 rounded-lg hover:inset-shadow-sm/15 hover:bg-Text/15 active:scale-90 transition-all cursor-pointer"
        >
          Refetch
        </button>
      </div>
    )
  }
  return (
    <div className="col-span-3 col-start-1 w-full h-full">
      <Header />
      <div className="py-4 px-8">
        <h1 className="font-Poppins font-medium text-3xl">Good Morning</h1>
      </div>
      {data.length <= 0 ? (
        <div className="pt-28 flex flex-col gap-4 justify-center items-center">
          <IconTableOff stroke={1} size={50} />
          No data available at the moment
        </div>
      ) : (
        <DonationTable data={data} refetch={refetch} />
      )}
    </div>
  )
}
