import type { GroupedDonation, StreamedDonation } from "@/types/api"
import { DonationCard } from "./DonationCard"

export function InfoBoxes({
  sortedDonations,
  selectedEvent,
}: {
  sortedDonations: StreamedDonation[]
  selectedEvent: GroupedDonation | null
  setSelectedEvent: React.Dispatch<React.SetStateAction<GroupedDonation | null>>
  data: GroupedDonation[]
}) {
  return (
    <div className="grid grid-cols-4 gap-6">
      {sortedDonations.length > 0 && (
        <DonationCard
          donation={sortedDonations[0]}
          ranking="1st"
          bgColor="bg-Orange"
        />
      )}
      {sortedDonations.length > 1 && (
        <DonationCard
          donation={sortedDonations[1]}
          ranking="2nd"
          bgColor="bg-Orange/80"
        />
      )}
      {sortedDonations.length > 2 && (
        <DonationCard
          donation={sortedDonations[2]}
          ranking="3rd"
          bgColor="bg-Orange/60"
        />
      )}
      {selectedEvent && (
        <div className="p-4 rounded-lg shadow-xs bg-Purple text-white">
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-2xl font-semibold">Total Donations</h2>
            <p className="text-xl font-semibold">
              ₹{selectedEvent.totalAmount}
            </p>
          </div>
          <p className="text-right">- for {selectedEvent.eventName}</p>
        </div>
      )}
    </div>
  )
}

