import React from 'react';
import ProductCard from './ProductCard';
import { PriceItem } from '@/types';

interface PriceIncreaseSectionProps {
    products: PriceItem[];
}

const PriceIncreaseSection = ({ products }: PriceIncreaseSectionProps) => {

    const increasedProducts = products.filter(
        (item) => item.change.dir === 'up'
    );


    if (increasedProducts.length === 0) return null;

    return (
        <section className="w-full py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


                <div className="flex items-center gap-2 mb-6">
                    <span className="text-red-500 text-lg">▲</span>
                    <h2 className="text-xl font-bold text-gray-800">
                        আজ দাম বেড়েছে
                    </h2>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {increasedProducts
                        .sort((a, b) => b.change.pct - a.change.pct) 
                        .slice(0, 6)                                  
                        .map((item) => (
                            <ProductCard key={item.id} item={item} />
                        ))}
                </div>

            </div>
        </section>
    );
};

export default PriceIncreaseSection;