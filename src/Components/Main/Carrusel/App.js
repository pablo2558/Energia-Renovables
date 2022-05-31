import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Style.css"

//Import Images
import CodigoEtico from "../Imagenes/Codigo-etico.jpg"
import Drivers from "../Imagenes/Drivers.jpg"
import H6Series from "../Imagenes/H6 Series.jpg"
import ImagenPc from "../Imagenes/Imagen PC.jpg"
import Puerto from "../Imagenes/Puerto.jpg"
import Stock from "../Imagenes/Stock.jpg"
import Ventilador from "../Imagenes/Ventilador.jpg"

const App = () => {
  return (
    <div>
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
        <SwiperSlide>
          <img src={CodigoEtico} alt="Codidgo Etico" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Drivers} alt="Drivers" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={H6Series} alt="H6 Series" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ImagenPc} alt="Imagen" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Puerto} alt="Puerto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Stock} alt="Stock" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ventilador} alt="Ventilador" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App