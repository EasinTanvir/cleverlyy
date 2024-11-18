"use client";
import React from "react";
import { Alert } from "@mui/material";
import Link from "next/link";
const Errors = ({ error }) => {
  console.log(error.message);
  return (
    <>
      <div className="w-full min-h-96 flex justify-center items-center">
        <Alert severity="warning">
          {error?.message || "SomeThing Went Wrong"}
          <Link className="underline ms-1 font-bold text-red-800" href="/">
            Go Back
          </Link>
        </Alert>
      </div>
    </>
  );
};

export default Errors;
