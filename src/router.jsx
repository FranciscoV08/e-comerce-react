import {
    createBrowserRouter
}
    from 'react-router'
import HomePage from './pages/HomePage'
import HeaderLayout from './layouts/HeaderLayout'
import ProductInfo from './pages/ProductInfo'
import SearchProduct from './pages/SearchProduct'
import ProductFilter from './pages/ProductFilter'
import CarritoPage from './pages/CarritoPage'

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
                path: "carrito-products",
                element: <CarritoPage />
            },
            {
                path: "info-producto/:id",
                element: <ProductInfo />
            },
            {
                path: "search-producto/:id",
                element: <SearchProduct />
            },
            {
                path: "product-filter/:id",
                element: <ProductFilter />
            },
        ]
    }
])

export default router