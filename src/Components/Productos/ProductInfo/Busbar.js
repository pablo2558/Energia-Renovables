import React from 'react'
import logo12 from "./Image/logo12.png"
import Busbar1 from "./Image/Busbar.png"

export const Busbar = () => {
  return (
    <div className="lg:pt-40">
      <div className="bg-[url(https://mecaluxar.cdnwm.com/casos-practicos/deposito-supermercado-online-super-nosso.1.13.jpg?imageThumbnail=3)] bg-cover bg-center h-screen">
        <img src={logo12} alt="imagen" className="w-64 pt-40" />
        <div className="text-3xl">
          Construyendo futuro
          <br />
          <div className="text-lg">Tus necesidades, nuestros retos</div>
        </div>
      </div>
      <div className="text-4xl text-white mt-8 bg-sky-700 p-2 w-5/6">
          BUSBAR
        </div>
        <div className="mt-5 ml-7 grid lg:grid-cols-2 md:grid-cols-1 sm:grid.cols-1 w-5/6 ">
          <img src={Busbar1} alt="Bateria" />
          <div className="lg:ml-5 mt-5 p-4 text-lg">
            <div className="text-2xl text-sky-700 mt-4">Descripción:</div>
            Distribuyen energía de alta corriente local y se utilizan para conectar equipos de alto voltaje en los patios eléctricos y equipos de bajo voltaje en los bancos de baterías.
          </div>
        </div>
        <hr className="border-4 mt-8 w-5/6" />
        <div className="text-2xl text-sky-700 mt-4 ml-4">Laminados de aluminio Laminados de cobre</div>
        <div className="lg:ml-5 mt-5 p-4 text-lg w-5/6">
        Busbar Laminados para interconexión de DCLINK en convertidores de potencia, tanto en cobre como aluminio, reduciendo al mínimo la inductancia parasita, incrementando el aislamiento eléctrico y simplificando el montaje.
        </div>
    </div>
  )
}

export default Busbar
