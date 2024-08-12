import { ShoppingCart } from "lucide-react";

interface CartBtnProps {
  quantity: number;
}

export function CartBtn({ quantity }: CartBtnProps) {
  return (
    <div className="relative">
      {!!quantity && (
        <span className="absolute -top-2 -right-2 w-5 h-5 bg-yellow-dark text-base-white text-xs flex items-center justify-center rounded-full">
          {quantity}
        </span>
      )}
      <button className="w-[38px] h-[38px] rounded-lg bg-yellow-light flex items-center justify-center">
        <ShoppingCart className="text-yellow-dark" />
      </button>
    </div>
  );
}
