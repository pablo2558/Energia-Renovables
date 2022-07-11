import logo12 from "./Image/logo12.png"
import Baterias from "./Image/Baterias.png"

const Batteries = () => {

  return (
    <div className="lg:pt-40"> 
      <div>
      <div className="bg-[url(https://mecaluxar.cdnwm.com/casos-practicos/deposito-supermercado-online-super-nosso.1.13.jpg?imageThumbnail=3)] bg-cover bg-center h-screen">
        <img src={logo12} alt="imagen" className="w-64 pt-40" />
        <div className="text-3xl">
          Construyendo futuro
          <br />
          <div className="text-lg">Tus necesidades, nuestros retos</div>
        </div>
      </div>
      <div className="text-4xl text-white mt-8 bg-sky-700 p-2 w-5/6">
          BATERIAS
        </div>
        <div className="mt-5 ml-7 grid lg:grid-cols-2 md:grid-cols-1 sm:grid.cols-1 w-5/6 ">
          <img src={Baterias} alt="Bateria" />
          <div className="lg:ml-5 mt-5 p-4 text-lg">
            <div className="text-2xl text-sky-700 mt-4">Descripción:</div>
            El almacenamiento de energía eléctrica es el componente decisivo
            para una integración total de las energías renovables en nuestro día
            a día. Las gama de baterías está destinada tanto a aplicaciones de
            movilidad industrial como de soporte de red: respuesta en
            frecuencia, control de rampa, etc.
          </div>
        </div>
        <hr className="border-4 mt-8 w-5/6" />
        <div className="text-2xl text-sky-700 mt-4 ml-4">Celdas Módulos Racks</div>
        <div className="lg:ml-5 mt-5 p-4 text-lg w-5/6">
          Soluciones más innovadoras y ecológicas para un futuro sostenible y
          limpio. Amplia gama de soluciones de almacenamiento de energía
          (Soluciones ESS) que pueden integrarse en todas las áreas de la red
          eléctrica y usarse en diversas aplicaciones. Las baterías basadas en
          la tecnología (SLPB) Superior Lithium Polymer Battery se utilizan en
          gran cantidad de aplicaciones. Este diseño permite incrementar la
          densidad de energía hasta 200 Wh/kg. Celdas “Nano Cell” que ha
          permitido incrementar la densidad de energía y potencia con un ciclo
          de vida de 5.000 ciclos al 100% de DOD (profundidad de descarga).
          Soluciones seguras de la batería de Ión Litio de alto rendimiento para
          autobuses eléctricos, tranvías y otras fabricaciones de vehículos
          eléctricos industriales y comerciales.
        </div>
      </div>
    </div>
  );
}

export default Batteries