import React from "react";
import { HiPencil } from "react-icons/hi2";
import { RiArrowRightWideFill } from "react-icons/ri";

import ResourceCart from "./ResourceCart";
import Subject from "./Subject";

const Dashboard = () => {
  return (
    <div className="space-y-4">
      <h1 className="text-[26px]">
        Welcome, <span className="text-textColor font-semibold">Nahian</span>,
        Let’s Get started today
      </h1>

      <div className="flex gap-4">
        <React.Fragment>
          <div className="space-y-4 min-w-[67%] max-w-[67%]">
            <div className="bg-boxColor h-44 rounded-md"></div>

            <div className="flex gap-4">
              <ResourceCart title="Revision Notes" />
              <ResourceCart title="Yearwise QP" />
              <ResourceCart title="Chapterwise QP" />
              <ResourceCart title="Other Resources" />
            </div>

            <div className="max-w-full">
              <h1 className="title">Your Subjects</h1>
              <Subject />
            </div>
          </div>
        </React.Fragment>
        <React.Fragment>
          <div className="space-y-4 min-w-[33%] max-w-[33%]">
            <div className="bg-custom-gradient h-44 rounded-md relative p-4">
              <div className="w-14 h-14 rounded-full absolute -top-10 left-0 right-0 mx-auto bg-avatarBg flex-center">
                logo
              </div>
              <div>
                <div>
                  <h2 className="text-sm font-semibold">Nahian Rashid</h2>
                  <h5 className="text-xs ">Mastermind School, O-level</h5>
                  <button className="bg-premiumbtnbg mt-5 rounded-2xl text-textColor px-8 py-2">
                    Go Premium
                  </button>

                  <p className="text-[12px] mt-4 w-48 leading-4 ">
                    Enjoy many more features & ace your exams
                  </p>
                </div>
                <div></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <h1 className="title ">Forum</h1>
                <button className="flex items-center gap-1">
                  <HiPencil size={12} />{" "}
                  <span className="text-textColor2 text-xs">Change name</span>
                </button>
              </div>
              <div className="flex items-center gap-1 mt-2">
                <div className="w-4 h-4 rounded-full bg-joinBtnColor "></div>
                <span className="text-textColor2 text-xs">
                  300 Students active
                </span>
              </div>
              <div className="flex justify-between mt-8 pe-4">
                <span className="text-textColor2 text-xs w-1/3">
                  Last viewed: physics <br /> o -level cambridge thread
                </span>
                <button className=" uppercase border border-r-0 border-joinBtnColor text-joinBtnColor w-36  rounded-md relative text-sm font-semibold">
                  <span>Join Now</span>
                  <span className="border border-joinBtnColor rounded-2xl w-10 h-8 absolute -right-4 bottom-0 top-0 my-auto flex-center">
                    <RiArrowRightWideFill size={20} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    </div>
  );
};

export default Dashboard;
