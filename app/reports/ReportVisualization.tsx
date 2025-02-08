import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const ReportVisualization = ({ data }: any) => {
	if (!data || data.length === 0) {
		return (
			<Card className="w-full mt-6">
				<CardHeader>
					<CardTitle>Report Results</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-center text-gray-500">No data available</p>
				</CardContent>
			</Card>
		);
	}

	return (
		<Card className="w-full mt-6">
			<CardHeader>
				<CardTitle>Report Results</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="w-full h-96">
					<ResponsiveContainer width="100%" height="100%">
						<BarChart data={data}>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey={Object.keys(data[0])[0]} />
							<YAxis label={{ value: Object.keys(data[0])[1], angle: -90, position: "insideLeft" }} />
							<Tooltip />
							<Bar dataKey={Object.keys(data[0])[1]} fill="#10182B" />
						</BarChart>
					</ResponsiveContainer>
				</div>
			</CardContent>
		</Card>
	);
};

export default ReportVisualization;
