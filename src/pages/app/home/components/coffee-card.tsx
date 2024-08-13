import { ShoppingCart } from "lucide-react";
import { QuantityBtn } from "../../../../components/quantity-btn";
import type { CoffeeType } from "../../../../types";
import { Link } from "react-router-dom";

interface CoffeeCardProps {
  coffee: CoffeeType;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { name, description, price, tags, src } = coffee;

  return (
    <div
      className="w-[256px] bg-base-card px-6 pb-5 flex flex-col items-center 
          rounded-tr-3xl rounded-bl-3xl rounded-t-lg rounded-b-lg"
    >
      <img className="mt-[-20px]" src={src} alt="" />
      <div className="flex gap-1">
        {tags.map((tag) => (
          <div
            key={tag}
            className="bg-yellow-light text-yellow-dark px-2 rounded-full mt-3 mb-4"
          >
            <span className="text-tag font-bold">{tag}</span>
          </div>
        ))}
      </div>
      <span className="font-bold text-base-subtitle text-title-sm mb-2">
        {name}
      </span>
      <span className="text-base-label text-sm text-center">{description}</span>
      <div className="mt-[33px] flex w-full justify-between items-center">
        <div>
          <span className="text-base-text text-title-sm font-extrabold">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(price / 100)}
          </span>
        </div>
        <div className="flex gap-2 h-[38px]">
          <QuantityBtn coffee={coffee} />

          <Link to="/checkout">
            <button className="w-[38px] h-[38px] bg-purple-dark flex items-center justify-center rounded-lg">
              <ShoppingCart size={22} className="text-base-white" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
