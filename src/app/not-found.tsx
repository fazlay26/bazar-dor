import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="w-full bg-gray-50 min-h-screen flex items-center justify-center py-12">
            <div className="max-w-md mx-auto px-4 text-center">
                
                {/* বড় 404 নম্বর */}
                <h1 className="text-7xl md:text-9xl font-bold text-[#2e7d32] mb-4">
                    ৪০৪
                </h1>

                {/* আইকন */}
                <div className="text-6xl mb-4">🔍</div>

                {/* টাইটেল */}
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    পেজটি খুঁজে পাওয়া যায়নি
                </h2>

                {/* মেসেজ */}
                <p className="text-sm text-gray-500 mb-8">
                    দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি নেই বা সরিয়ে ফেলা হয়েছে।
                </p>

                {/* CTA বাটন */}
                <Link
                    href="/"
                    className="inline-block bg-[#2e7d32] hover:bg-[#1b5e20] text-white text-sm font-medium px-6 py-3 rounded-md transition-colors"
                >
                    হোম পেজে ফিরে যান
                </Link>

            </div>
        </div>
    );
};

export default NotFound;