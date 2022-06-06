import React from 'react'
import { Link } from 'react-router-dom'

const ProductsList = ({data}) => {
    const {title, image, price} = data
  return (
    <div className="mt-10 w-64 h-full text-center">
      <figure className="rounded-lg border-slate-50 border-4 p-3 ">
        <img src={image} alt="imagen" className='h-full'/>
        <div className="text-center text-2xl text-sky-700"> {title} </div>
        <div> ${price}.00 </div>
        <Link to="Informacion" className='rounded-lg px-4 text-white font-semibold mt-4 mb-4 bg-amber-500 hover:bg-orange-700'>Mas Informacion</Link>        
      </figure>
    </div>
  )
}

export default ProductsList