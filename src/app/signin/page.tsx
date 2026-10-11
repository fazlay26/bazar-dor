'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { signIn } from '../lib/auth-client';


const SignInPage = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

   
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            toast.error('ইমেইল এবং পাসওয়ার্ড দিন');
            return;
        }

        setLoading(true);

        try {
            const { data, error } = await signIn.email({
                email: formData.email,
                password: formData.password,
                callbackURL: '/',
            });

            if (error) {
                toast.error(error.message || 'লগইন ব্যর্থ হয়েছে');
                setLoading(false);
                return;
            }

            toast.success('সফলভাবে লগইন হয়েছে!');
            setTimeout(() => router.push('/'), 1000);
        } catch {
            toast.error('কিছু ভুল হয়েছে। আবার চেষ্টা করুন।');
            setLoading(false);
        }
    };

    
    const handleGoogleSignIn = async () => {
        try {
            await signIn.social({
                provider: 'google',
                callbackURL: '/',
            });
        } catch {
            toast.error('Google লগইন ব্যর্থ হয়েছে');
        }
    };

    
    const handleGithubSignIn = async () => {
        try {
            await signIn.social({
                provider: 'github',
                callbackURL: '/',
            });
        } catch {
            toast.error('GitHub লগইন ব্যর্থ হয়েছে');
        }
    };

    return (
        <div className="w-full bg-gray-50 min-h-screen flex items-center justify-center py-12 px-4">
            <div className="w-full max-w-md">
                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

                    
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-gray-900 mb-2">
                            লগইন করুন
                        </h1>
                        <p className="text-sm text-gray-500">
                            আপনার অ্যাকাউন্টে প্রবেশ করুন
                        </p>
                    </div>

                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                ইমেইল
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#2e7d32] focus:ring-1 focus:ring-[#2e7d32]"
                            />
                        </div>

                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                পাসওয়ার্ড
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="আপনার পাসওয়ার্ড"
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#2e7d32] focus:ring-1 focus:ring-[#2e7d32]"
                            />
                        </div>

                       
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#2e7d32] hover:bg-[#1b5e20] disabled:bg-gray-400 text-white text-sm font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                            {loading && (
                                <span className="loading loading-spinner loading-sm"></span>
                            )}
                            {loading ? 'লগইন হচ্ছে...' : 'লগইন করুন'}
                        </button>
                    </form>

                    
                    <div className="flex items-center gap-4 my-6">
                        <div className="flex-1 h-px bg-gray-200"></div>
                        <span className="text-xs text-gray-400">অথবা</span>
                        <div className="flex-1 h-px bg-gray-200"></div>
                    </div>

                    
                    <div className="space-y-3">
                        <button
                            onClick={handleGoogleSignIn}
                            type="button"
                            className="w-full flex items-center justify-center gap-3 border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium py-2.5 rounded-lg transition-colors"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            Google দিয়ে লগইন করুন
                        </button>

                        <button
                            onClick={handleGithubSignIn}
                            type="button"
                            className="w-full flex items-center justify-center gap-3 border border-gray-300 hover:bg-gray-50 text-gray-700 text-sm font-medium py-2.5 rounded-lg transition-colors"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.3 2.8.1 3.2.8.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0012 .3"/>
                            </svg>
                            GitHub দিয়ে লগইন করুন
                        </button>
                    </div>

                    
                    <p className="text-center text-sm text-gray-600 mt-6">
                        অ্যাকাউন্ট নেই?{' '}
                        <Link href="/signup" className="text-[#2e7d32] font-medium hover:underline">
                            রেজিস্টার করুন
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default SignInPage;