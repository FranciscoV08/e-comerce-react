import React from 'react'


const ProductosPage = () => {

  const items =  ['Manzana', 'Banana', 'Cereza'];

  return (
    <div>
      {
        items.map( item => (
          
          <h2 className='text-red-400 hover:text-2xl transitio'>{item}</h2>
      ))
      }
    </div>
  )
}

export default ProductosPage