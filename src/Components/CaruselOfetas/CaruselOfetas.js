import React from "react";
import Cards from "../Cards/Cards.js";
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
const oferta1 = (OfertaJson) => OfertaJson.id === 1;
const ofertas1 = OfertaJson.filter(oferta1);
const oferta2 = (OfertaJson) => OfertaJson.id === 2;
const ofertas2 = OfertaJson.filter(oferta2);
const oferta3 = (OfertaJson) => OfertaJson.id === 3;
const ofertas3 = OfertaJson.filter(oferta3);
const oferta4 = (OfertaJson) => OfertaJson.id === 4;
const ofertas4 = OfertaJson.filter(oferta4);
const oferta5 = (OfertaJson) => OfertaJson.id === 5;
const ofertas5 = OfertaJson.filter(oferta5);
const oferta6 = (OfertaJson) => OfertaJson.id === 6;
const ofertas6 = OfertaJson.filter(oferta6);
const CaruselOfetas = () => {
  return (
    <div className="container">
      {/* <div className="row">
        <div className="col pb-5"> */}
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
        className="mySwiper2"
      >
        <SwiperSlide>
          {ofertas1.map((oferta) => {
            return (
              <div>
                <Cards key={oferta.id} props={oferta} />
              </div>
            );
          })}
        </SwiperSlide>
        <SwiperSlide>
          {ofertas2.map((oferta) => {
            return (
              <div>
                <Cards key={oferta.id} props={oferta} />
              </div>
            );
          })}
        </SwiperSlide>
        <SwiperSlide>
          {ofertas3.map((oferta) => {
            return (
              <div>
                <Cards key={oferta.id} props={oferta} />
              </div>
            );
          })}
        </SwiperSlide>
        <SwiperSlide>
          {ofertas4.map((oferta) => {
            return (
              <div>
                <Cards key={oferta.id} props={oferta} />
              </div>
            );
          })}
        </SwiperSlide>
        <SwiperSlide>
          {ofertas5.map((oferta) => {
            return (
              <div>
                <Cards key={oferta.id} props={oferta} />
              </div>
            );
          })}
        </SwiperSlide>
        {/* <SwiperSlide>
            {ofertas6.map((oferta) => {
              return (
                <div>
                  <Cards key={oferta.id} props={oferta} />
                </div>
              );
            })}
          </SwiperSlide> */}
      </Swiper>
      {/* </div>
        <div className="col"></div>
      </div> */}
    </div>
  );
};

export default CaruselOfetas;
