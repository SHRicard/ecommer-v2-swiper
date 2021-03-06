import React from "react";
import Cards from "../Cards/Cards.js";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import OutletJson from "../../Util/Json/Outlet.json";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCube, Pagination, Navigation } from "swiper";
import "./Outlet.css";

const Outlet = () => {
  return (
    <div className="container">
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
        {OutletJson?.map((Outle) => {
          return (
            <SwiperSlide>
              <div>
                <Cards key={Outle.id} props={Outle} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Outlet;
