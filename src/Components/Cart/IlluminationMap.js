import React from 'react'
import Products from './Products'
import { CartContainer } from './ShopingCart'
import { useContext } from 'react'

const IlluminationMap = () => {
    const {products, addToCart} = useContext(CartContainer)
    const ilumination = products.filter((product) => {
        return product.id > 14 && product.id < 18
    })
  return (
    <div className='mt-4'>
      <div className='flex justify-evenly flex-wrap'>
        {ilumination.map((product) => (
          <Products key={product.id} data={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  )
}

export default IlluminationMap