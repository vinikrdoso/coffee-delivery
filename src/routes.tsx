import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { Home } from './pages/app/home'

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
    ],
  },
])
