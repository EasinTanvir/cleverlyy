"use client";

import { ContextProvider } from "../../hooks/useContextProvider";

const ContextWrapper = ({ children }) => {
  return <ContextProvider>{children}</ContextProvider>;
};

export default ContextWrapper;
