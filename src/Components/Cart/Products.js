import React from 'react'

const Products = () => {
  return (
    <div className="mt-10 w-64 text-center">
      <figure className="rounded-lg border-slate-50 border-4 p-3">
        <img src={image} alt="imagen" />
        <div className="text-center text-2xl text-sky-700"> {titulo} </div>
        <div> {texto} </div>
        <button className='rounded-lg px-4 text-white font-semibold mt-4 mb-4 bg-amber-500 hover:bg-orange-700'>
            Agregar al Carrito
        </button>
      </figure>
    </div>
  );
}

export default Products