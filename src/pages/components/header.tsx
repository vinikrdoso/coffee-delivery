// import { Home, Pizza, UtensilsCrossed } from 'lucide-react'

import { MapPin } from 'lucide-react'
import logo from '../../assets/logo.svg'
import { CartBtn } from './cart-btn'

export function Header() {
  return (
    <div>
      <div className="h-16 pt-[32px] flex items-center justify-between">
        <img src={logo} alt="Logo" className="h-8" />


        <div className="flex items-center gap-3 ">
          <div className='flex gap-1 items-center p-2 bg-purple-light h-[38px] rounded-lg'>
            <MapPin className='text-purple-base' />
            <span className='text-purple-dark'>Porto Alegre, RS</span>
          </div>
          <CartBtn />
        </div>
      </div>
    </div>
  )
}
