import React from 'react'
import { CartContainer } from './ShopingCart'
import { useContext } from 'react'
import Payment from './Payment'
import { Link } from 'react-router-dom'

const PaymentMap = ({price, quantity}) => {
    const {cart} = useContext(CartContainer)
    const total =  cart?.reduce((previus, current) => previus + current.quantity * current.price, 0);
    
  return (
    <div>
        <div className='lg:pt-40 md:pt-40 sm:pt-40 pt-40'>
       <style>
      {`
     .form-radio {
      -webkit-appearance: none;
         -moz-appearance: none;
              appearance: none;
      -webkit-print-color-adjust: exact;
              color-adjust: exact;
      display: inline-block;
      vertical-align: middle;
      background-origin: border-box;
      -webkit-user-select: none;
         -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;
      flex-shrink: 0;
      border-radius: 100%;
      border-width: 2px;
    }
    
    .form-radio:checked {
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
      border-color: transparent;
      background-color: currentColor;
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
    }
    
    @media not print {
      .form-radio::-ms-check {
        border-width: 1px;
        color: transparent;
        background: inherit;
        border-color: inherit;
        border-radius: inherit;
      }
    }
    
    .form-radio:focus {
      outline: none;
    }
    
    .form-select {
      background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0aec0'%3e%3cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3e%3c/svg%3e");
      -webkit-appearance: none;
         -moz-appearance: none;
              appearance: none;
      -webkit-print-color-adjust: exact;
              color-adjust: exact;
      background-repeat: no-repeat;
      padding-top: 0.5rem;
      padding-right: 2.5rem;
      padding-bottom: 0.5rem;
      padding-left: 0.75rem;
      font-size: 1rem;
      line-height: 1.5;
      background-position: right 0.5rem center;
      background-size: 1.5em 1.5em;
    }
    
    .form-select::-ms-expand {
      color: #a0aec0;
      border: none;
    }
    
    @media not print {
      .form-select::-ms-expand {
        display: none;
      }
    }
    
    @media print and (-ms-high-contrast: active), print and (-ms-high-contrast: none) {
      .form-select {
        padding-right: 0.75rem;
      }
    } `}


    </style>
      <div className="min-w-screen min-h-screen bg-gray-50 py-5">
      <div className="px-5">
          <div className="mb-2">
            <Link to="/Carrito" className="focus:outline-none hover:underline text-gray-500 text-sm"><i className="mdi mdi-arrow-left text-gray-400"></i>Atras
            </Link>
          </div>
          <div className="mb-2">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-600">Verificar.</h1>
          </div>
        </div>
        <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
          <div className="w-full">
            <div className="-mx-3 md:flex items-start">
              <div className="px-3 md:w-7/12 lg:pr-10">

                <div className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                  {cart.map((item, index) => (
                    <Payment key={index} data={item} />
                  ))}
                </div>

                <div className="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                  <div className="w-full flex items-center">
                    <div className="flex-grow">
                      <span className="text-gray-600">Total</span>
                    </div>
                    <div className="pl-3">
                      <span className="font-semibold">${total} </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3 md:w-5/12">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-3 items-center">
                    <div className="w-32">
                      <span className="text-gray-600 font-semibold">Contacto</span>
                    </div>
                    <div className="flex-grow pl-3">
                      <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Nombre" type="text" />
                    </div>
                  </div>
                  <div className="w-full flex items-center">
                    <div className="w-32">
                      <span className="text-gray-600 font-semibold">Direccion de envio</span>
                    </div>
                    <div className="flex-grow pl-3">
                       <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Direccion" type="text" />
                    </div>
                  </div>
                </div>
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                  <div className="w-full p-3 border-b border-gray-200">
                    <div className="mb-5">
                      <label for="type1" className="flex items-center cursor-pointer"/>
                        <div type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked>
                          <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-6 ml-3">
                          </img>
                        </div>
                        <div>
                          <div className="mb-3">
                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Nombre en la tarjeta</label>
                            <div>
                              <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text" />
                            </div>
                          </div>
                          <div className="mb-3">
                            <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Numero de tarjeta</label>
                            <div>
                              <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text" />
                            </div>
                          </div>
                          <div className="mb-3 -mx-2 flex items-end">
                            <div className="px-2 w-1/4">
                              <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Fecha expiracion</label>
                              <div>
                                <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                  <option value="01">01 - January</option>
                                  <option value="02">02 - February</option>
                                  <option value="03">03 - March</option>
                                  <option value="04">04 - April</option>
                                  <option value="05">05 - May</option>
                                  <option value="06">06 - June</option>
                                  <option value="07">07 - July</option>
                                  <option value="08">08 - August</option>
                                  <option value="09">09 - September</option>
                                  <option value="10">10 - October</option>
                                  <option value="11">11 - November</option>
                                  <option value="12">12 - December</option>
                                </select>
                              </div>
                            </div>
                            <div className="px-2 w-1/4">
                              <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                              </select>
                            </div>
                            <div className="px-2 w-1/4">
                              <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Codigo de seguridad</label>
                              <div>
                                <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="000" type="text" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    <div className="w-full p-3">
                      <label for="type2" className="flex items-center cursor-pointer">
                        <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type2"/>
                          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" width="80" className="ml-3" />
                        </label>
                    </div>
                  </div>
                  <div>
                    <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold"><i className="mdi mdi-lock-outline mr-1"></i> PAGAR AHORA</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PaymentMap