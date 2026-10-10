import Image from 'next/image';
import React from 'react';
import NavLinks from './NavLinks';
import DateDisplay from './DateDisplay';
import PriceMarquee from './PriceMarquee';

const Navbar = () => {
   

    return (
        <nav className="w-full bg-white border-b border-gray-200 py-3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                
                {/* বাম দিকের অংশ: লোগো এবং তারিখ */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#05893E] rounded-full flex items-center justify-center text-xl">
                        <Image width={10} height={10} src={'/logo-icon.png'} alt='logo-icon'></Image>
                    </div>
                    
                    {/* টেক্সট অংশ */}
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold text-gray-800 leading-tight">
                            বাজার দর
                        </h1>
                        <DateDisplay></DateDisplay>
                    </div>
                </div>

                {/* ডান দিকের অংশ: লগইন এবং সাইনআপ বাটন */}
                <div className="flex items-center gap-4">
                    <button className="text-sm font-medium text-gray-700 hover:text-green-600 transition-colors">
                        সাইন ইন
                    </button>
                    <button className="bg-[#2e7d32] hover:bg-[#1b5e20] text-white text-sm font-medium px-5 py-2 rounded-md transition-colors">
                        সাইন আপ
                    </button>
                </div>

            </div>
            <NavLinks></NavLinks>
            <PriceMarquee></PriceMarquee>
        </nav>
    );
};

export default Navbar;