import React, { useState } from "react";
import { useSwiper } from "swiper/react";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";

const SwipperButton = () => {
  const swiper = useSwiper();

  const [data, setData] = useState(false);

  const onNextHandler = () => {
    swiper.slideNext();
    setData(!data);
  };
  const onPrevHandler = () => {
    swiper.slidePrev();
    setData(!data);
  };

  return (
    <div className="absolute top-0 bottom-0 left-0 w-full my-auto flex justify-between z-50">
      <button
        disabled={swiper.isBeginning}
        className={`  ${swiper.isBeginning ? "text-gray-500" : ""} -ml-4`}
        onClick={onPrevHandler}
      >
        <RiArrowLeftSLine size={50} />
      </button>
      <button
        disabled={swiper.isEnd}
        onClick={onNextHandler}
        className={`  ${swiper.isEnd ? "text-gray-500" : ""} -mr-4`}
      >
        <RiArrowRightSLine size={50} />
      </button>
    </div>
  );
};

export default SwipperButton;
