import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from './Footer';
import pkg from '../../../package.json';

describe('Footer', () => {
  it('deve exibir a versão correta do package.json', () => {
    render(<Footer />);
    expect(screen.getByText(`v${pkg.version}`)).toBeInTheDocument();
  });
});
