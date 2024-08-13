import { Minus, Plus } from "lucide-react";
import type { CoffeeType } from "../types";
import { useContextSelector } from "use-context-selector";
import { CoffeeContext } from "../contexts/CoffeeContext";
import { useState } from "react";

interface CoffeeCardProps {
  coffee: CoffeeType;
}

export function QuantityBtn({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(coffee?.quantity ?? 0)
  
  const addToCart = useContextSelector(CoffeeContext, (ctx) => ctx.addToCart);
  const removeFromCart = useContextSelector(
    CoffeeContext,
    (ctx) => ctx.removeFromCart
  );

  function handleAddToCart(coffee: CoffeeType) {
    setQuantity(state => state += 1)
    addToCart(coffee)
  }
  
  function handleRemoveFromCart(coffee: CoffeeType) {
    setQuantity(state => state -= 1)
    removeFromCart(coffee)
  }

  return (
    <div className="h-[38px] w-[72px] bg-base-button rounded-md flex items-center justify-evenly">
      <button
        onClick={() => handleRemoveFromCart(coffee)}
        className="text-purple-base"
      >
        <Minus size={18} />
      </button>
      <span className="text-base-title">{quantity}</span>
      <button
        onClick={() => handleAddToCart(coffee)}
        className="text-purple-base"
      >
        <Plus size={18} />
      </button>
    </div>
  );
}
