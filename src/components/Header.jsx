import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

const Header = ({ sideBarOpen }) => {
  return (
    <div
      className={`fixed ${
        !sideBarOpen
          ? "left-[75px] w-[calc(100%-75px)]"
          : "left-60 w-[calc(100%-240px)]"
      } top-0   py-6 flex justify-end px-4 `}
    >
      <div className="flex items-center gap-5">
        <IoSearch size={22} />
        <FaBell size={22} />
        <IoSettingsSharp size={22} />
      </div>
    </div>
  );
};

export default Header;
