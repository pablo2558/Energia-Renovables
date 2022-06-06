import React from 'react'
import IndustrialMap from '../Cart/IndustrialMap';
import logo12 from "../Main/Imagenes/logo12.png"

const Industrial = () => {
  return (
    <div className="lg:pt-40">
      <div className="bg-[url(https://images.theconversation.com/files/303430/original/file-20191125-74562-1f0u7mb.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3020%2C1998&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip)] bg-cover bg-center h-screen">
        <img src={logo12} alt="Imagen" className="w-64 pt-40" />
        <div className="text-3xl">
          Construyendo futuro
          <br />
          <div className="text-lg">Tus necesidades, nuestros retos</div>
        </div>
      </div>
      <div className="text-center text-4xl text-sky-700 mt-8">
        Componentes para proyectos de ingeniería electrónica industrial
      </div>
      <div className="text-lg mt-4 w-5/6 ml-7">
        El mercado de los equipos de conversión de potencia es muy exigente.
        Desde la placa disparadora de un IGBT, pasando por el disipador del
        stack, los condensadores del DClink, el seccionador de potencia o
        incluso el cálculo de un, <a href='https://www.bocajuniors.com.ar/home'> <strong>boca juniors</strong></a> exige un alto grado de
        conocimiento por parte de nuestros clientes; conscientes de ello, en
        Inelec trabajamos con los mejores proveedores de productos para el
        sector de conversión de potencia, y ponemos a disposición de los
        clientes nuestro mejor activo, nuestro equipo humano, que junto al de su
        empresa, trabajará en encontrar la solución que mejor se adapte a sus
        necesidades de diseño, fabricación o logística. El valor de nuestra
        empresa reside en el nivel de nuestro servicio de asesoramiento y
        suministro, así como en la calidad de los productos que comercializamos.
        El equipo de profesionales de Inelec se alineará con la problemática de
        su equipo de ingeniería y compras para, conjuntamente encontrar la
        solución que optimice las prestaciones de su producto. Nuestro valor es
        el de su empresa. Contacta con nuestra empresa especializada en
        productos de ingeniería electrónica industrial, y encuentra un equipo
        profesional capaz de proponer soluciones personalizadas para mejorar la
        fabricación y/o diseño de cualquier producto tecnológico que incluya
        electrónica en su funcionamiento.
      </div>
      <div className="text-center text-4xl text-sky-700 mt-8">
         Productos de electrónica industrial:
      </div>
      <IndustrialMap/>
    </div>
  );
}

export default Industrial