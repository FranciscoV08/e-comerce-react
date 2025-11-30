import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from 'react-router'

import './index.css'
import router from './router.jsx'
import { ProductContextProvider } from './context/PorductContext.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <ProductContextProvider>
      <RouterProvider router={router}/>
    </ProductContextProvider>
  </StrictMode>
)
