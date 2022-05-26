import React from 'react'
import App from './Carrusel/App'
import logo12 from "./Imagenes/logo12.png"
import ProductosVarios from "./Imagenes/Productos varios.jpg"
import TarjetaMap from './Tarjeta/TarjetaMap'

const Main = () => {
  return (
    <div className="lg:pt-40">
      <div className=" bg-cover bg-center  bg-[url(https://img2.rtve.es/imagenes/memoria-delfin-energia-eolica-fuente-inagotable-12-10-20/1602422065497.jpg)] p-96">
        <img src={logo12} alt="imagen" />
        <div className="text-3xl">
          Construyendo futuro
          <br />
          <div className="text-lg">Tus necesidades, nuestros retos</div>
        </div>
      </div>
      <div className="text-center text-4xl text-sky-700">
        Componentes electrónicos por áreas de trabajo
      </div>
      <TarjetaMap />
      <App />
      <div className="ml-7">
        <div className="text-3xl text-sky-700 mt-4">
          Expertos en componentes electrónicos para industrias
        </div>
        <div className="text-lg mt-4 w-5/6">
          En Inelec estamos comprometidos con ofrecer un servicio profesional a
          la vanguardia del sector electrónico, nuestra condición de proveedor y
          mayorista de material de electrónica nos obliga a estar siempre en
          continua evolución, en busca del mejor resultado, haciendo posible dar
          soluciones de última generación a nuestros clientes. Hacemos nuestro
          cada proyecto; desde el mismo momento que empieces a trabajar con
          nosotros, dispondrás del mejor asesoramiento técnico, así como la
          posibilidad de adquirir componentes, piezas y repuestos de los mejores
          proveedores de electrónica del mercado. Contamos con personal
          especializado en la distribución y venta de componentes electrónicos
          para grandes empresas y proyectos, los cuales siempre están innovando
          para dar soluciones a las necesidades y particularidades que cada uno
          de nuestros clientes tienen en cada momento, y asesorándoles para que
          la resolución sea la más eficaz, ahorrando tiempo y costes.
        </div>
        <div className="text-3xl text-sky-700 mt-4">
          Amplio catálogo de materiales para electrónica
        </div>
        <div className='text-lg mt-4 w-5/6'>
          Entre nuestro catálogo puedes encontrar todo tipo de elementos
          electrónicos para tus proyectos industriales, energía renovable,
          iluminación o almacenamiento de energía. Accede a nuestra selección de
          productos de electrónica y podrás escoger el que mejor se adapte a tus
          necesidades: Baterías, busbar, aerosoles, condensadores, conectores,
          contactores, disipadores, drivers led, fuentes de alimentación,
          fusibles, interruptores, leds, modulos de potencia, opticas led,
          protecciones contra sobretensiones, relés, resistencias, sensores
          efecto hall, termostatos, transformadores planares, ultracaps,
          ventiladores…
          <img src={ProductosVarios} alt='productos' className='mt-4'/>
        </div>
      </div>
    </div>
  );
}

export default Main