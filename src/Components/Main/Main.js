import React from 'react'
import logo12 from "./Imagenes/logo12.png"
import TarjetaMap from './Tarjeta/TarjetaMap'

const Main = () => {
  return (
    <div className='lg:pt-40'>
        <div className=' bg-cover bg-[url(https://img2.rtve.es/imagenes/memoria-delfin-energia-eolica-fuente-inagotable-12-10-20/1602422065497.jpg)] p-96'>
          <img src={logo12} alt='imagen'/>
          <div className='text-3xl'>Construyendo futuro<br/>
            <div className='text-lg'>Tus necesidades, nuestros retos</div> 
          </div>
       </div>
       <div className='text-center text-4xl text-sky-700'>Componentes electrónicos por áreas de trabajo</div>
       <TarjetaMap/>
   </div>
  )
}

export default Main