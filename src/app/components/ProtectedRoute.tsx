'use client';

import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useSession } from '../lib/auth-client';


interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { data: session, isPending } = useSession();
    const router = useRouter();
    const hasRedirected = useRef(false); // ← নতুন: ডুপ্লিকেট প্রতিরোধের ফ্ল্যাগ

    useEffect(() => {
        // সেশন লোড শেষ এবং ইউজার লগইন না থাকলে
        if (!isPending && !session && !hasRedirected.current) {
            hasRedirected.current = true; // ফ্ল্যাগ সেট করে দিচ্ছি
            toast.error('এই পেজ দেখতে লগইন করুন');
            router.push('/signin');
        }
    }, [session, isPending, router]);

    // সেশন লোড হওয়ার সময় স্পিনার
    if (isPending) {
        return (
            <div className="w-full min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-50">
                <span className="loading loading-spinner loading-lg text-[#2e7d32]"></span>
                <p className="text-sm text-gray-500">যাচাই করা হচ্ছে...</p>
            </div>
        );
    }

    // লগইন না থাকলে কিছুই দেখাবে না
    if (!session) {
        return null;
    }

    // লগইন থাকলে চিলড্রেন দেখাবে
    return <>{children}</>;
};

export default ProtectedRoute;