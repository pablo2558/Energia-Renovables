import React from 'react'

const Contacto = () => {
  return (
    <div className="group inline-block">
      <button className="outline-none focus:outline-none px-3 py-1 rounded-sm flex items-center min-w-32 text-white">
        <span className="pr-1 font-semibold flex-1">Contacto</span>
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
      </button>
      <ul
        className="bg-sky-700 rounded-sm transform scale-0 group-hover:scale-100 absolute 
      transition duration-150 ease-in-out origin-top min-w-32"
      >
        <li className="rounded-sm px-3 py-1 hover:bg-sky-600 text-white">
          LinkedIn
        </li>
        <li className="rounded-sm px-3 py-1 hover:bg-sky-600 text-white">
          LinkedIn Lighting
        </li>
      </ul>
      <div />

      <style>
        {`
        li > ul                 { transform: translatex(100%) scale(0) }
        li:hover>ul           { transform: translatex(101%) scale(1) }
        li > button svg       { transform: rotate(-90deg) }
        li:hover > button svg { transform: rotate(-270deg) }

        .group:hover .group-hover\:scale-100 { transform: scale(1) }
        .group:hover .group-hover\:-rotate-180 { transform: rotate(180deg) }
        .scale-0 { transform: scale(0) }
        .min-w-32 { min-width: 8rem }`}
      </style>
    </div>
  );
}

export default Contacto