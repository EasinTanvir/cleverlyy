import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiPencil } from "react-icons/hi2";
import { RiArrowRightWideFill } from "react-icons/ri";
import { HiOutlineArrowSmRight } from "react-icons/hi";

import ResourceCart from "./ResourceCart";
import Subject from "./Subject";
import { avatar, dashboardImg, study } from "../../constant";
import Calendar from "./HorizontaCalendar";
import MeetingItem from "./MeetingCard";
import { meetingsData } from "../../utils";
import Notifications from "./Notification";
import Carousel from "./carousel";
import Skeleton from "../Skeleton";
import DashBoardChart from "./DashBoardChart";

const fetchData = async (url, headers) => {
  const response = await fetch(url, {
    method: "GET",
    headers,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}: ${response.statusText}`);
  }

  return response.json();
};

const SubjectWrapper = async ({ subject, session }) => {
  try {
    if (!session?.token) {
      throw new Error("Authentication token is missing.");
    }

    const headers = {
      Authorization: `Bearer ${session.token}`,
      "Content-Type": "application/json",
    };

    const [allSubjectsResponse, userSubjectsResponse] = await Promise.all([
      fetchData(`${process.env.BACKEND_URL}/subjects/all`, headers),
      fetchData(`${process.env.BACKEND_URL}/users/subjects`, headers),
    ]);

    const allSubjects = allSubjectsResponse.flatMap((board) =>
      board.exams.flatMap((exam) => exam.subjects)
    );

    const filterDataByBoard = () => {
      const labels = [];
      const chartData = [];

      if (userSubjectsResponse) {
        userSubjectsResponse.forEach((board) =>
          board.exams.forEach((exam) => {
            exam.subjects.forEach((subject) => {
              if (labels.length < 5) {
                labels.push(`${subject.subject_name}`);
                chartData.push({
                  revision_progress: subject.revision_progress || 0,
                  chapterwise_progress: subject.chapterwise_progress || 0,
                  yearwise_progress: subject.yearwise_progress || 0,
                });
              }
            });
          })
        );
      }

      return { labels, chartData };
    };

    const { labels, chartData } = filterDataByBoard();

    return subject ? (
      <Subject subjectLists={allSubjects} />
    ) : (
      <DashBoardChart labels={labels} dataValues={chartData} />
    );
  } catch (error) {
    console.error(error.message);
    throw new Error(error?.message || "Something Went Wrong");
  }
};

const Dashboard = ({ session }) => {
  return (
    <div className="space-y-6 ">
      <h1 className="text-[28px]">
        Welcome,{" "}
        <span className="text-textColor font-bold">{session?.first_name},</span>{" "}
        Let’s Get started today
      </h1>

      <div className="flex lg:flex-row flex-col xl:gap-10 lg:gap-8 gap-20">
        <React.Fragment>
          <div className="space-y-9 2xl:w-[66%] lg:w-[58%] w-full ">
            <div className="">
              <Carousel />
            </div>

            <div className="grid 2xl:grid-cols-4 extralg:grid-cols-3 xs:grid-cols-2  gap-3 ">
              <ResourceCart
                title="Revision Notes"
                lists={[
                  "Over 10000+ revision notes",
                  "Flashcards: Coming Soon",
                ]}
                red
                link="/resources/revisionnote"
              />
              <ResourceCart
                title="Yearwise QP"
                lists={[
                  "Over 10+ years ",
                  "Digitally solvable papers",
                  "AI checking",
                ]}
                link="/resources/yearwise"
              />
              <ResourceCart
                title="Chapterwise QP"
                lists={[
                  "Questions for each topic",
                  "Progress Tracking",
                  "Quizzes: Coming Soon",
                ]}
                link="/resources/chapterwise"
              />
              <ResourceCart
                title="Other Resources"
                lists={[
                  "Specimen Papers",
                  "Grade Boundaries",
                  " Recommended Books",
                ]}
                link="/resources/otherresource"
                noResource
              />
            </div>

            <div className="overflow-hidden">
              <h1 className="title">Your Subjects</h1>
              <Suspense fallback={<Skeleton />}>
                <SubjectWrapper subject session={session} />
              </Suspense>
            </div>

            <div className="bg-white rounded-3xl p-5">
              <div className="mb-6  flex justify-between items-center">
                <h1 className="title">Your Progress</h1>
                <Link href="/progress">
                  <button className="text-sm text-textColor2 underline">
                    View All
                  </button>
                </Link>
              </div>

              <div className="w-full h-64">
                <Suspense fallback={<Skeleton />}>
                  <SubjectWrapper session={session} />
                </Suspense>
              </div>
            </div>

            <div className="flex extralg:flex-row flex-col gap-4 pt-5">
              <Link
                href="/aichecking"
                className="extralg:w-[50%] w-full  flex-center border rounded-3xl h-[190px]   bg-[#2a0055]"
              >
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
              </Link>
              <div className="border border-black min-h-[190px]  rounded-2xl p-5 extralg:w-[50%] w-full">
                <div className="flex justify-between">
                  <h1 className="title w-1/2">
                    Thinktank: An answer for every question
                  </h1>
                  <div className="relative w-20">
                    <Image className="w-full" src={dashboardImg} alt="logo" />
                  </div>
                </div>
                <div className="flex md:flex-row flex-col  gap-3 md:justify-between mt-5 md:pe-5">
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
          <div className="space-y-10 2xl:w-[32%] lg:w-[40%] w-full ">
            <div className="bg-custom-gradient border-4 border-black  rounded-xl min-h-[200px] relative px-4 pt-4">
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

            <div className="bg-white  px-3.5 py-4 rounded-xl ">
              <div className="flex justify-between  ">
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

            <div className=" bg-white px-3.5 py-4 rounded-xl">
              <Calendar />

              <div>
                {meetingsData.map((meeting, index) => (
                  <MeetingItem key={index} meeting={meeting} />
                ))}
              </div>
            </div>

            {/* <div className=" mx-auto   space-y-5 p-4 rounded-2xl bg-red-700">
              {meetingsData.map((meeting, index) => (
                <MeetingItem key={index} meeting={meeting} />
              ))}
            </div> */}
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
