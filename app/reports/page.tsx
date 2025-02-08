"use client";

import { useState } from "react";
import { BarChart, PieChart, LineChart } from "lucide-react";
import type React from "react";
import ReportVisualization from "./ReportVisualization";
import ReportCard from "@/components/ReportCard";

export default function ReportsPage() {
	const [generatingReport, setGeneratingReport] = useState<string | null>(null);
	const [reportData, setReportData] = useState(null);

	const generateReport = async (reportType: string) => {
		setGeneratingReport(reportType);

		try {
			const unicoApiKey = process.env.NEXT_PUBLIC_UNICO_API_KEY!;
			const response = await fetch("https://theunico.it/api/completions", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${unicoApiKey}`,
				},
				body: JSON.stringify({
					agent: "[YOUR_AGENT_NAME]",
					query: `Generate this report: ${reportType}`,
				}),
			});

			let responseData = await response.json();

			if (typeof responseData === "string") {
				responseData = JSON.parse(responseData);
			}

			setReportData(JSON.parse(responseData.text).data);
			setGeneratingReport(null);
		} catch (error) {
			console.error("Error:", error);
			setReportData(null);
			setGeneratingReport(null);
		}
	};
	return (
		<div className="container mx-auto p-4">
			<h1 className="text-3xl font-bold mb-6">ACME Marketing Agency Reports</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<ReportCard
					title="Campaign Performance"
					description="Analyze the performance of your marketing campaigns"
					icon={<BarChart className="h-6 w-6" />}
					onClick={() => generateReport("Campaign Performance")}
					generating={generatingReport === "Campaign Performance"}
				/>
				<ReportCard
					title="Audience Insights"
					description="Understand your audience demographics and behavior"
					icon={<PieChart className="h-6 w-6" />}
					onClick={() => generateReport("Audience Insights")}
					generating={generatingReport === "Audience Insights"}
				/>
				<ReportCard
					title="ROI Analysis"
					description="Measure the return on investment for your marketing efforts"
					icon={<LineChart className="h-6 w-6" />}
					onClick={() => generateReport("ROI Analysis")}
					generating={generatingReport === "ROI Analysis"}
				/>
			</div>
			{reportData && <ReportVisualization data={reportData} />}
		</div>
	);
}
