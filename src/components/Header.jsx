"use client";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaBell, FaSignInAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import Link from "next/link";
import UserMenu from "./UserMenu";

const Header = ({ sideBarOpen }) => {
  const path = usePathname();

  const { status, data: session } = useSession();

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
        {status === "authenticated" ? (
          <>
            {" "}
            <IoSearch size={27} />
            <FaBell size={22} />
            <IoSettingsSharp size={22} />
            {/* <Tooltip title="Logout">
              <button onClick={logoutHandler} className="">
                <IoLogOutOutline size={30} />
              </button>
            </Tooltip> */}
            <UserMenu session={session} />
          </>
        ) : (
          <Link href="/signin">
            <button className="flex items-center justify-center px-6  py-2 bg-gradient-to-r from-purple-500 to-red-500 text-white rounded-lg shadow-lg  transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-4 focus:ring-purple-300">
              <FaSignInAlt className="mr-3 text-xl animate-bounce" />
              <span className="font-semibold text-sm">Login</span>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
