import React, { useContext } from 'react'
import { CartContainer } from '../Cart/ShopingCart'
import ProductsList from './ProductsList'

const StorageMap1 = () => {
    const {products} = useContext(CartContainer)
    const storage = products.filter(product => product.id > 35)

  return (
        <div className='mt-4'>
        <div className='flex justify-evenly flex-wrap'>
          {storage.map((product) => (
            <ProductsList key={product.id} data={product} />
          ))}
        </div>
      </div>
      )
}

export default StorageMap1