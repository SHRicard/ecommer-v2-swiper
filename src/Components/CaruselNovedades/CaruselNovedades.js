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

import "swiper/css/navigation";

import "./CaruselNovedades.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";

const CaruselNovedades = () => {
  const novedades = Novedadesjson;
  return (
    <div className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        loop={true}
        navigation={true}
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
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {novedades?.map((noveda) => {
          return (
            <SwiperSlide>
              <div>
                <Cards key={noveda.id} props={noveda} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CaruselNovedades;
