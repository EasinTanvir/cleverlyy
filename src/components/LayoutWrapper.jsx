"use client";
import React from "react";
import SideBar from "./SideBar";
import { useContextProvider } from "../../hooks/useContextProvider";

const LayoutWrapper = ({ children }) => {
  const { sideBarOpen } = useContextProvider();

  return (
    <div className="flex">
      <SideBar />
      <div
        className={`flex-1  overflow-hidden ${
          sideBarOpen ? "ml-60" : "ml-[75px]"
        }`}
      >
        <header className="bg-black text-white py-4 px-4 mb-4">Header</header>
        <React.Fragment>{children}</React.Fragment>
      </div>
    </div>
  );
};

export default LayoutWrapper;
