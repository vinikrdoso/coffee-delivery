import { ReactNode, useCallback, useState } from "react";
import { createContext } from "use-context-selector";

import type { AddressFormData } from "../pages/app/checkout";
import type { CoffeeType } from "../types";
import { coffeeList } from "../lib/coffees";

interface CoffeeContextType {
  address: AddressFormData;
  insertAddress: (data: AddressFormData) => void;
  selectPaymentMethod: (paymentMethod: string) => void;
  paymentMethod: string;
  removeFromCart: (coffee: CoffeeType) => void;
  removeItemFromCart: (id: string) => void;
  addToCart: (coffee: CoffeeType) => void;
  cart: CoffeeType[];
  coffees: CoffeeType[];
  totalItems: number;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

interface CoffeeContextProviderProps {
  children: ReactNode;
}

export function CoffeeContextProvider({
  children,
}: CoffeeContextProviderProps) {
  const [totalItems, setTotalItems] = useState(0)
  const [cart, setCart] = useState(() => {
    const storedStateAsJSON = localStorage.getItem(
      "@coffee-delivery:cart-1.0.0"
    );

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON);
    }

    return [];
  });
  const [address, setAddress] = useState(() => {
    const storedStateAsJSON = localStorage.getItem(
      "@coffee-delivery:address-1.0.0"
    );

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON);
    }

    return {};
  });
  const [paymentMethod, setPaymentMethod] = useState(() => {
    const storedStateAsJSON = localStorage.getItem(
      "@coffee-delivery:payment-method-1.0.0"
    );

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON);
    }

    return "";
  });

  function insertAddress(data: AddressFormData) {
    setAddress(data);
    const stateJSON = JSON.stringify(data);

    localStorage.setItem("@coffee-delivery:address-1.0.0", stateJSON);
  }

  function selectPaymentMethod(paymentMethod: string) {
    setPaymentMethod(paymentMethod);
  }

  function setStateInLocalStorage(data: unknown, localstorageName: string) {
    const stateJSON = JSON.stringify(data);

    localStorage.setItem(localstorageName, stateJSON);
  }

  const addToCart = useCallback(async (coffee: CoffeeType) => {
    setCart((state: CoffeeType[]) => {
      const existingCoffee = state.find((item) => item.id === coffee.id);
      if (existingCoffee) {
        const data = state.map((item) => {
          const data =
            item.id === coffee.id
              ? { ...item, quantity: item.quantity + 1 }
              : item;

          return data;
        });

        setStateInLocalStorage(data, "@coffee-delivery:cart-1.0.0");
        return data;
      } else {
        const data = [...state, { ...coffee, quantity: 1 }];
        setStateInLocalStorage(data, "@coffee-delivery:cart-1.0.0");
        return data;
      }
    });
    setTotalItems((state) => state + 1);
  }, []);

  const removeFromCart = useCallback(async (coffee: CoffeeType) => {
    setCart((state: CoffeeType[]) => {
      const existingCoffee = state.find((item) => item.id === coffee.id);
      if (existingCoffee) {
        if (existingCoffee.quantity > 1) {
          const data = state.map((item) =>
            item.id === coffee.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );

          setStateInLocalStorage(data, "@coffee-delivery:cart-1.0.0");
          return data;
        } else {
          const data = state.filter((item) => item.id !== coffee.id);

          setStateInLocalStorage(data, "@coffee-delivery:cart-1.0.0");
          return data;
        }
      } else {
        setStateInLocalStorage(state, "@coffee-delivery:cart-1.0.0");
        return state;
      }
    });
    setTotalItems((state) => state - 1);
  }, []);

  const removeItemFromCart = useCallback(async (id: string) => {
    setCart((state: CoffeeType[]) => {
      const existingCoffee = state.find((item) => item.id === id);
      
      if (existingCoffee) {
        setTotalItems((state) => state - existingCoffee.quantity);
        const data = state.filter((item) => item.id !== id);

        setStateInLocalStorage(data, "@coffee-delivery:cart-1.0.0");
        return data;
      } else {
        setStateInLocalStorage(state, "@coffee-delivery:cart-1.0.0");
        return state;
      }
    });
  }, []);

  console.log("cart", cart);

  return (
    <CoffeeContext.Provider
      value={{
        address,
        insertAddress,
        selectPaymentMethod,
        paymentMethod,
        addToCart,
        removeFromCart,
        cart,
        coffees: coffeeList,
        removeItemFromCart,
        totalItems
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
}
