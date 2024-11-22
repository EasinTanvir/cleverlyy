"use client";
import React from "react";
import { Alert } from "@mui/material";
import Link from "next/link";
const Errors = ({ error }) => {
  console.log(error.message);
  return (
    <>
      <div className="w-full min-h-96 flex justify-center items-center ">
        <div>
          <Alert style={{ width: "500px" }} severity="warning">
            <div className="flex-center">
              <h3 className="text-xl">SomeThing Went Wrong in subject page</h3>
              <Link
                className="underline ms-1 font-bold text-red-800 text-xl"
                href="/subjects"
              >
                Go Back
              </Link>
            </div>
          </Alert>
        </div>
      </div>
    </>
  );
};

export default Errors;
