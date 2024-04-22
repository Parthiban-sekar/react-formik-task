import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppRoutes from './components/utils/AppRoutes';

const App = () => {
  const router = createBrowserRouter(AppRoutes)
  return (
    <><RouterProvider router={router} /></>
  )
}

export default App