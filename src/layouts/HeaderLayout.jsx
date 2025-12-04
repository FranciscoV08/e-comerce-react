import { Outlet } from "react-router"
import { Header } from "../components/Header"

const HeaderLayout = () => {
    return (
        <>
            <header>
                {/* Mi header de navegador */}
                <Header />
            </header>
            
            <Outlet />
        </>
    )
}

export default HeaderLayout