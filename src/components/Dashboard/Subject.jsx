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

const Subject = ({ subjectLists }) => {
  return (
    <div className="mt-4 rounded-md relative ">
      <Swiper
        breakpoints={{
          300: {
            width: 600,
            slidesPerView: 2,
          },
          640: {
            width: 600,
            slidesPerView: 2,
          },
          768: {
            width: 600,
            slidesPerView: 3,
          },
          992: {
            width: 600,
            slidesPerView: 3,
          },
          1200: {
            width: 600,
            slidesPerView: 3,
          },
        }}
        effect={"cube"}
        autoplay={{
          delay: 4000,
          disableOnInteraction: true,
        }}
        modules={[EffectFade]}
        scrollbar={{ draggable: true }}
      >
        {subjectLists.map((item, i) => (
          <SwiperSlide key={i}>
            <SubjectCart title={item.subject_name} />
          </SwiperSlide>
        ))}
        <SwipperButton />
      </Swiper>
    </div>
  );
};

export default Subject;
