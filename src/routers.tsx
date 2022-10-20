import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { ErrorPage } from './pages/error'
import { HomePage } from './pages/home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
