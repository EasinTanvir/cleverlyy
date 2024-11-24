"use client";
import React from "react";
import SideBar from "./SideBar";
import { useContextProvider } from "../../hooks/useContextProvider";
import Header from "./Header";
import { usePathname } from "next/navigation";

const LayoutWrapper = ({ children }) => {
  const { sideBarOpen } = useContextProvider();
  const path = usePathname();

  return (
    <>
      {path === "/info" || path === "/signup" ? (
        <div>{children}</div>
      ) : (
        <div className="flex">
          <SideBar />
          <div
            className={`flex-1  overflow-hidden  ${
              sideBarOpen ? "lg:ml-60 ml-[75px]" : "ml-[75px] relative"
            }`}
          >
            <Header sideBarOpen={sideBarOpen} />
            <div className="pt-20  bg-dashboardBg">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default LayoutWrapper;
