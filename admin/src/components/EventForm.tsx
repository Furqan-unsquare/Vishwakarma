import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import {
  API_BASE_URL,
  ERROR_TOAST_STYLE,
  SUCCESS_TOAST_STYLE,
} from '@/util/constants'
import { toast } from 'sonner'

type FormData = {
  name: string
  description: string
  startTime: string
  endTime: string
}

export const EventForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    description: '',
    startTime: '',
    endTime: '',
  })
  const queryClient = useQueryClient()

  const addEventMutation = useMutation({
    mutationFn: async (formData: FormData) => {
      const res = await fetch(`${API_BASE_URL}/event/add`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          endTime: formData.endTime.length === 0 ? null : formData.endTime,
        }),
      })

      if (!res.ok) {
        const error = await res.json()
        throw new Error(error.error || 'Failed to create event')
      }

      return res.json()
    },
    onSuccess: (_data) => {
      setFormData({
        name: '',
        description: '',
        startTime: '',
        endTime: '',
      })
      toast('Event Created Successfully', { style: SUCCESS_TOAST_STYLE })
      queryClient.invalidateQueries({ queryKey: ['event-list'] })
      queryClient.invalidateQueries({ queryKey: ['events'] })
    },
    onError: (error: Error) => {
      toast(error.message, { style: ERROR_TOAST_STYLE })
    },
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    addEventMutation.mutate(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Event Name<span className="text-red-700">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-Orange"
          placeholder="Enter event name"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-Orange"
          placeholder="Write a short description..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Start Time<span className="text-red-700">*</span>
        </label>
        <input
          type="datetime-local"
          name="startTime"
          value={formData.startTime}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-Orange"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          End Time
        </label>
        <input
          type="datetime-local"
          name="endTime"
          value={formData.endTime}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-Orange"
        />
      </div>

      <button
        type="submit"
        disabled={addEventMutation.isPending}
        className="bg-Orange text-white py-2 px-4 rounded-lg font-medium hover:bg-orange-600 transition"
      >
        {addEventMutation.isPending ? 'Creating...' : 'Create Event'}
      </button>
    </form>
  )
}
