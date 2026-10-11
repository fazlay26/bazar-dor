'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { authClient } from '../lib/auth-client';



interface UpdateProfileFormProps {
    initialName?: string;
    initialEmail?: string;
}

const UpdateProfileForm = ({ initialName = '', initialEmail = '' }: UpdateProfileFormProps) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState(initialName); // ← সরাসরি ইনিশিয়াল ভ্যালু

   

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim()) {
            toast.error('নাম খালি রাখা যাবে না');
            return;
        }

        setLoading(true);

        try {
            const { error } = await authClient.updateUser({
                name: name.trim(),
            });

            if (error) {
                toast.error(error.message || 'আপডেট ব্যর্থ হয়েছে');
                setLoading(false);
                return;
            }

            toast.success('তথ্য সফলভাবে আপডেট হয়েছে!');
            setTimeout(() => {
                router.push('/my-account');
                router.refresh();
            }, 800);
        } catch (err) {
            console.error('Update Error:', err);
            toast.error('কিছু ভুল হয়েছে');
            setLoading(false);
        }
    };

    return (
        <div className="w-full bg-gray-50 min-h-screen py-8">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 mb-1">
                        তথ্য আপডেট করুন
                    </h1>
                    <p className="text-sm text-gray-500">
                        আপনার নাম পরিবর্তন করুন
                    </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                নাম
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="আপনার নাম"
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#2e7d32] focus:ring-1 focus:ring-[#2e7d32]"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                ইমেইল (পরিবর্তনযোগ্য নয়)
                            </label>
                            <input
                                type="email"
                                value={initialEmail}
                                disabled
                                className="w-full px-4 py-2.5 border border-gray-200 bg-gray-50 rounded-lg text-sm text-gray-500 cursor-not-allowed"
                            />
                        </div>

                        <div className="flex gap-3 pt-2">
                            <button
                                type="submit"
                                disabled={loading}
                                className="flex-1 bg-[#2e7d32] hover:bg-[#1b5e20] disabled:bg-gray-400 text-white text-sm font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                {loading && (
                                    <span className="loading loading-spinner loading-sm"></span>
                                )}
                                {loading ? 'আপডেট হচ্ছে...' : 'তথ্য আপডেট করুন'}
                            </button>

                            <button
                                type="button"
                                onClick={() => router.back()}
                                className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 text-sm font-medium rounded-lg transition-colors"
                            >
                                বাতিল
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfileForm;