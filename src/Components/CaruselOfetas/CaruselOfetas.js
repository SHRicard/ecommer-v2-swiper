import React from "react";
import CardsTwo from "../CardsTwo/CardsTwo.js";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import OfertaJson from "../../Util/Json/Ofertas.json";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "swiper/css/navigation";

// import required modules
import { EffectCube, Pagination, Navigation } from "swiper";

import "./CaruselOfetas.css";

//FUNCION
// <-------oferta1----->
const oferta1 = (OfertaJson) => OfertaJson.id === 5;
const ofertas1 = OfertaJson.filter(oferta1);
const CaruselOfetas = () => {
  return (
    <>
      <Swiper
        effect={"cube"}
        navigation={true}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {ofertas1.map((oferta) => {
            return (
              <div>
                <CardsTwo key={oferta.id} props={oferta} />
              </div>
            );
          })}
        </SwiperSlide>
        <SwiperSlide>
          {ofertas1.map((oferta) => {
            return (
              <div>
                <CardsTwo key={oferta.id} props={oferta} />
              </div>
            );
          })}
        </SwiperSlide>
        <SwiperSlide>
          {ofertas1.map((oferta) => {
            return (
              <div>
                <CardsTwo key={oferta.id} props={oferta} />
              </div>
            );
          })}
        </SwiperSlide>
        <SwiperSlide>
          {ofertas1.map((oferta) => {
            return (
              <div>
                <CardsTwo key={oferta.id} props={oferta} />
              </div>
            );
          })}
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CaruselOfetas;
