import authClient from '@/lib/authClient'
import { IconExclamationCircle } from '@tabler/icons-react'
import { useNavigate } from '@tanstack/react-router'

export function ErrorState() {
  const { refetch } = authClient.useSession()
  const navigate = useNavigate()
  return (
    <div className="min-h-screen font-Dm-Sans bg-orange-100 flex items-center justify-center bg text-Text px-4">
      <div className="shadow-lg rounded-2xl p-10 text-center max-w-md w-full border-[2px] border-Text">
        <div className="flex items-center justify-center mb-6 text-Error text-7xl">
          <IconExclamationCircle size={75} stroke={1} />
        </div>
        <h1 className="text-2xl font-semibold font-Bricolage mb-2 text-Error">
          Session Expired
        </h1>
        <p className="text-Text mb-6">
          Your session has ended or is invalid. Please sign in again to
          continue.
        </p>
        <div className="grid place-items-center grid-cols-2 gap-4">
          <button
            onClick={() => refetch()}
            className="bg-Orange w-full border-Orange text-white py-3 px-8 rounded-lg hover:bg-Orange-Hover hover:border-Orange-Hover active:bg-Orange-Active active:border-Orange-Active active:scale-90 transition-all cursor-pointer"
          >
            Retry
          </button>
          <button
            onClick={() => navigate({ to: '/auth/signin' })}
            className="border-[2px] bg-white w-full border-Text underline py-3 px-8 rounded-lg hover:inset-shadow-sm/15 hover:bg-Text/15 active:scale-90 transition-all cursor-pointer"
          >
            Go to Signin
          </button>
        </div>
      </div>
    </div>
  )
}
