import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AppShell from './AppShell';

vi.mock('./Header', () => ({ default: () => <header data-testid="header">Header</header> }));
vi.mock('./Footer', () => ({ default: () => <footer data-testid="footer">Footer</footer> }));

describe('AppShell', () => {
  it('deve renderizar o Header', () => {
    render(<AppShell>Conteúdo</AppShell>);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('deve renderizar o Footer', () => {
    render(<AppShell>Conteúdo</AppShell>);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
