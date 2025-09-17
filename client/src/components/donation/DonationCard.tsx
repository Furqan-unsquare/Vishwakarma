import type { StreamedDonation } from "@/types/api"
import clsx from "clsx"

export function DonationCard({
  donation,
  ranking,
  bgColor,
}: {
  donation: StreamedDonation
  ranking: string
  bgColor?: string
}) {
  return (
    <div className={clsx('p-4 rounded-lg shadow-xs', bgColor, 'bg-Orange')}>
      <div className="flex justify-between items-end mb-4">
        <h2 className="text-2xl font-semibold">{ranking}</h2>
        <p className="text-xl font-semibold">₹{donation.amount}</p>
      </div>
      <p className="uppercase text-lg font-Poppins">{donation.donatorName}</p>
    </div>
  )
}
