import Dashboard from "@components/ui/dashboard";
import { getCallsData } from "./utils/getCallsData";
import { revalidatePath } from "next/cache";

export default async function Page() {
    revalidatePath("/");
    const callsData = await getCallsData();
    return <Dashboard callsData={callsData} />;
}
