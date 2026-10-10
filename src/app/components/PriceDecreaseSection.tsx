import React from 'react';
import ProductCard from './ProductCard';
import { PriceItem } from '@/types';

interface PriceDecreaseSectionProps {
    products: PriceItem[];
}

const PriceDecreaseSection = ({ products }: PriceDecreaseSectionProps) => {
    // শুধু যে পণ্যগুলোর দাম কমেছে সেগুলো ফিল্টার করা হচ্ছে
    const decreasedProducts = products.filter(
        (item) => item.change.dir === 'down'
    );

    if (decreasedProducts.length === 0) return null;

    return (
        <section className="w-full py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* সেকশন হেডার */}
                <div className="flex items-center gap-2 mb-6">
                    <span className="text-green-600 text-lg">▼</span>
                    <h2 className="text-xl font-bold text-gray-800">
                        আজ দাম কমেছে
                    </h2>
                </div>

                {/* কার্ড গ্রিড */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {decreasedProducts.slice(0,6).map((item) => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PriceDecreaseSection;