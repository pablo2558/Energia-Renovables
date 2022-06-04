import React from 'react'

const CartItems = ({data, addToCart, deleteFromCart}) => {
  const {title, price, quantity} = data
  return (
    <div className="">
      <table className="w-full table-fixed">
        <tr>
          <th className=" border-y-4 text-black w-1/2 text-left ">Item</th>
          <th className=" border-y-4 text-black text-left">Precio</th>
          <th className=" border-y-4 text-black text-left">Total</th>
        </tr>
        <tr>
          <td className=" border-y-4 text-black">
            <h4> {title} </h4>
          </td>
          <td className=" border-y-4 text-black w-1/2">
            <h5>
              ${price}.00 x {quantity}
            </h5>
          </td>
          <td className=" border-y-4 text-black w-1/2">
            <h5> ${price * quantity}.00 </h5>
          </td>
        </tr>
        <button
          onClick={() => deleteFromCart(data)}
          className="border border-white rounded-lg px-4 text-white font-semibold mt-6 mb-6 bg-amber-500 hover:bg-orange-700 "
        >
          Eliminar uno
        </button>
        <button
          onClick={() => deleteFromCart(data, true)}
          className="border border-white rounded-lg px-4 text-white font-semibold mt-6 mb-6 bg-amber-500 hover:bg-orange-700"
        >
          Eliminar todos
        </button>
        <button onClick={() => addToCart(data)}
         className='border border-white rounded-lg px-4 text-white font-semibold mt-6 mb-6 bg-amber-500 hover:bg-orange-700'>
          Agregar Item 
        </button>
      </table>
    </div>
  );
}

export default CartItems
 
