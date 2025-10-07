import {NavBar} from './NavBar'

export const Header = () => {
  return (
    <div className='text-white flex items-center justify-between my-5'>
      <div>
        <h2 className="text-3xl font-">Vicencio</h2>
        <p className='font-light'>Creado por francisco Villavicencio para: <span className='text-sky-500 font-bold'>CODERHOUSE:React</span></p>
      </div>
      <div>
        <NavBar />
      </div>
    </div>
  )
}
