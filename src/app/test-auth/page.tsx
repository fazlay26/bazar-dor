'use client';


import toast from 'react-hot-toast';
import { useSession } from '../lib/auth-client';

export default function TestAuthPage() {
    const { data: session, isPending } = useSession();

    if (isPending) return <p>লোড হচ্ছে...</p>;

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Auth Test</h1>
            {session ? (
                <div>
                    <p>✅ লগইন করা আছে</p>
                    <p>নাম: {session.user.name}</p>
                    <p>ইমেইল: {session.user.email}</p>
                </div>
            ) : (
                <p>❌ লগইন করা নেই</p>
            )}

            
            <div className="mt-4 flex gap-2">
                <button
                    onClick={() => toast.success('সফলভাবে কাজ হয়েছে!')}
                    className="bg-green-600 text-white px-4 py-2 rounded"
                >
                    Success Toast
                </button>
                <button
                    onClick={() => toast.error('কিছু ভুল হয়েছে!')}
                    className="bg-red-600 text-white px-4 py-2 rounded"
                >
                    Error Toast
                </button>
            </div>
        </div>
    );
}