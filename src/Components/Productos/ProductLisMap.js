import React from 'react'
import ProductsList from './ProductsList'
import { useContext } from 'react'
import { CartContainer } from '../Cart/ShopingCart'

const ProductLisMap = () => {
    const {products} = useContext(CartContainer)
  return (
    <div className='mt-4'>
      <div className='flex justify-evenly flex-wrap'>
        {products.map((product) => (
          <ProductsList key={product.id} data={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductLisMap