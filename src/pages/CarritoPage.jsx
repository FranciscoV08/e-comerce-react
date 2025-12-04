import { CardCarrito } from "../components/CardCarrito";
import { useProdContext } from "../context/PorductContext"
import { Alert } from "flowbite-react";
import { toast } from "react-toastify";



const CarritoPage = () => {
    const { limpiarCarrito, calcularSubtotal, carrito } = useProdContext();

    const subTotal = calcularSubtotal();
    const subTotalIVA = (subTotal * 0.21);

    const total = (subTotal + subTotalIVA).toFixed(2);

    const enviarDatos = () => {

        toast.success("Compra realizada con exito.!!");
        limpiarCarrito()

    }

    return (
        <div className="overflow-x-auto" >
            <div className="  text-black h-screen pt-20">
                <h1 className=" mb-10 text-center text-2xl font-bold">Cart Items</h1>

                {carrito.length ? (
                    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                        <div className="rounded-lg md:w-2/3">
                            {
                                carrito.map(prod => (
                                    <CardCarrito producto={prod} key={prod.id} />
                                ))
                            }
                        </div>


                        {/* <!-- Sub total --> */}
                        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                            <div className="mb-2 flex justify-between">
                                <p className="text-gray-700">Subtotal</p>
                                <p className="text-gray-700">${subTotal}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-700">IVA</p>
                                <p className="text-gray-700">${subTotalIVA.toFixed(2)}</p>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between">
                                <p className="text-lg font-bold">Total</p>
                                <div className="">
                                    <p className="mb-1 text-lg font-bold">${total} USD</p>
                                    <p className="text-sm text-gray-700">Incluido el IVA del 21%</p>
                                </div>
                            </div>
                            <button onClick={enviarDatos} className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Comprar..!</button>
                        </div>
                    </div>
                ) : (

                    <Alert className="shadow-x py-5" color="info">
                        <span className="font-bold">Agregá productos...</span> Podes obtener envío gratis, sumá productos.!
                    </Alert>
                )
                }
            </div>
        </div >
    )
} 

export default CarritoPage