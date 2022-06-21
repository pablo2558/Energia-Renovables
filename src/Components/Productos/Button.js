import React from 'react'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <div className="flex space-x-6 flex-wrap">
      <Link to="Todos-1" className='rounded-lg px-4 text-white font-semibold mt-4 mb-4 bg-amber-500 hover:bg-orange-700 w-40 h-11 text-xl'>Todos</Link>  
      <Link to="Renovables-1" className='rounded-lg px-4 text-white font-semibold mt-4 mb-4 bg-amber-500 hover:bg-orange-700 w-40 h-11 text-xl'>Renovables</Link>
      <Link to="Iluminacion-1" className='rounded-lg px-4 text-white font-semibold mt-4 mb-4 bg-amber-500 hover:bg-orange-700 w-40 h-11 text-xl'>Iluminacion</Link>
      <Link to="Industrial-1" className='rounded-lg px-4 text-white font-semibold mt-4 mb-4 bg-amber-500 hover:bg-orange-700 w-40 h-11 text-xl'>Industrial</Link>
      <Link to="Almmacenamiento Energia" className='rounded-lg px-4 text-white font-semibold mt-4 mb-4 bg-amber-500 hover:bg-orange-700 w-40 h-11 text-xl'>Alm. Energia</Link>
    </div>
  )
}

export default Button