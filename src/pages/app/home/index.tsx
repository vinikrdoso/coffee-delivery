import { ShoppingCart } from "lucide-react";

import heroCoffee from "../../../assets/coffee-hero.png";

export function Home () {
  return (
    <div className="bg-purple-200">
      <div className="flex gap-14">
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>

          <div>
            <div>
              <ShoppingCart />
              <span>Compra simples e segura</span>
            </div>
            <div>
              <ShoppingCart />
              <span>Compra simples e segura</span>
            </div>
            <div>
              <ShoppingCart />
              <span>Compra simples e segura</span>
            </div>
            <div>
              <ShoppingCart />
              <span>Compra simples e segura</span>
            </div>
          </div>
        </div>

        <div><img src={heroCoffee} /></div>
      </div>
    </div>
  )
}