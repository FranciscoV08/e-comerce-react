
import CartWidget from "../components/CartWidget"
import { useProdContext } from "../context/PorductContext";

const HomePage = () => {

  //Context de las funcionalidades globales
  const { productos } = useProdContext();

  return (
    <>
      <main>
        <div className="text-center text-black">
          <h1 className='text-center font-bold text-2xl'>Bienvenido a tu tienda de moda favorita</h1>
          <p className='font-light'>Creado por francisco Villavicencio para: <span className='text-sky-500 font-bold'>CODERHOUSE:React</span></p>
        </div>
        <section className="flex flex-wrap items-center justify-center">

          {
            productos ? (
              productos.map(product => (
                <CartWidget key={product.id} producto={product} />
              ))
            ) : (
              "Cargando productos..."
            )
          }
        </section>
      </main>
    </>
  )
}

export default HomePage 