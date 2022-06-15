import React from 'react'
import { CartContainer } from './ShopingCart'
import { useContext } from 'react'
import Payment from './Payment'


const PaymentMap = () => {
    const {cart} = useContext(CartContainer)
   
  return (
    <div>
         {cart.map((item, index) => (
              <Payment
                key={index}
                data={item}
              />
            ))}
    </div>
  )
}

export default PaymentMap