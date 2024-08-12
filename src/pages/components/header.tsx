// import { Home, Pizza, UtensilsCrossed } from 'lucide-react'

import { MapPin } from "lucide-react";
import logo from "../../assets/logo.svg";
import { CartBtn } from "./cart-btn";
import { Link } from "react-router-dom";
import { useContextSelector } from "use-context-selector";
import { CoffeeContext } from "../../contexts/CoffeeContext";

export function Header() {
  const cartQuantity = useContextSelector(CoffeeContext, (ctx => ctx.cartQuantity))

  return (
    <div>
      <div className="h-16 pt-[32px] flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-8" />
        </Link>

        <div className="flex items-center gap-3 ">
          <div className="flex gap-1 items-center p-2 bg-purple-light h-[38px] rounded-lg">
            <MapPin className="text-purple-base" />
            <span className="text-purple-dark">Porto Alegre, RS</span>
          </div>
          <Link to="/checkout">
            <CartBtn quantity={cartQuantity} />
          </Link>
        </div>
      </div>
    </div>
  );
}
