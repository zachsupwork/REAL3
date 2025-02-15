import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import CallDataTable from "./call-data-table";
import BarChartComponent from "./bar-chart";

interface DashboardProps {
    callsData: {
        from_number: string;
        to_number: string;
        summary: string;
        appointment_booked: boolean;
    }[];
}

export default function Dashboard({ callsData }: DashboardProps) {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto p-6 space-y-8">
                <header className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                        Real Estate Call Dashboard
                    </h1>
                </header>

                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold">Call Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <BarChartComponent data={callsData} />
                    </CardContent>
                </Card>

                <CallDataTable data={callsData} />
            </div>
        </div>
    );
}
