import {
    createBrowserRouter
}
    from 'react-router'
import HomePage from './pages/HomePage'
import HeaderLayout from './layouts/HeaderLayout'
import ProductInfo from './pages/ProductInfo'
import SearchProduct from './pages/SearchProduct'
import ProductFilter from './pages/ProductFilter'

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
            }
        ]
    }
])

export default router