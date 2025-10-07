import carritoI from '../images/carrito-de-compras.png'

export const NavBar = () => {
    return (

        <nav className='font-bold flex items-center justify-center gap-4'>

            <a className='hover:bg-gray-500 p-2 rounded-xl' href="">Inicio</a>
            <a className='hover:bg-gray-500 p-2 rounded-xl' href="">Ofertas</a>
            <a className='hover:bg-gray-500 p-2 rounded-xl' href="">Nueva Moda</a>

            <div className='w-10'>
                <img className='' src={carritoI} alt="carrito.png" />
            </div>
        </nav>


    )
}
