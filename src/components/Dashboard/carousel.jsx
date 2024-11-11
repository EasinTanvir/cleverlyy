"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import { bannerLists } from "@/utils";
import Image from "next/image";

// using custom color from tailwind config
const colors = ["bg-banner-color1", "bg-banner-color2", "bg-banner-color3"];

const Carousel = () => {
  return (
    <div className="pb-2  rounded-2xl">
      <Swiper
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, EffectFade, Autoplay]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={1}
      >
        {bannerLists.map((item, i) => (
          <SwiperSlide key={item.id}>
            <div className={`carousel-item rounded-2xl h-[200px] ${colors[i]}`}>
              <div className="flex justify-between h-full">
                <div className="flex-1 flex-center">
                  <div className="text-center">
                    <h1 className="title">{item.title}</h1>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
                <div className="flex-1 flex-center">
                  <div className="relative w-16 h-16">
                    <Image
                      className="w-full h-full"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
