import { create } from 'zustand'

export type LastEventStoreType = {
  id: string | null
  name: string | null
  setId: (eventId: string) => void
  setName: (eventName: string) => void
}
export const useLastEventStore = create<LastEventStoreType>((set) => ({
  id: null,
  name: null,
  setId: (eventId) => set({ id: eventId }),
  setName: (eventName) => set({ name: eventName }),
}))
