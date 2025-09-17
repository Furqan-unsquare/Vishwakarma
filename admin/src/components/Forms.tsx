import clsx from 'clsx'
import { useState } from 'react'
import { EventForm } from './EventForm'
import { DonationForm } from './DonationForm'

type ActivityType = 'event' | 'donation'

export function Forms() {
  const [activityType, setActivityType] = useState<ActivityType>('event')
  
  return (
    <div className="bg-gray-100 col-span-1 border-l border-gray-200 w-full h-full px-8 py-4">
      <header className="pb-4 w-full text-center">
        <h4 className="text-3xl font-light pt-1">Add Activity</h4>
      </header>
      <div className="flex flex-col justify-between items-center gap-4 pt-4">
        <div
          className={clsx(
            activityType === 'event' ? 'before:left-0' : 'before:left-1/2',
            ' relative grid grid-cols-2 font-medium gap-2 border border-gray-300 p-1 mb-4 rounded-lg',
            "before:content-[''] before:w-[calc(50%-8px)] before:h-[calc(100%-8px)] before:rounded-lg before:m-1 before:bg-Orange/30 before:absolute before:top-0 before:transition-all",
          )}
        >
          <button
            className="text-center py-2 px-8 rounded-lg cursor-pointer transition text-gray-950"
            onClick={() => setActivityType('event')}
          >
            Event
          </button>
          <button
            className="text-center py-2 px-8 rounded-lg cursor-pointer transition text-gray-950"
            onClick={() => setActivityType('donation')}
          >
            Donation
          </button>
        </div>
      </div>
      {activityType === 'event' ? <EventForm  /> : <DonationForm />}
    </div>
  )
}
