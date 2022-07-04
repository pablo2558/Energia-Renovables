import React from 'react'
import Tarjeta from './Card'
import Molinos from "../Imagenes/Molinos.jpg"
import Iluminacion from "../Imagenes/Iluminacion.jpg"
import Industriales from "../Imagenes/Industriales.jpg"
import Paneles from "../Imagenes/Paneles.jpg"

const BaseDatos = [
    {
        id: 1,
        titulo: "ENERGIAS RENOVABLES",
        image: Molinos,
        texto: "Componentes electrónicos de altas prestaciones y eficiencia, para el mantenimiento, reparación y desarrollo de equipos del sector renovable."
    },
    {
        id: 2,
        titulo: "ILUMINACION",
        image: Iluminacion,
        texto: "En Inelec disponemos de primeras marcas en iluminación LED, para todo tipo de aplicaciones y soluciones: Drivers, ópticas y leds."
    },
    {
        id: 3,
        titulo: "INDUSTRIAL",
        image: Industriales,
        texto: "Amplio abanico de componentes electrónicos, con capacidad de adaptación para todo tipo de máquinas y procesos industriales."
    },
    {
        id: 4,
        titulo: "ALMACENAMIENTO",
        image: Paneles,
        texto: "Alta gama de productos destinados a hacer más eficiente el funcionamiento y desarrollo de sus sistemas de almacenamiento de energía."
    }
]

const TarjetaMap = () => {
  return (
    <div className="flex">
    <div className="flex space-x-6 flex-wrap ml-4">
      {BaseDatos.map(({id, titulo, image, texto}) => (
        <div className="" key={id}>
          <Tarjeta titulo={titulo} image={image} texto={texto} />
        </div>
      ))}
    </div>
  </div>
  )
}

export default TarjetaMap