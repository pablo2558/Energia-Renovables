import React from 'react'


const Payment = ({data}) => {
  const {title, quantity, price, image} = data

 return (
    <div className="w-full flex items-center">
      <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
        <img
          src={image}
          alt=""
        />
      </div>
      <div className="flex-grow pl-3">
        <h6 className="font-semibold uppercase text-gray-600"> {title} </h6>
        <p className="text-gray-400"> X {quantity} </p>
      </div>
      <div>
        <span className="font-semibold text-gray-600 text-xl">
          {" "}
          ${price * quantity}{" "}
        </span>
        <span className="font-semibold text-gray-600 text-sm">.00</span>
      </div>
    </div>
  )
 }

export default Payment