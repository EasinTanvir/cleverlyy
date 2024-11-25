"use client";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { IoLogOutOutline } from "react-icons/io5";
import { Tooltip } from "@mui/material";

const Header = ({ sideBarOpen }) => {
  const router = useRouter();
  const path = usePathname();

  const { status, data } = useSession();

  console.log(data);

  const logoutHandler = async () => {
    const data = await signOut({ redirect: false, callbackUrl: "/signin" });
    router.push(data.url);
  };

  return (
    <div
      className={`fixed  ${
        !sideBarOpen
          ? "left-[75px] w-[calc(100%-75px)]"
          : "left-60 w-[calc(100%-240px)]"
      } top-0   py-6 flex justify-between md:px-5 px-4 z-40  bg-dashboardBg  border-b-2 border-gray-200`}
    >
      {path === "/aichecking/progress" && (
        <h1 className="text-textColor text-2xl font-bold">AI Checking</h1>
      )}
      <div></div>
      <div className="flex items-center gap-7">
        {/* <button className="text-sm font-semibold">Submit Problem</button> */}
        <button className="bg-moonColor w-10 h-10 rounded-full flex-center fixed bottom-2 right-2 ">
          <FaMoon size={22} className="text-white" />
        </button>
        <IoSearch size={27} />
        <FaBell size={22} />
        <IoSettingsSharp size={22} />
        {status === "authenticated" && (
          <Tooltip title="Logout">
            <button onClick={logoutHandler} className="">
              <IoLogOutOutline size={30} />
            </button>
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export default Header;
