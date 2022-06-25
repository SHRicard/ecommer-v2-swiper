import React from "react";
//Components
import Cards from "../Cards/Cards.js";
//IMPORT JSON
import Ofertasjson from "../../Util/Json/Ofertas.json";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./CaruselOfetas.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
//FUNCION
// <-------oferta1----->
const oferta1 = (Ofertasjson) => Ofertasjson.id === 1;
const novedades1 = Ofertasjson.filter(oferta1);
// <-------noveda2----->
const noveda2 = (Ofertasjson) => Ofertasjson.id === 2;
const novedades2 = Ofertasjson.filter(noveda2);
// <-------noveda3----->
const noveda3 = (Ofertasjson) => Ofertasjson.id === 3;
const novedades3 = Ofertasjson.filter(noveda3);
// <-------noveda4----->
const noveda4 = (Ofertasjson) => Ofertasjson.id === 4;
const novedades4 = Ofertasjson.filter(noveda4);
// <-------noveda5----->
const noveda5 = (Ofertasjson) => Ofertasjson.id === 5;
const novedades5 = Ofertasjson.filter(noveda5);
// <-------noveda6----->
const noveda6 = (Ofertasjson) => Ofertasjson.id === 6;
const novedades6 = Ofertasjson.filter(noveda6);
// <-------noveda7----->
const noveda7 = (Ofertasjson) => Ofertasjson.id === 7;
const novedades7 = Ofertasjson.filter(noveda7);
// <-------noveda8----->
const noveda8 = (Ofertasjson) => Ofertasjson.id === 8;
const novedades8 = Ofertasjson.filter(noveda8);
// <-------noveda9----->
const noveda9 = (Ofertasjson) => Ofertasjson.id === 9;
const novedades9 = Ofertasjson.filter(noveda9);
const CaruselOfetas = () => {
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SwiperSlide>
            {novedades1.map((noveda) => {
              return (
                <div>
                  <Cards key={noveda.id} props={noveda} />
                </div>
              );
            })}
          </SwiperSlide>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlide>
            {novedades2.map((noveda) => {
              return (
                <div>
                  <Cards key={noveda.id} props={noveda} />
                </div>
              );
            })}
          </SwiperSlide>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlide>
            {novedades3.map((noveda) => {
              return (
                <div>
                  <Cards key={noveda.id} props={noveda} />
                </div>
              );
            })}
          </SwiperSlide>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlide>
            {novedades4.map((noveda) => {
              return (
                <div>
                  <Cards key={noveda.id} props={noveda} />
                </div>
              );
            })}
          </SwiperSlide>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlide>
            {novedades5.map((noveda) => {
              return (
                <div>
                  <Cards key={noveda.id} props={noveda} />
                </div>
              );
            })}
          </SwiperSlide>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlide>
            {novedades6.map((noveda) => {
              return (
                <div>
                  <Cards key={noveda.id} props={noveda} />
                </div>
              );
            })}
          </SwiperSlide>
        </SwiperSlide>
        {/* <SwiperSlide>
          <SwiperSlide>
            {novedades7.map((noveda) => {
              return (
                <div>
                  <Cards key={noveda.id} props={noveda} />
                </div>
              );
            })}
          </SwiperSlide>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlide>
            {novedades8.map((noveda) => {
              return (
                <div>
                  <Cards key={noveda.id} props={noveda} />
                </div>
              );
            })}
          </SwiperSlide>
        </SwiperSlide>
        <SwiperSlide>
          <SwiperSlide>
            {novedades9.map((noveda) => {
              return (
                <div>
                  <Cards key={noveda.id} props={noveda} />
                </div>
              );
            })}
          </SwiperSlide>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default CaruselOfetas;
