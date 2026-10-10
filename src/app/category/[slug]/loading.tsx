import ProductSkeleton from '@/app/components/ProductSkeleton';
import React from 'react';


const Loading = () => {
    return (
        <div className="w-full bg-gray-50 min-h-screen py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

               
                <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6 flex items-center gap-4 animate-pulse">
                    <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                    <div className="flex flex-col gap-2">
                        <div className="h-6 bg-gray-200 rounded w-32"></div>
                        <div className="h-4 bg-gray-200 rounded w-48"></div>
                    </div>
                </div>

               
                <div className="flex justify-end mb-4">
                    <div className="h-8 bg-gray-200 rounded w-40 animate-pulse"></div>
                </div>

                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Array.from({ length: 6 }).map((item, index) => (
                        <ProductSkeleton key={index} />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Loading;