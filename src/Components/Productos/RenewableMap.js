import React, { useContext } from 'react'
import { CartContainer } from '../Cart/ShopingCart'
import ProductsList from './ProductsList'

const RenewableMap = () => {
    const {products} = useContext(CartContainer)
    const productos = products.filter((product) => {
        return product.id > 14 && product.id < 18
    })
  return (
    <div className='mt-4'>
      <div className='flex justify-evenly flex-wrap'>
        {productos.map((product) => (
              <ProductsList key={product.id} data={product} />
        ))}
      </div>
    </div>
  )
}

export default RenewableMap