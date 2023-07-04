import Image from "next/image";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/presentation/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Restaurant ",
	description: "Best restaurant in ... ",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			{/* Nav */}
			<nav className="bg-white   w-full h-auto py-7">
				<Header />
			</nav>
			<body className={inter.className}>{children}</body>
		</html>
	);
}

