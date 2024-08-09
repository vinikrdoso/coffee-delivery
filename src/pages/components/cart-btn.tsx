import { ShoppingCart } from "lucide-react";

export function CartBtn() {
  return (
    <div className="relative">
    <span className="absolute -top-2 -right-2 w-5 h-5 bg-yellow-dark text-base-white text-xs flex items-center justify-center rounded-full">2</span>
      <button className="w-[38px] h-[38px] rounded-lg bg-yellow-light flex items-center justify-center">
        <ShoppingCart className="text-yellow-dark" />
      </button>
    </div>
  );
}
