import React from 'react'

const Products = ({data, addToCart}) => {
  const {title, image, price} = data
  return (
    <div className="flex justify-center mt-10">
      <div className="rounded-lg shadow-lg bg-white w-64">
        <div data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img className="rounded-t-md" src={image} alt="" />
        </div>
        <div className="p-6">
          <h5 className="text-sky-700 text-xl font-medium sm-2"> {title} </h5>
          <div> ${price}.00 </div>
          <button
            onClick={() => addToCart(data)}
            className="rounded-lg px-4 text-white font-semibold mt-4 mb-4 bg-amber-500 hover:bg-orange-700"
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products