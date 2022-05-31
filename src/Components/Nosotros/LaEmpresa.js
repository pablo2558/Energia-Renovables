import React from 'react'
import logo12 from "../Main/Imagenes/logo12.png"
import empresa from "./Image/empresa.jpg"

const LaEmpresa = () => {
  return (
    <div className="lg:pt-40">
      <div className="bg-cover bg-center w-screen bg-[url(https://w1.pngwing.com/pngs/133/387/png-transparent-3d-spain-map-drawing-threedimensional-space-3d-computer-graphics-water-water-resources.png)] h-screen">
        <img src={logo12} alt="logo12" className="w-64 pt-40" />
        <div className="text-3xl">
          Construyendo futuro
          <br />
          <div className="text-lg">Tus necesidades, nuestros retos</div>
        </div>
      </div>
      <div className="text-center text-4xl text-sky-700 mt-4">
        Inelec, a la vanguardia en electrónica
      </div>
      <div className="text-lg mt-4 w-5/6 ml-7">
        Desde su creación, Inelec ha apostado en todo momento por el compromiso
        hacia sus clientes, aportando soluciones eficaces para el desarrollo de
        sus proyectos En Inelec, hacemos de sus necesidades nuestros propios
        retos, y basándonos en nuestra experiencia, y gracias al equipo humano
        que lo forma, hemos conseguido posicionarnos como empresa de referencia
        en el sector. Actualmente, Inelec está presente en todos y cada uno de
        los ámbitos industriales, tales como, energías renovables, automoción,
        ferroviario, lighting... aportando soluciones específicas y actuales
        para la optimización de recursos de manera limpia y sostenible Durante
        casi cuatro décadas, Inelec ha puesto al alcance de sus clientes una
        amplia gama de productos electrónicos de las más prestigiosas marcas por
        su calidad y prestaciones, dotándolas de un valor añadido basado en
        nuestra experiencia. Disponemos de un amplio abanico de componentes de
        electrónica que cubren aplicaciones tan dispares como la electrónica de
        potencia, optoelectrónica, sistemas de conexionado y componentes
        electromecánicos, orientado a ofrecer soluciones a los proyectos de
        nuestros clientes. El principal objetivo de todos los que formamos
        Inelec, es que nuestros clientes formen parte fundamental de la
        estructura de nuestra empresa, dando un trato cercano, personal y
        comprometido con sus necesidades.
      </div>
      <div className="mt-5 ml-7 grid lg:grid-cols-2 md:grid-cols-1 sm:grid.cols-1 w-5/6">
        <img src={empresa} alt="empresa" className="" />
        <div className="lg:ml-5 mt-5 p-4 text-lg ">
          Inelec cuenta con un equipo de personas estable y altamente
          cualificado para el desarrollo de sus funciones. Nuestra experiencia,
          ilusión y pasión por nuestro trabajo, hacen de Inelec su principal
          aliado para afrontar sus retos. El equipo de Inelec está orgulloso de
          participar en el éxito de la industria electrónica y su contribución
          en el desarrollo de una actividad humana más limpia y sostenible.
          Estamos seguros que la excelencia es posible, y con este
          convencimiento trabajamos día a día.
        </div>
      </div>
      <div className="mt-5 ml-7 text-lg ">
          En Inelec, conscientes de la importancia de su proyecto, tenemos un
          equipo altamente cualificado a su disposición para satisfacer las
          necesidades de su empresa y ofrecer soluciones específicas en materia
          de componentes electrónicos. Compromiso, seguridad y fiabilidad en el
          suministro son nuestros valores esenciales, desde que comenzamos
          nuestra actividad de distribución en 1982. Compromiso de nuestros
          comerciales e ingenieros, quienes desde nuestras oficinas de Madrid,
          San Sebastián y Barcelona, trabajarán de manera activa y organizada
          con su equipo, para asesorarle a la hora de encontrar la mejor
          propuesta técnica y logística. Somos expertos en aportar soluciones
          personalizadas para la distribución de electrónica. Seguridad, porque
          solo trabajamos con primeras marcas de electrónica. Y fiabilidad de
          suministro, porque el núcleo de Inelec es un equipo de profesionales
          en la gestión de compras, el almacenamiento y la logística de
          transporte, gestionando de manera eficaz todos sus pedidos, y haciendo
          un seguimiento exhaustivo que asegure el cumplimiento de los plazos de
          entrega. Todos los que componemos Inelec, formamos parte de un
          mecanismo articulado para garantizar la consecución de sus objetivos.
          Nuestra dedicación a su problemática es nuestro mayor activo. Estamos
          seguros que nuestra experiencia y nuestras ganas por el trabajo bien
          hecho, nos hará contar con toda su confianza
        </div>
    </div>
  );
}

export default LaEmpresa