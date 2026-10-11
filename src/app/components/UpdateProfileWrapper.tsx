'use client';

import React from 'react';

import UpdateProfileForm from './UpdateProfileForm';
import { useSession } from '../lib/auth-client';

const UpdateProfileWrapper = () => {
    const { data: session, isPending } = useSession();

    if (isPending || !session) {
        return (
            <div className="w-full min-h-screen flex items-center justify-center">
                <span className="loading loading-spinner loading-lg text-[#2e7d32]"></span>
            </div>
        );
    }

    // key ব্যবহার করে ফর্ম রিমাউন্ট করা হচ্ছে—যাতে সেশনের ডেটা ইনিশিয়াল ভ্যালু হিসেবে যায়
    return (
        <UpdateProfileForm
            key={session.user.id}
            initialName={session.user.name || ''}
            initialEmail={session.user.email || ''}
        />
    );
};

export default UpdateProfileWrapper;