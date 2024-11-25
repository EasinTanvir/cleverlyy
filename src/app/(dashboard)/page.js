export const dynamic = "force-dynamic";
import { getServerCredentials } from "../../../session/sersverSession";
import Dashboard from "@/components/Dashboard/Dashboard";

const DashboardPage = async () => {
  const session = await getServerCredentials();

  return (
    <div className="md:p-8 p-3 ">
      <Dashboard session={session} />
    </div>
  );
};

export default DashboardPage;
