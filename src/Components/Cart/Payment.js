
import React from 'react'


const Payment = ({data}) => {
  const {title, quantity, price} = data

 return (
    <div className="w-full flex items-center">
      <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
        <img
          src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
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