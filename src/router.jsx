import {
    createBrowserRouter
}
    from 'react-router'
import ProductoPage from './pages/ProductosPage'
import HomePage from './pages/HomePage'
import HeaderLayout from './layouts/HeaderLayout'
import NuevaModaPage from './pages/NuevaModaPage'
import ProductInfo from './pages/ProductInfo'
import SearchProduct from './pages/SearchProduct'

const router = createBrowserRouter([
    {
        // Layotu del ecommerce
        path: "/",
        element: <HeaderLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "ofertas",
                element: <ProductoPage />
            },
            {
                path: "nueva-moda",
                element: <NuevaModaPage />
            },
            {
                path: "info-producto/:id",
                element: <ProductInfo />
            },
            {
                path: "search-producto/:id",
                element: <SearchProduct />
            }
        ]
    }
])

export default router