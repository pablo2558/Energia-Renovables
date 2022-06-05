import React from 'react'
import { useContext } from 'react';
import { CartContainer } from './ShopingCart';
import Products from './Products'

const StorageMap = () => {
    const {products, addToCart} = useContext(CartContainer)
    const storage = products.filter(product => product.id > 35)
  return (
    <div className='mt-4'>
    <div className='flex justify-evenly flex-wrap'>
      {storage.map((product) => (
        <Products key={product.id} data={product} addToCart={addToCart} />
      ))}
    </div>
  </div>
  );
}

export default StorageMap