import React from 'react';
import Link from 'next/link';
import { IoIosSearch } from 'react-icons/io';

interface EmptyStateProps {
    title?: string;
    message?: string;
}

const EmptyState = ({ 
    title = 'কোনো পণ্য পাওয়া যায়নি',
    message = 'দুঃখিত, এই ক্যাটাগরিতে এখন কোনো পণ্য নেই। অনুগ্রহ করে অন্য ক্যাটাগরি দেখুন।'
}: EmptyStateProps) => {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-2xl p-12 text-center">
            
            <div className="text-6xl flex justify-center mb-4"><IoIosSearch/></div>

            
            <h2 className="text-xl font-bold text-gray-800 mb-2">
                {title}
            </h2>

            
            <p className="text-sm text-gray-500 mb-6 max-w-md mx-auto">
                {message}
            </p>

           
            <Link
                href="/"
                className="inline-block bg-[#2e7d32] hover:bg-[#1b5e20] text-white text-sm font-medium px-6 py-3 rounded-md transition-colors"
            >
                হোম পেজে ফিরে যান
            </Link>
        </div>
    );
};

export default EmptyState;