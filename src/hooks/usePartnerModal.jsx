import { createContext, useContext, useState } from 'react'

const Ctx = createContext(null)

export function PartnerModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Ctx.Provider value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
      {children}
    </Ctx.Provider>
  )
}

export function usePartnerModal() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('usePartnerModal must be inside PartnerModalProvider')
  return ctx
}
