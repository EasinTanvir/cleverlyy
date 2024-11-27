"use client";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import SideBar from "./SideBar";
import { useContextProvider } from "../../hooks/useContextProvider";
import Header from "./Header";
import { isTokenExpired } from "@/utils/tokenExpire";

const LayoutWrapper = ({ children }) => {
  const { sideBarOpen } = useContextProvider();
  const session = useSession();
  const path = usePathname();
  const router = useRouter();

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
            <div className="pt-20  ">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default LayoutWrapper;
