import { DonationTable } from '@/components/DonationTable'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { GroupedDonation, StreamedDonation } from '@/types/api'
import { API_BASE_URL } from '@/util/constants'
import { IconLoader2 } from '@tabler/icons-react'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { DonationPopup } from '@/components/donation/DonationPopup'
import { InfoBoxes } from '@/components/donation/InfoBoxes'

export const Route = createFileRoute('/donations')({
  component: RouteComponent,
})

function RouteComponent() {
  const [donations, setDonations] = useState<StreamedDonation[]>([])
  const [selectedEvent, setSelectedEvent] = useState<GroupedDonation | null>(
    null,
  )
  const [newDonation, setNewDonation] = useState<StreamedDonation | null>(null)

  const { data, error, refetch, isLoading } = useQuery<
    GroupedDonation[],
    Error
  >({
    queryKey: ['fetch-grouped-donations'],
    queryFn: async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/donation/events`)
        if (!res.ok) {
          throw new Error('Failed to fetch donations. Please try again later')
        }
        const data = await res.json()
        if (data.donations && data.donations.length > 0) {
          setSelectedEvent(data.donations[0])
        } else {
          throw new Error('Failed to fetch donations. Please try again')
        }
        return data.donations
      } catch (error) {
        console.log(error)
      }
    },
  })

  useEffect(() => {
    const events = new EventSource('http://localhost:3000/donation/stream')
    events.onmessage = (event) => {
      const parsedData = JSON.parse(event.data)
      console.log({ parsedData, donations, newDonation })

      if (!Array.isArray(parsedData)) {
        setNewDonation(parsedData)
      }
      setDonations((prev) => prev.concat(parsedData))

      refetch()
    }
    return () => {
      events.close()
    }
  }, [])

  useEffect(() => {
    if (!newDonation) return

    const timeout = setTimeout(() => {
      setNewDonation(null)
    }, 2500)

    return () => {
      clearTimeout(timeout)
    }
  }, [newDonation, setNewDonation])

  const sortedDonations = [...donations].sort((a, b) => b.amount - a.amount)

  if (isLoading) {
    return (
      <div className="w-full h-screen font-Dm-Sans overflow-hidden z-50 flex flex-col justify-center items-center gap-3 bg-gray-200">
        <h3 className="text-xl text-Purple font-Poppins">
          Please wait while we are loading
        </h3>
        <IconLoader2 stroke={1} size={50} className="animate-spin" />
      </div>
    )
  }
  if (error || !data) {
    return (
      <div className="w-full h-screen grid place-items-center">
        <div>
          <p>Failed to load data. Please try again</p>
          <button
            className="px-5 py-2 mx-auto mt-4 w-fit rounded-sm border-2 border-Orange bg-white/10 hover:bg-white/15 active:bg-white/20 flex items-center justify-center gap-2 shadow-lg transition-all active:scale-95 group"
            onClick={() => refetch()}
          >
            Retry
          </button>
        </div>
      </div>
    )
  }
  return (
    <>
      <div className="w-screen min-h-screen font-Dm-Sans overflow-hidden px-8 py-4 pt-24">
        {sortedDonations.length > 0 && (
          <>
            <div className="flex justify-between items-end mb-4">
              <h1 className="font-Poppins font-semibold text-xl tracking-tight md:text-3xl md:leading-14">
                Top Donators
              </h1>
              {selectedEvent && (
                <Select
                  onValueChange={(value) => {
                    const chosen = data.find((item) => item.eventName === value)
                    if (chosen) setSelectedEvent(chosen)
                  }}
                >
                  <SelectTrigger className="w-[250px] border-2 rounded-lg shadow-xs focus:outline-none">
                    <SelectValue placeholder={selectedEvent.eventName} />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-100 border border-white/20 rounded-lg shadow-md">
                    {data.map((item: GroupedDonation) => (
                      <SelectItem
                        key={item.eventId}
                        value={item.eventName}
                        className="hover:bg-Orange/30 focus:bg-Orange/40 cursor-pointer rounded-md px-3 py-2 font-medium"
                      >
                        {item.eventName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            </div>
            <InfoBoxes
              data={data}
              selectedEvent={selectedEvent}
              setSelectedEvent={setSelectedEvent}
              sortedDonations={sortedDonations}
            />

            {sortedDonations.length > 3 && (
              <>
                <DonationTable data={sortedDonations} />
              </>
            )}
          </>
        )}
      </div>

      {newDonation && <DonationPopup donation={newDonation} />}
    </>
  )
}
