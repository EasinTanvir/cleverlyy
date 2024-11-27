export const dynamic = "force-dynamic";
import React, { Suspense } from "react";

import AiChecking from "@/components/AiChecking/AiChecking";
import Skeleton from "@/components/Skeleton";
import { getServerCredentials } from "../../../session/sersverSession";

const fetchSubjects = async (session) => {
  try {
    if (!session?.token) {
      throw new Error("Authentication token is missing.");
    }

    const headers = {
      Authorization: `Bearer ${session.token}`,
      "Content-Type": "application/json",
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/subjects`,
      {
        method: "GET",
        headers,
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData?.message);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

const AiCheckingHelper = async ({ session }) => {
  try {
    const data = await fetchSubjects(session);
    return <AiChecking subjectLists={data} />;
  } catch (error) {
    console.error(error.message);
    throw new Error(error?.message || "Something Went Wrong");
  }
};

const AiCheckingPage = async () => {
  const session = await getServerCredentials();

  return (
    <div>
      <Suspense
        fallback={
          <div className="p-10">
            <Skeleton />
          </div>
        }
      >
        <AiCheckingHelper session={session} />
      </Suspense>
    </div>
  );
};

export default AiCheckingPage;
