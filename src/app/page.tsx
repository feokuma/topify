"use client";
import { Button } from "primereact/button"
import { Image } from "primereact/image"
import AppShell from "./app-shell/AppShell";

export default function Home() {
	return (
		<AppShell>
			<h1 className="text-3xl font-bold underline">
				Hello world!
			</h1>
			<Button label="Click Me" icon="pi pi-check" />
			<Image
				src="/next.svg"
				alt="Descrição da imagem"
				width="200"
				height="200"
			/>
		</AppShell>
	);
}
