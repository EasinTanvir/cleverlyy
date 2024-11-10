import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const NotificationBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="flex  justify-between px-4 py-2.5  mb-12 rounded-full bg-[#cbc2ff] max-w-3xl">
      <button
        onClick={() => setIsVisible(false)}
        className="text-gray-600 hover:text-gray-800"
      >
        <FaTimes />
      </button>
      <p className="flex-grow text-sm text-gray-800 mx-2">
        Latest Updates Note Taking, Notes within AI response
      </p>
      <a href="#" className="text-sm text-purple-600 hover:underline">
        Learn More
      </a>
    </div>
  );
};

export default NotificationBar;
