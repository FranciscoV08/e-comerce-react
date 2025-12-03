import { Link, useNavigate } from 'react-router'
import { NavBar } from './NavBar'
import { useState } from 'react'

import carritoI from '../images/carrito-de-compras.png'


export const Header = () => {

  const [search, setSearch] = useState()

  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`search-producto/${search}`)
  }

  return (
    <div className='bg-green-700 text-white mb-5 rounded-lg py-5'>
      <section className='flex items-center justify-center my-5'>
        <div className='w-1/4'>
          <h2 className="text-3xl font-">Vicencio</h2>
        </div>
        <div className='w-2/4'>
          <form onSubmit={handleSearch}>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buscar</button>
            </div>
          </form>
        </div>
        <Link to={"/carrito-products"}>
          <div className='mx-5'>
            <img className='w-10' src={carritoI} alt="carrito.png" />
          </div>
        </Link>
      </section>

      <div>
        <NavBar />
      </div>
      
    </div>
  )
}
