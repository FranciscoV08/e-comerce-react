import { useEffect, useState } from "react"
import { useParams } from "react-router"
import CartWidget from "../components/CartWidget"


const SearchProduct = () => {


    const [productoSearch, setProductoSearch] = useState()
    const { id } = useParams()

    useEffect(() => {
        const fetchProducto = async () => {
            try {

                const res = await fetch(`https://dummyjson.com/products/search?q=${id}`)
                const data = await res.json()

                setProductoSearch(data.products)
            } catch (error) {
                console.error("Hubo un error en la llamada a la API", error)
            }
        }

        fetchProducto()
    }, [id])


    return (
        <>

         <section className="flex flex-wrap items-center justify-center">
          {
            productoSearch ? (
              productoSearch.map(product => (
                <CartWidget key={product.id} producto={product} />
              ))
            ) : (
              "No existen productos"
            )
          }
        </section>
        </>

    )
}

export default SearchProduct