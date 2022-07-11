import React, { useContext } from 'react'
import { CartContainer } from '../Cart/ShopingCart'
import ProductsList from './ProductsList'

const AllMap = () => {
    const {products} = useContext(CartContainer)
    const productos = products.filter(product => product.id < 15)
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

export default AllMap