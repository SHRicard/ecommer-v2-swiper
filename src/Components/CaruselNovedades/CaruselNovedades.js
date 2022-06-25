import React from "react";
//Components
import Cards from "../Cards/Cards.js";
//IMPORT JSON
import Novedadesjson from "../../Util/Json/Novedades.json";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./CaruselNovedades.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
//FUNCION
// <-------noveda1----->
const noveda1 = (Novedadesjson) => Novedadesjson.id === 1;
const novedades1 = Novedadesjson.filter(noveda1);
// <-------noveda2----->
const noveda2 = (Novedadesjson) => Novedadesjson.id === 2;
const novedades2 = Novedadesjson.filter(noveda2);
// <-------noveda3----->
const noveda3 = (Novedadesjson) => Novedadesjson.id === 3;
const novedades3 = Novedadesjson.filter(noveda3);
// <-------noveda4----->
const noveda4 = (Novedadesjson) => Novedadesjson.id === 4;
const novedades4 = Novedadesjson.filter(noveda4);
// <-------noveda5----->
const noveda5 = (Novedadesjson) => Novedadesjson.id === 5;
const novedades5 = Novedadesjson.filter(noveda5);
// <-------noveda6----->
const noveda6 = (Novedadesjson) => Novedadesjson.id === 6;
const novedades6 = Novedadesjson.filter(noveda6);
// <-------noveda7----->
const noveda7 = (Novedadesjson) => Novedadesjson.id === 7;
const novedades7 = Novedadesjson.filter(noveda7);
// <-------noveda8----->
const noveda8 = (Novedadesjson) => Novedadesjson.id === 8;
const novedades8 = Novedadesjson.filter(noveda8);
// <-------noveda9----->
const noveda9 = (Novedadesjson) => Novedadesjson.id === 9;
const novedades9 = Novedadesjson.filter(noveda9);
const CaruselNovedades = () => {
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

export default CaruselNovedades;
