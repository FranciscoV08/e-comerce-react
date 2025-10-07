import { Header } from './components/Header'


function App() {

  return (
    <>
      <body className=' bg-gray-700 container m-auto'>
        <header>
          {/* Mi header de navegador */}
          <Header />
        </header>
        <main>
          <h1 className='text-center font-bold text-white text-2xl'>Bienvenido a tu tienda de moda favorita</h1>
        </main>
        <footer>

        </footer>
      </body>
    </>
  )
}

export default App
