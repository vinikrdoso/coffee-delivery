import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { Home } from './pages/app/home'
import { Checkout } from './pages/app/checkout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    // errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
    ],
  },
])
