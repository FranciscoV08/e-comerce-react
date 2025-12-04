import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { useProdContext } from "../context/PorductContext"
import { Spinner } from "flowbite-react";
import { toast } from "react-toastify";

const ProductInfo = () => {

    //ID del producto seleccionado
    const { id } = useParams()

    const [productoId, setProductoId] = useState(null)

    const { carrito,agregarAlCarrito, productos, obtenerProductoId } = useProdContext();

    const agregarCarrito = () => {
        const prodObj = { 
            id: productoId.id, 
            title: productoId.title,
            price: productoId.price,
            image: productoId.images[0],
            quantity: 1 
        }
        
        toast.success("Producto agregado al carrito!");
        agregarAlCarrito(prodObj)
        
    }


    //Cuando carga la pagina filtra de productos y manda al state el producto
    useEffect(() => {
        const data = obtenerProductoId(id)
        setProductoId(data)

    }, [productos, id])


    return (
        productoId ? (
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="md:w-1/3 p-4 relative">
                        <div className=" ">
                            <img
                                src={productoId.images[0]}
                                alt=""
                                className="w-full h-auto object-cover rounded-lg" />
                        </div>
                    </div>

                    <div className="md:w-2/3 p-6">
                        <h1 className="text-2xl font-bold text-gray-800 mb-2">{productoId.title}</h1>
                        <p className="text-sm text-gray-600 mb-4">{productoId.description}</p>

                        <div className="flex items-center mb-4">
                            <span className="bg-green-500 text-white text-sm font-semibold px-2.5 py-0.5 rounded">{productoId.rating} ★</span>
                        </div>

                        <ul className="text-sm text-gray-700 mb-6">
                            <li className="flex items-center mb-1"><svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>{productoId.availabilityStatus}</li>
                            <li className="flex items-center mb-1"><svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>{productoId.warrantyInformation}</li>
                        </ul>

                        <div className="flex items-center justify-between mb-4">
                            <div>
                                <span className="text-3xl font-bold text-gray-900">${productoId.price}</span>
                            </div>
                            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2.5 py-0.5 rounded">{productoId.discountPercentage}%</span>
                        </div>

                        <p className="text-green-600 text-sm font-semibold mb-4">Free Delivery</p>

                        <div className="flex space-x-4">

                            <button onClick={ agregarCarrito } className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
                                Agregar al carrito
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ) : (

            <div className="text-center">
                <Spinner color="success" aria-label="Success spinner example" size="xl" />
            </div>

        )
    )
}

export default ProductInfo