import React from 'react'

const Button = () => {
  return (
    <div className="flex space-x-6 flex-wrap">
      <div  className='rounded-lg px-4 text-white font-semibold mt-4 mb-4 bg-amber-500 hover:bg-orange-700 w-40 h-11 text-xl'>Todos</div>  
      <div  className='rounded-lg px-4 text-white font-semibold mt-4 mb-4 bg-amber-500 hover:bg-orange-700 w-40 h-11 text-xl'>Renovables</div>
      <div className='rounded-lg px-4 text-white font-semibold mt-4 mb-4 bg-amber-500 hover:bg-orange-700 w-40 h-11 text-xl'>Iluminacion</div>
      <div  className='rounded-lg px-4 text-white font-semibold mt-4 mb-4 bg-amber-500 hover:bg-orange-700 w-40 h-11 text-xl'>Industrial</div>
      <div className='rounded-lg px-4 text-white font-semibold mt-4 mb-4 bg-amber-500 hover:bg-orange-700 w-40 h-11 text-xl'>Alm. Energia</div>
    </div>
  )
}

export default Button