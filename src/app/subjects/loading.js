"use client";
import React from "react";
import Skeleton from "@/components/Skeleton";

const loading = () => {
  return (
    <div className="w-[95%] mx-auto my-20">
      <Skeleton />
    </div>
  );
};

export default loading;
