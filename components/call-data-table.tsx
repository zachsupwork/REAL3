"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface CallDataTableProps {
  data: any[];
}

function formatDuration(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(date);
}

export function CallDataTable({ data }: CallDataTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Calls</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Phone Number</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Appointment</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((call) => (
              <TableRow key={call.id}>
                <TableCell className="font-medium">{call.from_number}</TableCell>
                <TableCell>{formatDuration(call.duration)}</TableCell>
                <TableCell>
                  <Badge 
                    variant={
                      call.call_type === "Appointment" 
                        ? "default"
                        : call.call_type === "Inquiry"
                        ? "secondary"
                        : "outline"
                    }
                  >
                    {call.call_type}
                  </Badge>
                </TableCell>
                <TableCell>
                  {call.appointment_booked ? (
                    <Badge variant="success">Booked</Badge>
                  ) : (
                    <Badge variant="secondary">Not Booked</Badge>
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < call.rating 
                            ? "text-yellow-400 fill-current" 
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </TableCell>
                <TableCell>{formatDate(new Date(call.start_time))}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}