import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DateDisplay from './DateDisplay';

const HeroSection = () => {
    return (
        <section className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
                <div className="bg-[#F0F7F2] rounded-2xl px-8 md:flex flex-col md:flex-row items-center gap-8">
                    
                    
                    <div className="flex-1 space-y-4">
                       
                        <div className="inline-block bg-[#DCFCE7] text-[#166534] text-xs font-semibold px-3 py-1 rounded-md">
                          <DateDisplay></DateDisplay>
                        </div>

                        
                        <h1 className=" text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            আজকের বাজারের দাম এক নজরে
                        </h1>

                        
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-lgb">
                            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বোচ্চ এবং দামের পরিবর্তন এক জায়গায়।
                        </p>

                        
                        <div className="pt-2">
                            <a 
                                href="#সব-পণ্য" 
                                className="inline-block bg-[#2e7d32] hover:bg-[#1b5e20] text-white text-sm font-medium px-6 py-3 rounded-md transition-colors"
                            >
                                সব পণ্য দেখুন
                            </a>
                        </div>
                    </div>

                    
                    <div className="flex-1 flex justify-center md:justify-end">
                        
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            <Image
                                src="/bazar-hero.png" // ডেমো ইমেজ লিংক
                                alt="বাজারের ঝুড়ি"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;