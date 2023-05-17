import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "MTB Bike Builder",
	description: "Select your own custom MTB build",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<header className="flex justify-center p-4 text-4xl bg-teal-500">
					MTB Bike Builder
				</header>
				{children}
			</body>
		</html>
	);
}
