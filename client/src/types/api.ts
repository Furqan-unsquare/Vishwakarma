export type Event = {
  id: number
  createdAt: Date
  updatedAt: Date
  name: string
  description: string | null
  startTime: Date
  endTime: Date | null
}

export type Donation = {
  id: number
  createdAt: Date
  updatedAt: Date
  donatorName: string
  eventId: number
  amount: number
  paymentMode: 'cash' | 'upi' | 'card'
  transactionId: string | null
  message: string | null
}

export type NewEvent = {
  name: string
  startTime: Date
  id?: number | undefined
  createdAt?: Date | undefined
  updatedAt?: Date | undefined
  description?: string | null | undefined
  endTime?: Date | null | undefined
}

export type NewDonation = {
  donatorName: string
  eventId: number
  amount: string
  id?: number | undefined
  createdAt?: Date | undefined
  updatedAt?: Date | undefined
  paymentMode?: 'cash' | 'upi' | 'card' | undefined
  transactionId?: string | null | undefined
  message?: string | null | undefined
}

export type StreamedDonation = {
  eventName: string
  eventId: number
  id: number
  donatorName: string
  amount: number
  paymentMode: 'cash' | 'upi' | 'card'
  message: string | null
  createdAt: Date
  updatedAt: Date
  transactionId: string | null
}

export type GroupedDonation = {
  totalAmount: number
  eventId: number
  eventName: string
}
