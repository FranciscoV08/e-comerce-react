import { Link } from 'react-router'
import carritoI from '../images/carrito-de-compras.png'

export const NavBar = () => {
    return (

        <nav className='font-bold flex items-center justify-center gap-4'>

            <Link className='hover:bg-gray-500 p-2 rounded-xl' to="/">Inicio</Link>
            <Link className='hover:bg-gray-500 p-2 rounded-xl' to="/ofertas">Ofertas</Link>
            <Link className='hover:bg-gray-500 p-2 rounded-xl' to="/nueva-moda">Nueva Moda</Link>

            <div className='w-10'>
                <img className='' src={carritoI} alt="carrito.png" />
            </div>
        </nav>


    )
}
