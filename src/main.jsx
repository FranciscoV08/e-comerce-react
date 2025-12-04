import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from 'react-router'

import './index.css'
import router from './router.jsx'
import { ProductContextProvider } from './context/PorductContext.jsx'
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <ProductContextProvider>
       <ToastContainer />
      <RouterProvider router={router}/>
    </ProductContextProvider>
  </StrictMode>
)
