import React from 'react'
import ProductsMap from '../Cart/ProductsMap';
import logo12 from "../Main/Imagenes/logo12.png"

const Renovables = () => {
  return (
    <div className="lg:pt-40">
      <div className="bg-[url(https://tool-solutions.com.ar/wp-content/uploads/Molino-viento-personal-para-generar-energia-eolica-1024x576.jpg)] bg-cover bg-center h-screen">
        <img src={logo12} alt="imagen" className="w-64 pt-40" />
        <div className="text-3xl">
          Construyendo futuro
          <br />
          <div className="text-lg">Tus necesidades, nuestros retos</div>
        </div>
      </div>
      <div>
        <div className="text-center text-4xl text-sky-700 mt-8">
          Inelec, a la vanguardia en electrónica
        </div>
        <div className='text-lg mt-4 w-5/6 ml-7'>
          El sector de las energías renovables es un mercado consolidado,
          estando cada vez más presente en nuestra vida diaria. La integración
          de las energías renovables dentro de un sistema de distribución de
          energía necesita de las más altas cotas de fiabilidad y eficiencia lo
          cual implica un nivel de diseño e ingeniería muy elevado. Desde
          Inelec, somos conscientes del esfuerzo que realizan nuestros clientes
          para mantenerse siempre a la vanguardia de un sector tan dinámico como
          éste, y por ello, tenemos un equipo humano a la altura de sus
          necesidades, listo para analizar con su empresa la solución técnica y
          logística que mejor se adapte a sus necesidades de diseño y
          fabricación. Para la industrial de inversores solares, disponemos una
          gama de componentes electrónicos que harán que su producto asegure las
          mejores prestaciones y fiabilidad. Desde un condensador para el
          DClink, hasta un fusible de disparo rápido para proteger el stack de
          potencia o el tramo de salida de su equipo. También disponemos de una
          gama de productos para la repotenciación de turbinas eólicas y la
          protección del control pitch. Si está interesado en conocer todos los
          servicios y productos que podemos ofrecerle, no tenga inconveniente en
          contactarnos, le estamos esperando.
        </div>
        <div className="text-center text-4xl text-sky-700 mt-8">
           Productos de electrónica para energía renovable
        </div>
        <ProductsMap/>
      </div>
    </div>
  );
}

export default Renovables