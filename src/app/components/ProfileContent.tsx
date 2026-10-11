'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from '../lib/auth-client';


const ProfileContent = () => {
    const { data: session, isPending } = useSession();

    if (isPending || !session) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center">
                <span className="loading loading-spinner loading-lg text-[#2e7d32]"></span>
            </div>
        );
    }

    const { user } = session;
    const userInitial = user.name?.charAt(0).toUpperCase() || 'U';

    return (
        <div className="w-full bg-gray-50 min-h-screen py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

               
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 mb-1">
                        আমার প্রোফাইল
                    </h1>
                    <p className="text-sm text-gray-500">
                        আপনার অ্যাকাউন্ট তথ্য দেখুন
                    </p>
                </div>

                
                <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                        {/* বাম: ছবি + নাম + ইমেইল */}
                        <div className="flex items-center gap-4">
                            {user.image ? (
                                <Image
                                    src={user.image}
                                    alt={user.name || 'User'}
                                    width={64}
                                    height={64}
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                            ) : (
                                <div className="w-16 h-16 rounded-full bg-[#2e7d32] text-white flex items-center justify-center text-2xl font-bold">
                                    {userInitial}
                                </div>
                            )}
                            <div>
                                <h2 className="text-lg font-bold text-gray-900">
                                    {user.name}
                                </h2>
                                <p className="text-sm text-gray-500">
                                    {user.email}
                                </p>
                            </div>
                        </div>

                        
                    </div>
                </div>

                
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                    <h3 className="text-base font-bold text-gray-800 mb-4">
                        তথ্য
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                        নাম পরিবর্তন করতে চাইলে "তথ্য আপডেট করুন" বাটনে ক্লিক করুন।
                    </p>
                    <Link
                        href="/my-account/update"
                        className="inline-block bg-[#2e7d32] hover:bg-[#1b5e20] text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors"
                    >
                        তথ্য আপডেট করুন
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ProfileContent;