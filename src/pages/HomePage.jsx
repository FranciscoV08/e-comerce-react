import { useEffect, useState } from "react"
import CartWidget from "../components/CartWidget"


const HomePage = () => {

  const [productos, setProductos] = useState()

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json()

        setProductos(data.products)
        // console.log(data.products)

      } catch (error) {
        console.error("Hubo un error en la llamada a la API", error)
      }
    }

    fetchProductos()
  }, [])

  return (


    <>
      <main>
        <h1 className='text-center font-bold text-white text-2xl'>Bienvenido a tu tienda de moda favorita</h1>
        <section className="flex flex-wrap items-center justify-center">

          {
            productos ? (
              productos.map(product => (
                <CartWidget key={product.id} producto={product} />
              ))
            ) : (
              "No existen productos"
            )
          }
        </section>
      </main>
    </>
  )
}

export default HomePage 