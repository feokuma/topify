'use client';

import Header from "./Header";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header onToggleMenu={() => {console.log('toggle menu'); }} />
      {children}
    </div>
  );
}