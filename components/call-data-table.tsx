import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card";
import { Badge } from "@components/ui/badge";

interface CallDataTableProps {
    data: { from_number: string; to_number: string; summary: string; appointment_booked: boolean }[];
}

export function CallDataTable({ data }: CallDataTableProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xl font-semibold">Recent Calls</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>From</TableHead>
                            <TableHead>To</TableHead>
                            <TableHead>Summary</TableHead>
                            <TableHead>Appointment</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.from_number}</TableCell>
                                <TableCell>{row.to_number}</TableCell>
                                <TableCell>{row.summary}</TableCell>
                                <TableCell>
                                    <Badge variant={row.appointment_booked ? "default" : "secondary"}>
                                        {row.appointment_booked ? "Booked" : "Not Booked"}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
