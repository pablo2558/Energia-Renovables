import React from 'react'
import logo12 from "../Main/Imagenes/logo12.png"

const Cookies = () => {
  return (
    <div className="lg:pt-40">
      <div className="bg-cover bg-center bg-[url(https://www.incibe.es/sites/default/files/styles/recuadro_original/public/contenidos/blog/img_acompanamiento_politica_de_cookies.png?itok=tdcj6dO4)] h-screen">
        <img src={logo12} alt="image" className="w-64 pt-40" />
        <div className="text-3xl">
          Construyendo futuro
          <br />
          <div className="text-lg">Tus necesidades, nuestros retos</div>
        </div>
      </div>
      <div className="text-center text-4xl text-sky-700">
        Política de Cookies
      </div>
      <div className="pt-6 p-8">
        POLÍTICA DE COOKIES EL PROPIETARIO DE LA WEB podrá utilizar cookies
        durante la prestación de servicios del sitio web. Una cookie es una
        pequeña pieza de información que queda almacenada en su navegador cuando
        visita nuestro SITIO WEB. Gracias a la cookie, recordamos sus
        preferencias para que cuando nos visites de nuevo, obtengas una mejor
        experiencia online. Vd. decide si permite o no las cookies, pero si
        decide no permitirlas, debe bloquearlas en su navegador. Al permitir las
        cookies, podrá obtener una mejor experiencia en nuestro sitio web. Si
        bien, también puede desactivarlas. La mayoría de los navegadores están
        configurados de forma predeterminada para aceptar cookies, pero puede
        cambiar la configuración para bloquear algunas o todas las cookies, si
        lo prefiere. Si no le gusta cómo esto afecta a su experiencia online, es
        igual de fácil de cambiar las cosas de nuevo. Chrome:
        https://support.google.com/chrome/answer/95647?hl=es Explorer:
        http://windows.microsoft.com/es-es/windows7/how-to-manage-cookies-in-internet-explorer-9
        Safari:
        http://translate.google.com/translate?hl=en&sl=en&tl=es&u=http%3A%2F%2Fsupport.apple.com
        Firefox:
        http://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-gua
        …
      </div>
    </div>
  );
}

export default Cookies