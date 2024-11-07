"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import subjects from "@/utils";
import SubjectCart from "./SubjectCart";
import SwipperButton from "./SwipperButton";

const Subject = () => {
  return (
    <div className="mt-4 rounded-md relative ">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade]}
        scrollbar={{ draggable: true }}
        slidesPerView={5}
      >
        {subjects.map((item, i) => (
          <SwiperSlide key={i}>
            <SubjectCart title={item} />
          </SwiperSlide>
        ))}
        <SwipperButton />
      </Swiper>
    </div>
  );
};

export default Subject;
