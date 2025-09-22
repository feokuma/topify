"use client";

import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function AppShell({ children }: { children: React.ReactNode }) {
	return (
		<div className="max-h-screen flex flex-col">
			<Header
				onToggleMenu={() => {
					console.log("toggle menu");
				}}
			/>
			<main>{children}</main>
			<Footer />
		</div>
	);
}

