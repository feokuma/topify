'use client';
import { PrimeReactProvider } from 'primereact/api';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <PrimeReactProvider value={{ ripple: true, inputStyle: 'outlined' }}>
            {children}
        </PrimeReactProvider>
    );
}