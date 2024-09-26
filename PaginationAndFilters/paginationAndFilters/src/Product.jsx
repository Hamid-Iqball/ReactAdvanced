import React from 'react'

function Product({product}) {
  return (
    <>
    <div className='border border-orange-800 max-w-[70%] mx-auto p-2 my-2'>
        <div className='flex justify-between items-center'>
    <h2 className='text-xl font-semibold '>{product.title}</h2>
     <span className='font-bold border border-orange-800 px-1'>{product.id}</span>
        </div>
    <p>{product.description}</p>
    <strong className='text-orange-700'>Price: ${product.price}</strong>
    </div>

    </>
  )
}

export default Product