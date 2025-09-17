import { IconLoader2 } from '@tabler/icons-react'

export function Loading() {
  return (
    <div className="w-full h-screen    font-Dm-Sans overflow-hidden z-50 flex flex-col justify-center items-center gap-3 bg-gray-200">
      <h3 className="text-xl text-Purple font-Poppins">
        Please wait while we are verifying
      </h3>
      <IconLoader2 stroke={1} size={50} className="animate-spin" />
    </div>
  )
}
