import { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import {
  API_BASE_URL,
  ERROR_TOAST_STYLE,
  SUCCESS_TOAST_STYLE,
} from '@/util/constants'
import { toast } from 'sonner'

type DonationFormData = {
  donatorName: string
  eventId: string
  amount: string
  paymentMode: string
  transactionId: string
  message: string
}
type Event = {
  eventName: string
  eventId: string
}

export const DonationForm = () => {
  const [formData, setFormData] = useState<DonationFormData>({
    donatorName: '',
    eventId: '',
    amount: '',
    paymentMode: 'card',
    transactionId: '',
    message: '',
  })
  const queryClient = useQueryClient()

  const { data, error, isLoading } = useQuery<Event[], Error>({
    queryKey: ['event-list'],
    queryFn: async () => {
      const res = await fetch(`${API_BASE_URL}/event/fetch-all`, {
        credentials: 'include',
      })
      if (!res.ok) {
        throw new Error('Failed to fetch events')
      }
      const data = await res.json()
      console.log(data[0].eventId)
      setFormData((prev) => ({ ...prev, eventId: data[0].eventId }))
      return data
    },
  })

  const addDonationMutation = useMutation({
    mutationFn: async (formData: DonationFormData) => {
      const res = await fetch(`${API_BASE_URL}/donation/add`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error || 'Failed to add donation')
      }

      return res.json()
    },
    onSuccess: (data) => {
      console.log('Donation added:', data)
      setFormData({
        donatorName: '',
        eventId: '',
        amount: '',
        paymentMode: 'card',
        transactionId: '',
        message: '',
      })
      toast('donation added successfully', { style: SUCCESS_TOAST_STYLE })
      queryClient.invalidateQueries({ queryKey: ['fetch-all-donations'] })
    },
    onError: (error: Error) => {
      toast(error.message, {
        style: ERROR_TOAST_STYLE,
      })
    },
  })

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    addDonationMutation.mutate(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Donator Name<span className="text-red-700">*</span>
        </label>
        <input
          type="text"
          name="donatorName"
          value={formData.donatorName}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-Orange"
          placeholder="Enter donator's name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Event name<span className="text-red-700">*</span>
        </label>
        {isLoading || error || !data ? (
          <>
            <input
              type="number"
              name="eventId"
              value={formData.eventId}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-Orange"
              placeholder="Event ID"
            />
          </>
        ) : (
          <select
            name="eventId"
            value={formData.eventId}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-Orange"
          >
            {data.map((event) => (
              <option key={event.eventId} value={event.eventId}>
                {event.eventName}
              </option>
            ))}
          </select>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Amount<span className="text-red-700">*</span>
        </label>
        <input
          type="number"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          min={1}
          step="0.01"
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-Orange"
          placeholder="Enter amount"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Payment Mode<span className="text-red-700">*</span>
        </label>
        <select
          name="paymentMode"
          value={formData.paymentMode}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-Orange"
        >
          <option value="card">Card</option>
          <option value="cash">Cash</option>
          <option value="upi">UPI</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Transaction ID
        </label>
        <input
          type="text"
          name="transactionId"
          value={formData.transactionId}
          onChange={handleChange}
          placeholder="Optional"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-Orange"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-Orange"
          placeholder="Leave a message..."
        />
      </div>

      <button
        type="submit"
        disabled={addDonationMutation.isPending}
        className="bg-Orange text-white py-2 px-4 rounded-lg font-medium hover:bg-orange-600 transition"
      >
        {addDonationMutation.isPending ? 'Adding...' : 'Add Donation'}
      </button>
    </form>
  )
}
