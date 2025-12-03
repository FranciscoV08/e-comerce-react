import { CardCarrito } from "../components/CardCarrito";
import { ToggleToast } from "../components/ToggleToast";
import { useProdContext } from "../context/PorductContext"



const CarritoPage = () => {


    const { calcularTotalConIVA,calcularSubtotal,carrito } = useProdContext();

    const subTotal = calcularSubtotal();
    const subTotalIVA = (subTotal * 0.21);

    const total = (subTotal + subTotalIVA).toFixed(2);

    return (
        carrito ? (
            <div className="overflow-x-auto" >
                <div class=" text-black h-screen pt-20">
                    <h1 class=" mb-10 text-center text-2xl font-bold">Cart Items</h1>
                    <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                        <div class="rounded-lg md:w-2/3">
                            {
                                carrito.map( prod => (
                                    <CardCarrito producto={prod} key={prod.id}/>
                                ))
                            }
                        </div>


                        {/* <!-- Sub total --> */}
                        <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                            <div class="mb-2 flex justify-between">
                                <p class="text-gray-700">Subtotal</p>
                                <p class="text-gray-700">${subTotal}</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="text-gray-700">IVA</p>
                                <p class="text-gray-700">${subTotalIVA.toFixed(2)}</p>
                            </div>
                            <hr class="my-4" />
                            <div class="flex justify-between">
                                <p class="text-lg font-bold">Total</p>
                                <div class="">
                                    <p class="mb-1 text-lg font-bold">${total} USD</p>
                                    <p class="text-sm text-gray-700">Incluido el IVA del 21%</p>
                                </div>
                            </div>
                            <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Comprar..!</button>
                        </div>
                    </div>
                </div>
            </div >
        ) : (
            <h1>...</h1>
        )
    )
}

export default CarritoPage