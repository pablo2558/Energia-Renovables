import React from 'react'
import { CartContainer } from './ShopingCart'
import { useContext } from 'react'
import Products from './Products'

const IndustrialMap = () => {
    const {products, addToCart} = useContext(CartContainer)
    const industrial = products.filter((product) => {
        return product.id > 18 && product.id < 38
    })
  return (
    <div className='mt-4'>
      <div className='flex justify-evenly flex-wrap'>
        {industrial.map((product) => (
          <Products key={product.id} data={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  )
}

export default IndustrialMap