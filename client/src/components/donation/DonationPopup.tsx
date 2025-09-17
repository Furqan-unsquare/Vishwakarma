import type { StreamedDonation } from "@/types/api";

export function DonationPopup({ donation }: { donation: StreamedDonation }) {
  return (
    <div className="z-50 font-Dm-Sans fixed top-24 left-1/2 px-20 py-4 rounded-sm flex flex-col -translate-x-1/2 justify-center items-center gap-3 bg-green-200 border-2 border-green-500">
      <h1 className="text-3xl tracking-wider font-semibold font-Poppins">
        THANK YOU
      </h1>
      <p className="font-Poppins text-xl">
        {donation.donatorName} for the ₹{donation.amount} donation
      </p>
    </div>
  )
}
