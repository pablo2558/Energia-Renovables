import React from 'react'

const Button = ({titulo}) => {
  return (
    <div className='rounded-lg px-4 text-white font-semibold mt-4 mb-4 bg-amber-500 hover:bg-orange-700 w-40 h-11 text-xl'> {titulo} </div>
  )
}

export default Button