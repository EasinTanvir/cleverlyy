"use client";
import React, { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url, main = false, size = 35 }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [hoverTime, setHoverTime] = useState(null);
  const [hoverPosition, setHoverPosition] = useState(null);
  const playerRef = useRef(null);
  const progressBarRef = useRef(null);

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleProgress = (state) => {
    if (!seeking) {
      setProgress(state.played * 100);
    }
  };

  const handleSeekChange = (e) => {
    setProgress(e.target.value);
  };

  const handleSeekMouseUp = () => {
    setSeeking(false);
    if (playerRef.current) {
      playerRef.current.seekTo(progress / 100);
    }
  };

  const handleSeekMouseDown = () => {
    setSeeking(true);
  };

  const handleProgressBarHover = (e) => {
    if (progressBarRef.current && duration) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const percentage = offsetX / rect.width;
      const time = duration * percentage;

      setHoverTime(time);
      setHoverPosition(offsetX); // Track the exact mouse position
    }
  };

  const handleMouseLeave = () => {
    setHoverTime(null);
    setHoverPosition(null);
  };
  return (
    <div
      className="flex-1 relative rounded-lg "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ReactPlayer
        ref={playerRef}
        url={url}
        width="100%"
        height="100%"
        playing={isPlaying}
        controls={false}
        onProgress={handleProgress}
        onDuration={(duration) => setDuration(duration)}
      />

      {/* Custom play/pause button */}
      <button
        className={`absolute inset-0 flex items-center justify-center ${
          isHovered || !isPlaying ? "visible" : "invisible"
        }`}
        onClick={handlePlayPause}
      >
        {isPlaying ? (
          <div
            className={`flex-center  bg-shadowBlack rounded-full ${
              main ? "w-20 h-20" : "w-16 h-16"
            }`}
          >
            <FaPause size={size} className="text-white" />
          </div>
        ) : (
          <div
            className={`flex-center  bg-shadowBlack rounded-full ${
              main ? "w-20 h-20" : "w-16 h-16"
            }`}
          >
            <FaPlay size={size} className="text-white" />
          </div>
        )}
      </button>

      {/* Custom Progress Bar */}
      <div
        className={`absolute ${
          main ? "bottom-5" : "bottom-2"
        } left-0 w-full px-4 py-2`}
      >
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onMouseDown={handleSeekMouseDown}
          onChange={handleSeekChange}
          onMouseUp={handleSeekMouseUp}
          onMouseMove={handleProgressBarHover}
          onMouseLeave={handleMouseLeave} // Hide tooltip when mouse leaves
          ref={progressBarRef}
          className="w-full h-1 appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #3b82f6 ${progress}%, #e5e7eb ${progress}%)`,
          }}
        />
        {/* Show hover time tooltip above mouse pointer */}
        {hoverTime !== null && (
          <div
            className="text-white text-xs absolute bottom-full mb-1 px-2 py-1 bg-black rounded"
            style={{
              left: `${hoverPosition}px`,
              transform: "translateX(-50%)",
            }}
          >
            {Math.floor(hoverTime)}s
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
