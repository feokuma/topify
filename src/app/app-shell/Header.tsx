'use client';
import React from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';

type HeaderProps = {
  onToggleMenu: () => void;
};

export default function Header({ onToggleMenu }: HeaderProps) {
  const start = (
    <div className="flex items-center gap-2 h-full justify-center">
      <Button
        icon="pi pi-bars"
        text
        aria-label="Abrir menu"
        onClick={onToggleMenu}
        className="lg:hidden self-center"
      />
      <Image src="/topify.svg" alt="Logo Topify" width="128" className="self-center" />
    </div>
  );

  const end = (
    <div className="flex items-center gap-2">
      <Button icon="pi pi-bell" text aria-label="Notificações" />
      <Button icon="pi pi-user" text aria-label="Perfil" />
    </div>
  );

  return (
    <header className="border-b surface-border bg-surface-0">
      <Toolbar start={start} end={end} />
    </header>
  );
}
