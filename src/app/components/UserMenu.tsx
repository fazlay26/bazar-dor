'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useSession } from '../lib/auth-client';
import { signOut } from 'better-auth/api';


const UserMenu = () => {
    const { data: session, isPending } = useSession();
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    // বাইরে ক্লিক করলে ড্রপডাউন বন্ধ
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // লগআউট হ্যান্ডলার
const handleSignOut = async () => {
    try {
        const res = await fetch('/api/auth/sign-out', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({}),
        });

        if (!res.ok) {
            const errorData = await res.json().catch(() => ({}));
            console.error('SignOut Response Error:', errorData);
            throw new Error(errorData.message || 'Failed to sign out');
        }

        toast.success('সফলভাবে লগআউট হয়েছে');
        
        // সেশন স্টেট আপডেট করার জন্য
        router.push('/');
        router.refresh();
        
        // পেজ রিলোড করে সেশন ক্লিয়ার নিশ্চিত করা (বিকল্প)
        setTimeout(() => {
            window.location.reload();
        }, 500);
        
    } catch (error) {
        console.error('SignOut Error:', error);
        toast.error('লগআউট ব্যর্থ হয়েছে');
    }
};

    // লোডিং অবস্থায় স্কেলেটন
    if (isPending) {
        return (
            <div className="flex items-center gap-3 animate-pulse">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <div className="h-4 w-20 bg-gray-200 rounded"></div>
            </div>
        );
    }

    // লগইন না থাকলে সাইন ইন/সাইন আপ বাটন
    if (!session) {
        return (
            <div className="flex items-center gap-4">
                <Link
                    href="/signin"
                    className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
                >
                    সাইন ইন
                </Link>
                <Link
                    href="/signup"
                    className="bg-[#2e7d32] hover:bg-[#1b5e20] text-white text-sm font-medium px-5 py-2 rounded-md transition-colors"
                >
                    সাইন আপ
                </Link>
            </div>
        );
    }

    // লগইন থাকলে ইউজার মেনু
    const userInitial = session.user.name?.charAt(0).toUpperCase() || 'U';
    const userName = session.user.name || 'ব্যবহারকারী';

    return (
        <div className="relative" ref={menuRef}>
            {/* ট্রিগার বাটন */}
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 hover:bg-gray-50 rounded-full p-1 pr-3 transition-colors"
            >
                {/* অ্যাভাটার (ছবি না থাকলে নামের প্রথম অক্ষর) */}
                {session.user.image ? (
                    <img
                        src={session.user.image}
                        alt={userName}
                        className="w-8 h-8 rounded-full object-cover"
                    />
                ) : (
                    <div className="w-8 h-8 rounded-full bg-[#2e7d32] text-white flex items-center justify-center text-sm font-bold">
                        {userInitial}
                    </div>
                )}

                {/* ইউজারের নাম */}
                <span className="text-sm font-medium text-gray-700 max-w-[100px] truncate">
                    {userName.split(' ')[0]}
                </span>

                {/* ছোট ড্রপডাউন অ্যারো */}
                <svg className="w-3 h-3 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {/* ড্রপডাউন মেনু */}
            {open && (
                <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50">
                    {/* ইউজারের তথ্য */}
                    <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-sm font-semibold text-gray-800 truncate">
                            {userName}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                            {session.user.email}
                        </p>
                    </div>

                    {/* লিংকসমূহ */}
                    <Link
                        href="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        onClick={() => setOpen(false)}
                    >
                        হোম
                    </Link>
                    <Link
                        href="/my-account"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        onClick={() => setOpen(false)}
                    >
                        আমার অ্যাকাউন্ট
                    </Link>

                    {/* ডিভাইডার */}
                    <div className="border-t border-gray-100 my-1"></div>

                    {/* লগআউট বাটন */}
                    <button
                        onClick={handleSignOut}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                        লগআউট
                    </button>
                </div>
            )}
        </div>
    );
};

export default UserMenu;