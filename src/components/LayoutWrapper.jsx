"use client";
import React from "react";
import { usePathname } from "next/navigation";

import SideBar from "./SideBar";
import { useContextProvider } from "../../hooks/useContextProvider";
import Header from "./Header";

const LayoutWrapper = ({ children }) => {
  const { sideBarOpen } = useContextProvider();

  const path = usePathname();

  return (
    <>
      {path === "/info" || path === "/signup" || path === "/signin" ? (
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
            <div className="pt-20">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default LayoutWrapper;
