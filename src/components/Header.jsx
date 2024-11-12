import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

const Header = ({ sideBarOpen }) => {
  return (
    <div
      className={`fixed  ${
        !sideBarOpen
          ? "left-[75px] w-[calc(100%-75px)]"
          : "left-60 w-[calc(100%-240px)]"
      } top-0   py-6 flex justify-end md:px-5 px-4 z-40 bg-white shadow-md `}
    >
      <div className="flex items-center gap-7">
        {/* <button className="text-sm font-semibold">Submit Problem</button> */}
        <button className="bg-moonColor w-10 h-10 rounded-full flex-center fixed bottom-2 right-2 ">
          <FaMoon size={22} className="text-white" />
        </button>
        <IoSearch size={27} />
        <FaBell size={22} />
        <IoSettingsSharp size={22} />
      </div>
    </div>
  );
};

export default Header;
