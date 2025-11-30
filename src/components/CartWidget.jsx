import { Link } from "react-router"

const CartWidget = ({ producto }) => {

    return (
        <div className=" flex items-center p-4 w-xs">
            <Link to={`/info-producto/${producto.id}`} className=" max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
            <div >
                <div className="relative">
                    <img
                        src={producto.images[0]}
                        alt="Product"
                        className="w-full h-52 object-cover"
                    />
                </div>

                <div className="p-5 space-y-4 bg-blue-100">
                    <div>
                        <h3 className="text-xl font-light text-gray-900  hover:text-indigo-500">{producto.title}</h3>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="space-y-1">
                            <p className="text-2xl font-bold text-gray-900">${producto.price}</p>
                        </div>

                        <div className="flex items-center gap-1">
                            <div className="text-yellow-400">★★★★</div>
                            <div className="text-gray-300">★</div>
                            <span className="text-sm text-gray-600 ml-1">({producto.stock})</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
        </div>
    )
}

export default CartWidget