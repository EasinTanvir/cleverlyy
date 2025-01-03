"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const { useContextProvider } = require("../../../../hooks/useContextProvider");

const SubjectTitle = ({ variant = "inline", extra = false }) => {
  const router = useRouter();
  const { userSelectedSubject } = useContextProvider();

  useEffect(() => {
    if (!userSelectedSubject) {
      router.push("/subjects");
    }
    // eslint-disable-next-line
  }, [userSelectedSubject]);

  if (variant === "inline") {
    return (
      <span className="text-sm underline">
        {userSelectedSubject?.subject_name} : {userSelectedSubject?.board_name}{" "}
        {extra ? " / Yearwise QPs" : null}
      </span>
    );
  }

  if (variant === "heading") {
    return (
      <h1 className="md:text-[30px] text-xl font-bold mt-5">
        {userSelectedSubject?.subject_name} : {userSelectedSubject?.board_name}
      </h1>
    );
  }

  return null;
};

export default SubjectTitle;
