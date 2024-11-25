import React from "react";

import Resource from "@/components/Resources/Resource";
import { getServerCredentials } from "../../../session/sersverSession";

const Resources = async () => {
  const session = await getServerCredentials();
  return (
    <div>
      <Resource session={session} />
    </div>
  );
};

export default Resources;
