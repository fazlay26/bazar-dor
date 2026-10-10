import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-white border-t border-gray-200 py-4 mt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-600">
                    
                   
                    <p>
                        বাজার দর — প্রান্তজনীন পণ্যের দাম এক নজরে।
                    </p>

                   
                    <p className="text-gray-500">
                        সকল দাম সাপ্তাহিক; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
                    </p>

                </div>
            </div>
        </footer>
    );
};

export default Footer;