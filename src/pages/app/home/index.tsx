import { Coffee, Package, ShoppingCart, Timer } from "lucide-react";

import heroCoffee from "../../../assets/coffee-hero.png";
import { CoffeeCard } from "./components/coffee-card";
import { useContextSelector } from "use-context-selector";
import { CoffeeContext } from "../../../contexts/CoffeeContext";

export function Home() {
  const coffees = useContextSelector(CoffeeContext, ctx => ctx.coffees)
  
  return (
    <div className="">
      <div className="flex gap-14 h-[544px] items-center">
        <div className="w-full md:max-w-[60%]">
          <h1 className="text-base-title text-title-xl mb-4 font-bold">
            Encontre o café perfeito para qualquer hora do dia
          </h1>

          <span className="text-base-subtitle text-lg">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>

          <div className="mt-16 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <div className="rounded-full h-8 w-8 flex items-center justify-center bg-yellow-dark">
                <ShoppingCart size={16} className="text-base-white" />
              </div>
              <span className="text-base-text">Compra simples e segura</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full h-8 w-8 flex items-center justify-center bg-base-text">
                <Package size={16} className="text-base-white" />
              </div>
              <span className="text-base-text">
                Embalagem mantém o café intacto
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full h-8 w-8 flex items-center justify-center bg-yellow-base">
                <Timer size={16} className="text-base-white" />
              </div>
              <span className="text-base-text">Entrega rápida e rastreada</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full h-8 w-8 flex items-center justify-center bg-purple-base">
                <Coffee size={16} className="text-base-white" />
              </div>
              <span className="text-base-text">
                O café chega fresquinho até você
              </span>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <img src={heroCoffee} />
        </div>
      </div>

      <div>
        <h2 className="mb-[54px] text-base-subtitle font-bold text-title-lg">
          Nossos cafés
        </h2>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-8 md:gap-y-10 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-10">
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.name} coffee={coffee} />
          ))}
        </div>
      </div>
    </div>
  );
}
