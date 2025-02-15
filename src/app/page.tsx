import Dashboard from "@/components/dashboard";
import { getCallsData } from "@/lib/get-calls-data";

export default async function Page() {
  const stats = await getCallsData();
  return <Dashboard stats={stats} />;
}