import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'

export function AppLayout() {
  return (
    <div className="max-w-[1120px] flex min-h-screen flex-col antialiased m-auto px-6">
      <Header />

      <div className="flex flex-1 flex-col pt-6">
        <Outlet />
      </div>
    </div>
  )
}
