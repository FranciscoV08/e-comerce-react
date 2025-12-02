import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { useProdContext } from "../context/PorductContext"
import CartWidget from "../components/CartWidget"

const ProductFilter = () => {
  const { id } = useParams()
  const { obtenerProductos, obtenerProdFilter, productos } = useProdContext()
  const [prodFilter, setProdFilter] = useState()

  useEffect(() => {
    const dataFilter = obtenerProdFilter(id)
    if (dataFilter) {
      console.log(dataFilter)
      setProdFilter(dataFilter)
    }

  }, [productos, id])

  return (
    <section className="flex flex-wrap items-center justify-center">
      {

        prodFilter ? (
          prodFilter.map(product => (
            <CartWidget key={product.id} producto={product} />
          ))
        ) : (
          "Cargando productos..."
        )
      }
    </section>
  )
}

export default ProductFilter