"use client";
import React, { useEffect, useState } from "react";
import { MdDashboard } from "react-icons/md";
import { Collapse, Divider } from "@mui/material";
import { logoImage } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiArrowDownWideFill } from "react-icons/ri";
import { RiArrowUpWideFill } from "react-icons/ri";
import { MdOutlineSubject } from "react-icons/md";
import { GrResources } from "react-icons/gr";
import { GiProgression } from "react-icons/gi";
import { GrNotes } from "react-icons/gr";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FcIdea } from "react-icons/fc";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

import { useContextProvider } from "../../hooks/useContextProvider";

const SideBar = () => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const path = usePathname();

  const { sideBarOpen, setSidebarOpen } = useContextProvider();

  const toggleResources = () => {
    setIsResourcesOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!sideBarOpen) {
      setIsResourcesOpen(false);
    }
  }, [sideBarOpen]);

  const isHidden = !sideBarOpen ? "hidden" : "";

  return (
    <div className="relative z-50">
      <div
        className={`bg-sideBarColor py-5 px-4 min-h-screen max-h-screen  fixed top-0 left-0 transition-all duration-75  ${
          sideBarOpen ? "w-60" : "w-[75px]"
        } `}
      >
        <div
          className={`flex  ${sideBarOpen ? "justify-end" : "justify-center"}`}
        >
          <button onClick={() => setSidebarOpen(!sideBarOpen)}>
            {sideBarOpen ? (
              <FaArrowLeftLong className="text-white" size={20} />
            ) : (
              <FaArrowRightLong className="text-white" size={20} />
            )}
          </button>
        </div>
        <div className="py-8 flex items-center gap-2">
          <div className="relative w-10">
            <Image className="w-full " src={logoImage} alt="great" />
          </div>
          <Divider
            style={{ height: "40px", width: "2px" }}
            className={`bg-white ${isHidden}`}
            orientation="vertical"
            flexItem
          />

          <h1
            className={`text-2xl font-bold uppercase pt-1 text-white ${isHidden}`}
          >
            cleverlly
          </h1>
        </div>
        <div className={`space-y-7  ${!sideBarOpen ? "ps-[2px]" : ""}`}>
          <Link
            href="/"
            className={`flex items-center gap-2 ${
              path === "/" ? "bg-white text-black ps-2" : "text-white"
            }  py-1  rounded-md  `}
          >
            <MdDashboard size={25} />
            <span className={`text-lg pt-[2px] font-medium ${isHidden}`}>
              Dashboard
            </span>
          </Link>
          <Link
            href="/subjects"
            className={`flex items-center gap-2 ${
              path === "/subjects" ? "bg-white text-black ps-2" : "text-white"
            }  py-1  rounded-md  `}
          >
            <MdOutlineSubject size={25} />
            <span className={`text-lg pt-[2px] font-medium ${isHidden}`}>
              Subjects
            </span>
          </Link>

          <div onClick={() => setSidebarOpen(true)}>
            <Link
              href="/resources/revisionnote"
              onClick={toggleResources}
              className={`flex items-center gap-2 cursor-pointer py-1 rounded-md  ${
                path.startsWith("/resources")
                  ? "bg-white text-black ps-2"
                  : "text-white"
              }`}
            >
              <GrResources size={25} />
              <span className={`text-lg pt-[2px] font-medium ${isHidden}`}>
                Resources
              </span>
              <div className={`${isHidden}`}>
                {!isResourcesOpen ? (
                  <RiArrowDownWideFill size={25} />
                ) : (
                  <RiArrowUpWideFill size={25} />
                )}
              </div>
            </Link>

            <Collapse in={isResourcesOpen} timeout="auto" unmountOnExit>
              <div className="pl-8 space-y-3 pt-3">
                <Link
                  href="/resources/revisionnote"
                  className={`flex items-center gap-2 border-b-[1px] border-b-white  py-1 px-3   ${
                    path === "/resources/revisionnote"
                      ? "bg-white text-black rounded-md"
                      : "text-white "
                  }`}
                >
                  <span className={`text-sm`}>Revision Notes</span>
                </Link>
                <Link
                  href="/resources/chapterwise"
                  className={`flex items-center gap-2 border-b-[1px] border-b-white  py-1 px-3   ${
                    path === "/resources/chapterwise"
                      ? "bg-white text-black rounded-md"
                      : "text-white "
                  }`}
                >
                  <span className={`text-sm`}>Chapterwise QP</span>
                </Link>
                <Link
                  href="/resources/yearwise"
                  className={`flex items-center gap-2 border-b-[1px] border-b-white  py-1 px-3   ${
                    path === "/resources/yearwise"
                      ? "bg-white text-black rounded-md"
                      : "text-white "
                  }`}
                >
                  <span className="text-sm">Yearwise QP</span>
                </Link>
                <Link
                  href="/resources/otherresource"
                  className={`flex items-center gap-2 border-b-[1px] border-b-white  py-1 px-3   ${
                    path === "/resources/otherresource"
                      ? "bg-white text-black rounded-md"
                      : "text-white "
                  }`}
                >
                  <span className={`text-sm`}>Other Resources</span>
                </Link>
              </div>
            </Collapse>
          </div>

          <Link
            href="/progress"
            className={`flex items-center gap-2 ${
              path === "/progress" ? "bg-white text-black ps-2" : "text-white"
            }  py-1  rounded-md  `}
          >
            <GiProgression size={25} />
            <span className={`text-lg pt-[2px] ${isHidden}`}>Progress</span>
          </Link>
          <Link
            href="/notes"
            className={`flex items-center gap-2 ${
              path === "/notes" ? "bg-white text-black ps-2" : "text-white"
            }  py-1  rounded-md  `}
          >
            <GrNotes size={25} />
            <span className={`text-lg pt-[2px] ${isHidden}`}>Notes</span>
          </Link>
          <Link
            href="/aichecking"
            className={`flex items-center gap-2 ${
              path === "/aichecking" ? "bg-white text-black ps-2" : "text-white"
            }  py-1  rounded-md  `}
          >
            <FaRegCheckCircle size={25} />
            <span className={`text-lg pt-[2px] ${isHidden}`}>Ai Checking</span>
          </Link>
          <Link
            href="/calender"
            className={`flex items-center gap-2 ${
              path === "/calender" ? "bg-white text-black ps-2" : "text-white"
            }  py-1  rounded-md  `}
          >
            <FaRegCalendarAlt size={25} />
            <span className={`text-lg pt-[2px] ${isHidden}`}>Calender</span>
          </Link>
          <Link
            href="/forum"
            className={`flex items-center gap-2 ${
              path === "/forum" ? "bg-white text-black ps-2" : "text-white"
            }  py-1  rounded-md  `}
          >
            <FaUsers size={25} />
            <span className={`text-lg pt-[2px] ${isHidden}`}>Forum</span>
          </Link>
          <Link
            href="/learningtips"
            className={`flex items-center gap-2 ${
              path === "/learningtips"
                ? "bg-white text-black ps-2"
                : "text-white"
            }  py-1  rounded-md  `}
          >
            <FcIdea size={25} />
            <span className={`text-lg pt-[2px] ${isHidden}`}>
              Learning Tips
            </span>
          </Link>
        </div>

        <div
          className={` bg-custom-gradient  p-5 z-50 rounded-[27px]  absolute bottom-4 left-4 ${
            sideBarOpen ? "w-52" : "w-[44px]"
          }  `}
        >
          <div className={`${isHidden} `}>
            <h1 className="text-md  font-semibold">Go Premium</h1>
            <span className="text-[10px] font-medium">
              Unlock all features:
            </span>
            <ul className={`list-disc text-[10px] ps-6   font-medium`}>
              <li>Full revision notes</li>
              <li>AI-checked papers</li>
              <li>Track your progress</li>
            </ul>
            <span className="text-textColor text-[11px] font-bold">
              and many more
            </span>
          </div>
          <div></div>
        </div>

        {isResourcesOpen && (
          <div className="absolute bottom-0 left-0 w-60 h-[400px] bg-gradient-to-t z-10 from-[rgba(0.4,0,0,0.6)] to-transparent backdrop-blur-xs pointer-events-none"></div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
