import React from 'react'
import Button from './Button'

const BaseDatos = [
    {
        id: 1,
        titulo: "Todos"
    },
    {
        id: 2,
        titulo: "Renovables"
    },
    {
        id: 3,
        titulo: "Iluminacion"
    },
    {
        id: 4,
        titulo: "Industrial"
    },
    {
        id: 5,
        titulo: "Alm. Energia"
    }
]

const ButtonMap = () => {
  return (
    <div className="flex text-center">
    <div className="flex space-x-6 flex-wrap">
      {BaseDatos.map(({id, titulo}) => (
        <div className="" key={id}>
          <Button titulo={titulo} />
        </div>
      ))}
    </div>
  </div>
  )
}

export default ButtonMap