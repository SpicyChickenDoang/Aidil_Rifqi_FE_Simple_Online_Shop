import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Checkout from './pages/Checkout.jsx'
import Login from './pages/Login.jsx';
import Protect from './components/Protect.jsx'
import Products from './pages/Products.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/checkout",
    element: <Checkout />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/products",
    element:
      (
        <Protect>
          <Products />
        </Protect>
      )
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
