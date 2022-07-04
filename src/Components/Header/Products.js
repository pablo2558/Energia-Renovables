import React from 'react'

const Productos = () => {
  return (
    <div className="group inline-block">
      <button className="outline-none focus:outline-none px-3 py-1 rounded-sm flex items-center min-w-32 text-white">
        <span className="pr-1 font-semibold flex-1">Productos</span>
      </button>
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

export default Productos