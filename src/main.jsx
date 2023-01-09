import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from './Pages/ProductsPage/Products';
import Cart from './Pages/CartPage/Cart';
import ProductProvider from './Context/product-context';
import { DarkModeProvider } from './Context/theme-context';
import ProductPage from './Pages/ProductPage/ProductPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/product/:productId",
    element: <ProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <DarkModeProvider>
        <RouterProvider router={router} />
      </DarkModeProvider>
    </ProductProvider>
  </React.StrictMode>,
)
