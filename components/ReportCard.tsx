import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

interface ReportCardProps {
	title: string;
	description: string;
	icon: React.ReactNode;
	onClick: () => void;
	generating: boolean;
}

export function ReportCard({ title, description, icon, onClick, generating }: ReportCardProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center gap-2">
					{icon}
					{title}
				</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>{/* Add any additional content here if needed */}</CardContent>
			<CardFooter>
				<Button onClick={onClick} disabled={generating} className="w-full">
					{generating ? "Generating..." : "Generate Report"}
				</Button>
			</CardFooter>
		</Card>
	);
}

export default ReportCard;