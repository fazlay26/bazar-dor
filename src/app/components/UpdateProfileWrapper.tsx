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

    
    return (
        <UpdateProfileForm
            key={session.user.id}
            initialName={session.user.name || ''}
            initialEmail={session.user.email || ''}
        />
    );
};

export default UpdateProfileWrapper;