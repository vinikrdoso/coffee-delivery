import {
  ReactNode,
  useState,
} from 'react'
import { createContext } from 'use-context-selector'

import type { AddressFormData } from '../pages/app/checkout'
import type { PaymentMethodsTypes } from '../types'

interface CoffeeContextType {
  address: AddressFormData
  cartQuantity: number
  insertAddress: (data: AddressFormData) => void
  selectPaymentMethod: (paymentMethod: string) => void
  paymentMethod: string
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [address, setAddress] = useState((initialState: AddressFormData) => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:address-1.0.0',
    )

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }

    return initialState
  })
  const [paymentMethod, setPaymentMethod] = useState((initialState: PaymentMethodsTypes) => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffee-delivery:payment-method-1.0.0',
    )

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }

    return initialState
  })

  
  function insertAddress(data: AddressFormData) {
    setAddress(data)
    const stateJSON = JSON.stringify(data)

    localStorage.setItem('@coffee-delivery:address-1.0.0', stateJSON)
  }

  const cartQuantity = 1

  function selectPaymentMethod(paymentMethod: string) {
    setPaymentMethod(paymentMethod)
  }

  return (
    <CoffeeContext.Provider
      value={{
        address,
        insertAddress,
        cartQuantity,
        selectPaymentMethod,
        paymentMethod
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
