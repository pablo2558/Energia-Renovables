import { Link, Route,} from 'react-router-dom'

const ProductsList = ({data}) => {
    const {title, image, description} = data

  return (
    <div className="mt-10 w-64 h-full text-center">
      <figure className="rounded-lg border-slate-50 border-4 p-3 ">
        <img src={image} alt="imagen" className='h-full'/>
        <div className="text-center text-2xl text-sky-700 mt-2"> {title} </div>
        <div className="text-center"> {description} </div>
      </figure>
    </div>
  )
}

export default ProductsList