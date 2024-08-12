import { ShoppingCart } from "lucide-react";

import test from "../../../assets/coffees/expresso-tradicional.png";
import { QuantityBtn } from "../../../components/quantity-btn";

export function CoffeeCard() {
  return (
    <div
      className="w-[256px] bg-base-card px-6 pb-5 flex flex-col items-center 
          rounded-tr-3xl rounded-bl-3xl rounded-t-lg rounded-b-lg"
    >
      <img className="mt-[-20px]" src={test} alt="" />
      <div>
        <div className="bg-yellow-light text-yellow-dark px-2 rounded-full mt-3 mb-4">
          <span className="text-tag font-bold">TRADICIONAL</span>
        </div>
      </div>
      <span className="font-bold text-base-subtitle text-title-sm mb-2">
        Nome do café
      </span>
      <span className="text-base-label text-sm text-center">
        O tradicional café feito com água quente e grãos moídos
      </span>
      <div className="mt-[33px] flex w-full justify-between items-center">
        <div>
          <span className="text-base-text text-sm">R$ </span>
          <span className="text-base-text text-title-md font-extrabold">
            9,90
          </span>
        </div>
        <div className="flex gap-2 h-[38px]">
          <QuantityBtn />

          <button className="w-[38px] h-[38px] bg-purple-dark flex items-center justify-center rounded-lg">
            <ShoppingCart size={22} className="text-base-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
