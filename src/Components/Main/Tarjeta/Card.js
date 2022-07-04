import React from 'react'

const Tarjeta = ({titulo, image, texto}) => {
  return (
    <div className='mt-10 w-64 text-center'>
        <figure className='rounded-lg border-slate-50 border-4 p-3'>
            <img src={image} alt='imagen'/>
            <div className='text-center text-2xl text-sky-700'> {titulo} </div>
            <div> {texto} </div>
        </figure>
    </div>
  )
}

export default Tarjeta