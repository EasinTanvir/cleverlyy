"use client";
import React from "react";
import SideBar from "./SideBar";
import { useContextProvider } from "../../hooks/useContextProvider";
import Header from "./Header";

const LayoutWrapper = ({ children }) => {
  const { sideBarOpen } = useContextProvider();

  return (
    <div className="flex">
      <SideBar />
      <div
        className={`flex-1  overflow-hidden  ${
          sideBarOpen ? "lg:ml-60 ml-[75px]" : "ml-[75px] relative"
        }`}
      >
        <Header sideBarOpen={sideBarOpen} />
        <div className="mt-20">{children}</div>
      </div>
    </div>
  );
};

export default LayoutWrapper;
