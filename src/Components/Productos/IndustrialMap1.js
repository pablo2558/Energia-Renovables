import React, { useContext } from 'react'
import { CartContainer } from '../Cart/ShopingCart'
import ProductsList from './ProductsList'

const IndustrialMap1 = () => {
    const {products} = useContext(CartContainer)
    const industrial = products.filter((product) => {
        return product.id > 18 && product.id < 38
    })
  return (
    <div className='mt-4'>
      <div className='flex justify-evenly flex-wrap'>
        {industrial.map((product) => (
          <ProductsList key={product.id} data={product} />
        ))}
      </div>
    </div>
  )
}

export default IndustrialMap1