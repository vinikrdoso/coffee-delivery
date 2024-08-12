import {
  createContext,
  ReactNode,
} from 'react'
import type { AddressFormData } from '../pages/app/checkout'

interface CoffeeContextType {
  cartQuantity: number
  insertAddress: (data: AddressFormData) => void
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {

  function insertAddress(data: AddressFormData) {
    console.log("🚀 ~ insertAddress ~ data:", data)
    const stateJSON = JSON.stringify(data)

    localStorage.setItem('@coffee-delivery:address-1.0.0', stateJSON)
  }

  const cartQuantity = 2

  return (
    <CoffeeContext.Provider
      value={{
        insertAddress,
        cartQuantity
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
