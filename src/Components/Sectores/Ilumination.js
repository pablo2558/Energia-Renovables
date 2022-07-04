import React from 'react'
import IlluminationMap from '../Cart/IlluminationMap';
import logo12 from "../Main/Imagenes/logo12.png"

const Iluminacion = () => {
  return (
    <div className="lg:pt-40">
      <div className="bg-[url(https://dmdiluminacion.com/wp-content/uploads/shutterstock_366795944.jpg)] bg-cover bg-center h-screen">
        <img src={logo12} alt="Imagen" className="w-64 pt-40" />
        <div className="text-3xl">
          Construyendo futuro
          <br />
          <div className="text-lg">Tus necesidades, nuestros retos</div>
        </div>
      </div>
      <div className="text-center text-4xl text-sky-700 mt-8">
        Iluminación LED
      </div>
      <div className="text-lg mt-4 w-5/6 ml-7">
        Una sociedad consecuente con la sostenibilidad del medioambiente tiene
        entre sus metas el trabajar hacia sistemas de iluminación lo más
        eficientes posibles. La tecnología LED de altas prestaciones es el
        máximo exponente en este sentido, pues ha demostrado ser la manera más
        eficiente de asegurar una luminosidad adecuada con el consumo de energía
        más óptimo. Somos partners de las mejores marcas en el sector de la
        iluminación LED; la calidad de nuestros productos junto a la
        profesionalidad y conocimiento de nuestro departamento técnico, nos
        ayuda a conseguir el éxito en todos nuestros proyectos. En Inelec
        ofrecemos una gama de productos que cubrirá sus necesidades si su
        empresa se dedica a desarrollar soluciones de iluminación, balizamiento
        o panelización. Si está interesado en una alta eficiencia, una mínima
        degradación y las máximas garantías, no dude en contactar a nuestro
        equipo de profesionales, estaremos encantado de atenderle y resolver
        cualquier duda que pueda tener sobre los productos de iluminación LED
        disponibles en Inelec.
      </div>
      <div className="text-center text-4xl text-sky-700 mt-8">
          Productos de iluminación LED:
      </div>
      <IlluminationMap/>
    </div>
  );
}

export default Iluminacion