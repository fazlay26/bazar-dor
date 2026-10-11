// src/app/providers.tsx
'use client';

import React from 'react';
import { Toaster } from 'react-hot-toast';

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <Toaster
                position="top-center"
                toastOptions={{
                    duration: 3000,
                    style: {
                        background: '#fff',
                        color: '#333',
                        fontSize: '14px',
                        borderRadius: '8px',
                        border: '1px solid #e5e7eb',
                    },
                    success: {
                        iconTheme: {
                            primary: '#2e7d32',
                            secondary: '#fff',
                        },
                    },
                    error: {
                        iconTheme: {
                            primary: '#dc2626',
                            secondary: '#fff',
                        },
                    },
                }}
            />
        </>
    );
};

export default Providers;