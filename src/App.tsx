import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

export function App() {
  return (
    <div className='bg-base-background'>
      <RouterProvider router={router} />
    </div>
  )
}
