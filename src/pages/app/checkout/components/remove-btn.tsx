import { Trash2 } from "lucide-react";
import { useContextSelector } from "use-context-selector";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";

interface CoffeeCardProps {
  id: string;
}

export function RemoveBtn({ id }: CoffeeCardProps) {
  const removeItemFromCart = useContextSelector(
    CoffeeContext,
    (ctx) => ctx.removeItemFromCart
  );

  function handleRemoveFromCart(id: string) {
    removeItemFromCart(id);
  }

  return (
      <button
        onClick={() => handleRemoveFromCart(id)}
        className="h-[38px] px-2 text-purple-base bg-base-button rounded-md flex items-center gap-1"
      >
        <Trash2 size={18} />
        <span className="text-button-md text-base-text">REMOVER</span>
      </button>
  );
}
