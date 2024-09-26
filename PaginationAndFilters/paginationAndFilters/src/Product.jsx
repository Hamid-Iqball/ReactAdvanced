import React from 'react'

function Product({product}) {
  return (
    <div className='border border-orange-800 max-w-[70%] mx-auto p-2 my-2'>
    <h2 className='text-xl font-semibold '>{product.title}</h2>
    <p>{product.description}</p>
    </div>
  )
}

export default Product