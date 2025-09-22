"use client";
import React from 'react';
import pkg from '../../../package.json';

export default function Footer() {
	return (
			<footer className="fixed left-0 right-0 bottom-0 border-t surface-border bg-surface-0 p-3 text-sm text-color-secondary">
				<div className="container mx-auto flex justify-center gap-4">
					<span>© {new Date().getFullYear()} Topify</span>
					<span>v{pkg.version}</span>
				</div>
		</footer>
	);
}
