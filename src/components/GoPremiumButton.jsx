import React from "react";

const GoPremiumButton = ({ isHidden, sideBarOpen }) => {
  return (
    <div className="relative flex items-center w-full h-[200px] p-[10px] bg-gradient-to-b from-white to-[#c7d9ff] rounded-[16px] shadow-md  z-auto">
      <div
        className={` overlap-circle absolute   ${
          sideBarOpen
            ? "top-[-14px] right-[-14px] w-[60px] h-[60px]"
            : "top-[-14px] right-0 w-[55px] h-[55px]"
        }`}
      >
        <div className={`icon `}>⇪</div>
      </div>

      <img
        src="https://res.cloudinary.com/dmrbqkzbu/image/upload/v1731255730/boy_kimh1f.png"
        alt="Student"
        className={`absolute   h-auto ${
          sideBarOpen
            ? "right-[-18px] min-w-[110px] max-w-[110px] bottom-[-1px]"
            : "right-[-10px] min-w-[75px] max-w-[75px] bottom-[-1px]"
        }`}
      />

      <div className={`content ${isHidden}`}>
        <h2 className="m-0 text-[16px] text-[#333333] font-semibold">
          Go Premium
        </h2>
        <p className="text-[#666666] text-[10px]">Unlock all features:</p>
        <ul className="p-0 list-none text-[#666666] my-[5px]">
          <li className="mb-[5px] text-[12px]">• Full revision notes</li>
          <li className="mb-[5px] text-[12px]">• AI-checked papers</li>
          <li className="mb-[5px] text-[12px]">• Track your progress</li>
        </ul>
        <p className="highlight">and many more</p>
      </div>
    </div>
  );
};

export default GoPremiumButton;
