import React from "react";
import Image from "next/image";
import { HiPencil } from "react-icons/hi2";
import { RiArrowRightWideFill } from "react-icons/ri";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import Link from "next/link";

import ResourceCart from "./ResourceCart";
import Subject from "./Subject";
import BarChart from "../BarChart";
import { avatar, dashboardImg, study } from "../../constant";
import Calendar from "./HorizontaCalendar";
import MeetingItem from "./MeetingCard";
import { meetingsData } from "../../utils";
import Notifications from "./Notification";
import Carousel from "./carousel";

const dummyData = [
  { revisionNotes: 12, chapterwiseQP: 8, yearwiseQP: 15 },
  { revisionNotes: 14, chapterwiseQP: 10, yearwiseQP: 20 },
  { revisionNotes: 9, chapterwiseQP: 6, yearwiseQP: 11 },
  { revisionNotes: 16, chapterwiseQP: 12, yearwiseQP: 18 },
  { revisionNotes: 10, chapterwiseQP: 7, yearwiseQP: 13 },
  { revisionNotes: 13, chapterwiseQP: 9, yearwiseQP: 17 },
];

const Dashboard = () => {
  return (
    <div className="space-y-6  p-8">
      <h1 className="text-[28px]">
        Welcome, <span className="text-textColor font-bold">Nahian,</span> Let’s
        Get started today
      </h1>

      <div className="flex lg:flex-row flex-col xl:gap-10 lg:gap-8 gap-20">
        <React.Fragment>
          <div className="space-y-9 2xl:w-[66%] lg:w-[58%] w-full ">
            <div className="">
              <Carousel />
            </div>

            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 xs:grid-cols-2 ">
              <ResourceCart
                title="Revision Notes"
                lists={[
                  "Over 10000+ revision notes",
                  "Flashcards: Coming Soon",
                ]}
              />
              <ResourceCart
                title="Yearwise QP"
                lists={[
                  "Over 10+ years ",
                  "Digitally solvable papers",
                  "AI checking",
                ]}
              />
              <ResourceCart
                title="Chapterwise QP"
                lists={[
                  "Questions for each topic",
                  "Progress Tracking",
                  "Quizzes: Coming Soon",
                ]}
              />
              <ResourceCart
                title="Other Resources"
                lists={[
                  "Specimen Papers",
                  "Grade Boundaries",
                  " Recommended Books",
                ]}
                noResource
              />
            </div>

            <div className="overflow-hidden">
              <h1 className="title">Your Subjects</h1>
              <Subject />
            </div>

            <div className="">
              <div className="mb-6 flex justify-between items-center">
                <h1 className="title">Your Progress</h1>
                <Link href="/progress">
                  <button className="text-sm text-textColor2 underline">
                    View All
                  </button>
                </Link>
              </div>

              <div className="w-full h-64">
                <BarChart dataValues={dummyData} />

                {/* 
                <div className="2xl:w-[49%]">
                  <div className="mb-5 flex justify-between items-center mt-6">
                    <h1 className="title">Physics</h1>
                    <button className="text-sm text-textColor2 underline">
                      View All
                    </button>
                  </div>

                  <div className="bg-boxColor2 h-32 mt-6 rounded-xl p-4">
                    <h1 className=" text-sm  font-medium underline">
                      Suggestions:
                    </h1>
                    <ul className="list-disc pl-5 text-xs mt-3">
                      <li>Should Start studying Revision Notes</li>
                      <li>
                        Then solve chapterwise question paper for each of the
                        studied chapter.
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="flex extralg:flex-row flex-col gap-4 pt-5">
              <div className="extralg:w-[50%] w-full  flex-center border rounded-3xl h-[190px]   bg-[#2a0055]">
                <button className="ai-button">
                  <div className="ai-button-content">
                    <div>
                      <h2>AI Checking</h2>
                      <ul>
                        <li>Any Subject</li>
                        <li>Any paper</li>
                        <li>Last 10 years</li>
                      </ul>
                    </div>
                    <div className="ai-solve">
                      Solve
                      <span>➲</span>
                    </div>
                  </div>
                </button>
              </div>
              <div className="border border-black h-[190px]  rounded-2xl p-5 extralg:w-[50%] w-full">
                <div className="flex justify-between">
                  <h1 className="title w-1/2">
                    Thinktank: An answer for every question
                  </h1>
                  <div className="relative w-20">
                    <Image className="w-full" src={dashboardImg} alt="logo" />
                  </div>
                </div>
                <div className="flex flex-row  gap-3 justify-between mt-5 pe-5">
                  <p className="text-xs w-52 ">
                    Check out our learning hacks, <br /> tips & latest updates &
                    many more
                  </p>
                  <button className="uppercase border border-r-0 min-h-8 max-h-8 border-joinBtnColor text-joinBtnColor w-36 rounded-l-3xl relative text-sm font-semibold">
                    <span>Join Now</span>
                    <span className="border border-joinBtnColor rounded-2xl w-10 h-8 absolute -right-4 bottom-0 top-0 my-auto flex-center">
                      <RiArrowRightWideFill size={20} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
        <React.Fragment>
          <div className="space-y-6 2xl:w-[32%] lg:w-[40%] w-full ">
            <div className="bg-custom-gradient border-4 border-black  rounded-xl h-[200px] relative px-4 pt-4">
              <div className="w-20 h-20 rounded-full absolute -top-10 left-0 right-0 mx-auto bg-avatarBg flex-center">
                <Image className="w-full h-full" src={avatar} alt="avatar" />
              </div>
              <div className="flex  ">
                <div className="flex-1 pb-4">
                  <h2 className="text-lg font-bold">Nahian Rashid</h2>
                  <h5 className="text-xs ">Mastermind School, O-level</h5>
                  <button className="bg-premiumbtnbg mt-5 rounded-2xl text-textColor px-8 py-2">
                    Go Premium
                  </button>

                  <p className="text-[12px] mt-4 w-48 leading-4 ">
                    Enjoy many more features & ace your exams
                  </p>
                </div>
                <div className=" flex-1  flex justify-end items-end">
                  <Image
                    className="min-w-36 max-w-36 -mb-[14px]"
                    src={study}
                    alt="studylogo"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between pt-7 ">
                <h1 className="title2 ">Forum</h1>
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
                <span className="text-textColor2 text-xs w-[50%]">
                  Last viewed: physics <br /> o -level cambridge thread
                </span>
                <Link href="/forum">
                  <button className=" uppercase min-h-8 max-h-8 border border-r-0 border-joinBtnColor text-joinBtnColor w-32 pe-2  rounded-2xl rounded-r-none relative text-sm font-semibold">
                    <span>Join Now</span>
                    <span className="border border-joinBtnColor rounded-2xl w-10 h-8 absolute -right-4 bottom-0 top-0 my-auto flex-center">
                      <RiArrowRightWideFill size={20} />
                    </span>
                  </button>
                </Link>
              </div>
            </div>

            <div className="pt-2">
              <Calendar />
            </div>

            <div className=" mx-auto bg-white  space-y-5">
              {meetingsData.map((meeting, index) => (
                <MeetingItem key={index} meeting={meeting} />
              ))}
            </div>
            <div>
              <Notifications />
            </div>
            <div className="bg-custom-gradient flex justify-between items-center px-4  h-[74px] rounded-md ">
              <h1 className="title">Let&apos;s Start</h1>
              <button className="w-8 h-8 bg-black rounded-full flex-center">
                <HiOutlineArrowSmRight size={35} className="text-white" />
              </button>
            </div>
          </div>
        </React.Fragment>
      </div>
    </div>
  );
};

export default Dashboard;
