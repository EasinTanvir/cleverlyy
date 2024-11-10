import React, { useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => setIsPlaying(!isPlaying);
  return (
    <div className="relative w-full h-64 bg-gray-800 mb-6 rounded-2xl">
      <video className="w-full h-full object-cover" autoPlay loop muted>
        <source src="https://www.youtube.com/watch?v=toKRvpVHutM" />
      </video>
      <button
        onClick={togglePlayPause}
        className="absolute inset-0 m-auto w-16 h-16 bg-opacity-75 bg-gray-900 text-white flex items-center justify-center rounded-full"
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default VideoPlayer;
