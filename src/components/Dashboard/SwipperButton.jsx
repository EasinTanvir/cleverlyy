import React from "react";
import { useSwiper } from "swiper/react";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";

const SwipperButton = () => {
  const swiper = useSwiper();

  return (
    <>
      {/* <button
        className="absolute -left-4 top-0 bottom-0 my-auto"
        onClick={() => swiper.slidePrev()}
      >
        <RiArrowLeftSLine size={50} />
      </button> */}
      <button
        className="absolute -right-4 top-0 bottom-0 my-auto z-50"
        onClick={() => swiper.slideNext()}
      >
        <RiArrowRightSLine size={50} />
      </button>
    </>
  );
};

export default SwipperButton;
