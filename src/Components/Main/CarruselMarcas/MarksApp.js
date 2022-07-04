import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./StyleMarcas.css"

//import images
import Arcol from "../Imagenes/Arcol.png"
import Comepa from "../Imagenes/Comepa.png"
import Harting from "../Imagenes/Harting.jpg"
import Ligitec from "../Imagenes/Ligitek.png"
import Mitsubishi from "../Imagenes/Mitsubishi.png"
import Raycap from "../Imagenes/Raycap.png"
import Semikron from "../Imagenes/Semikron.png"
import Sensara from "../Imagenes/Sensata.png"
import Viskay from "../Imagenes/Vishay.png"

const AppMarcas = () => {
  return (
  
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
          <img src={Arcol} alt="Codidgo Etico" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Comepa} alt="Drivers" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Harting} alt="H6 Series" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Ligitec} alt="Imagen" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Mitsubishi} alt="Puerto" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Raycap} alt="Stock" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Semikron} alt="Ventilador" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={Sensara} alt="Ventilador" />
        </SwiperSlide>

          <SwiperSlide>
          <img src={Viskay} alt="Ventilador" />
        </SwiperSlide>
    </Swiper>
    
  )
}

export default AppMarcas