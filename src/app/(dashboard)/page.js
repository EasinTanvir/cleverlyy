export const dynamic = "force-dynamic";
import Dashboard from "@/components/Dashboard/Dashboard";
import { getServerCredentials } from "../../../session/sersverSession";

const DashboardPage = async () => {
  const session = await getServerCredentials();

  throw new Error("failed");

  return (
    <div className="md:p-8 p-3 ">
      <Dashboard session={session} />
    </div>
  );
};

export default DashboardPage;
