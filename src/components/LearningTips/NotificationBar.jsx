"use client";
import React, { useState } from "react";

import { RxCross1 } from "react-icons/rx";

const NotificationBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="flex md:flex-row flex-col  justify-between px-4 items-center py-3  mb-12 rounded-full bg-[#cbc2ff] max-w-3xl">
      <button
        onClick={() => setIsVisible(false)}
        className="text-gray-600 hover:text-gray-800"
      >
        <RxCross1 size={20} />
      </button>
      <p className="flex-grow text-lg text-gray-800 mx-2">
        Latest Updates Note Taking, Notes within AI response
      </p>
      <a href="#" className="text-[16px] text-purple-500 underline italic">
        Learn More
      </a>
    </div>
  );
};

export default NotificationBar;
