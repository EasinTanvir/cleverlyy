"use client";

import React from "react";

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-red-500">
        Something went wrong in dashboard page!
      </h1>
      <p className="text-gray-700 mt-4">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Try Again
      </button>
    </div>
  );
}
