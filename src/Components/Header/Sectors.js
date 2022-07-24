import React from 'react'
import { Link } from 'react-router-dom'

const Sectores = () => {
  return (
    <div className="group inline-block">
      <div className="outline-none focus:outline-none px-3 py-1 rounded-sm flex items-center min-w-32 text-white">
        <span className="pr-1 flex-1">SECTORES</span>
        <span>
          <svg
            className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </span>
      </div>
      <ul
        className="bg-sky-700 rounded-sm transform scale-0 group-hover:scale-100 absolute 
        transition duration-150 ease-in-out origin-top min-w-32"
      >
        <li className="rounded-sm px-3 py-1 hover:bg-sky-600 text-white">
        <Link to="Renovables">Renovables</Link>
        </li>
        <li className="rounded-sm px-3 py-1 hover:bg-sky-600 text-white">
          <Link to="Iluminacion">Iluminacion</Link>
        </li>
        <li className="rounded-sm px-3 py-1 hover:bg-sky-600 text-white">
           <Link to="Industrial">Industrial</Link>
        </li>
        <li className="rounded-sm px-3 py-1 hover:bg-sky-600 text-white">
          <Link to="Almacenamiento">Almacenamiento de energia</Link>
        </li>
      </ul>

      <style>
        {`
        li > ul                 { transform: translatex(100%) scale(0) }
        li:hover>ul           { transform: translatex(101%) scale(1) }
        li > div svg       { transform: rotate(-90deg) }
        li:hover > div svg { transform: rotate(-270deg) }

        .group:hover .group-hover\:scale-100 { transform: scale(1) }
        .group:hover .group-hover\:-rotate-180 { transform: rotate(180deg) }
        .scale-0 { transform: scale(0) }
        .min-w-32 { min-width: 8rem }`}
      </style>
    </div>
  );
}

export default Sectores