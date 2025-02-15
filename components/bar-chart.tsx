"use client";

import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import { Card, CardContent, CardFooter, CardTitle } from "@components/ui/card";

interface BarChartProps {
    data: { from_number: string; to_number: string; summary: string; appointment_booked: boolean }[];
}

export function BarChartComponent({ data }: BarChartProps) {
    return (
        <Card>
            <CardContent className="pt-6">
                <BarChart width={500} height={300} data={data}>
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="from_number" tickLine={false} tickMargin={10} axisLine={false} />
                    <Bar dataKey="appointment_booked" fill="var(--color-calls)" radius={4}>
                        <LabelList position="top" offset={12} className="fill-foreground" fontSize={10} />
                    </Bar>
                </BarChart>
            </CardContent>
            <CardFooter className="text-sm">
                Showing call data from the last 30 days.
            </CardFooter>
        </Card>
    );
}
