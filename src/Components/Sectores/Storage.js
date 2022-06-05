import React from 'react'
import StorageMap from '../Cart/StorageMap'
import logo12 from "../Main/Imagenes/logo12.png"

const Storage = () => {
  return (
    <div className="lg:pt-40">
    <div className="bg-[url(https://afelogistics.com/blog/wp-content/uploads/2021/08/que-son-racks-almacenamiento.jpg)] bg-cover bg-center h-screen">
      <img src={logo12} alt="Imagen" className="w-64 pt-40" />
      <div className="text-3xl">
        Construyendo futuro
        <br />
        <div className="text-lg">Tus necesidades, nuestros retos</div>
      </div>
    </div>
    <div className="text-center text-4xl text-sky-700 mt-8">
      Almacenamiento de energía
    </div>
    <div className="text-lg mt-4 w-5/6 ml-7">
      En Inelec mantenemos una oferta de productos adaptada a las necesidades
      de los fabricantes más exigentes en prestaciones y calidad de servicio.
      A través de Inelec podrá acceder a un porfolio de productos amplio y de
      calidad en sectores como el de almacenamiento de energía o respuesta en
      potencia. Nuestra oferta de baterías de Li-ion y Ultracaps asegura una
      solución a la altura de sus necesidades tanto en movilidad eléctrica
      industrial, como en sistemas de estabilización de redes o plantas
      híbridas de energía. También disponemos de una amplia gama de protección
      contra sobrevoltaje y sobrecorriente así como transductores,
      condensadores, conectores, IGBT’s, etc, en resumidas cuentas, todo lo
      que se puede necesitar en electrónica de potencia y control. El valor
      principal de Inelec reside en la profesionalidad y capacidad de
      colaborar con su equipo de diseño para definir la solución que mejor se
      adapte a sus necesidades, y es fruto de la experiencia en diversos
      sectores como el militar, ferroviario o aeroespacial. Nuestro equipo de
      ingenieros y comerciales está a su disposición para asesorarle. No tenga
      duda en contactarnos.
    </div>
    <div className="text-center text-4xl text-sky-700 mt-8">
       Productos de electrónica para almacenamiento de energía:
    </div>
    <StorageMap/>
  </div>
  )
}

export default Storage