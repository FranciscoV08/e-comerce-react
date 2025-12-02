import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { useProdContext } from "../context/PorductContext"

const ProductInfo = () => {

    //ID del producto seleccionado
    const { id } = useParams()

    const [productoId, setProductoId] = useState(null)

    const {productos, obtenerProductoId} = useProdContext();

    //Cuando carga la pagina filtra de productos y manda al state el producto
    useEffect(() => {
        const data = obtenerProductoId(id)
        setProductoId(data)

    }, [productos, id])

    return (
        productoId ? (
            <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div class="flex flex-col items-center md:flex-row">
                    <div class="md:w-1/3 p-4 relative">
                        <div class=" ">
                            <img 
                            src={productoId.images[0]} 
                            alt="" 
                            class="w-full h-auto object-cover rounded-lg" />
                            <button class="absolute top-2 right-2 text-red-500 hover:text-red-600 focus:outline-none">
                                <svg class="w-6 h-6 absolute top-0 right-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="md:w-2/3 p-6">
                        <h1 class="text-2xl font-bold text-gray-800 mb-2">{productoId.title}</h1>
                        <p class="text-sm text-gray-600 mb-4">{productoId.description}</p>

                        <div class="flex items-center mb-4">
                            <span class="bg-green-500 text-white text-sm font-semibold px-2.5 py-0.5 rounded">{productoId.rating} ★</span>
                        </div>

                        <ul class="text-sm text-gray-700 mb-6">
                            <li class="flex items-center mb-1"><svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>{productoId.availabilityStatus}</li>
                            <li class="flex items-center mb-1"><svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>{productoId.warrantyInformation}</li>
                        </ul>

                        <div class="flex items-center justify-between mb-4">
                            <div>
                                <span class="text-3xl font-bold text-gray-900">${productoId.price}</span>
                                {/* <span class="ml-2 text-sm font-medium text-gray-500 line-through">${productoId.discountPercentage}</span> */}
                            </div>
                            <span class="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">{productoId.discountPercentage}%</span>
                        </div>

                        <p class="text-green-600 text-sm font-semibold mb-4">Free Delivery</p>

                        <div class="flex space-x-4">
                            <button class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
                                Buy Now
                            </button>
                            <button class="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ) : ("Cargando datos")
    )
}

export default ProductInfo