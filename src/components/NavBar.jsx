import { Link } from 'react-router'
import { Dropdown, DropdownItem } from "flowbite-react";

export const NavBar = () => {
    return (

        <nav className='font-bold flex items-center justify-center gap-4'>

            <Link className='hover:bg-gray-500 p-2 rounded-xl' to="/">Inicio</Link>
            <Link className='hover:bg-gray-500 p-2 rounded-xl' to="/ofertas">Ofertas</Link>
            <Link className='hover:bg-gray-500 p-2 rounded-xl' to="/nueva-moda">Nueva Moda</Link>

            <Dropdown label="Filtros" dismissOnClick={true}>
                <Link to={"/product-filter/groceries"}>
                    <DropdownItem>Comida</DropdownItem>
                </Link>
                <Link to={"/product-filter/fragrances"}>
                    <DropdownItem>Cosmeticos</DropdownItem>
                </Link>
                <Link to={"/product-filter/furniture"}>
                    <DropdownItem>Muebles</DropdownItem>
                </Link>
            </Dropdown>

        </nav>


    )
}
