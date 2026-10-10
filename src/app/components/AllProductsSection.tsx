import React from 'react';
import ProductCard from './ProductCard';
import { PriceItem } from '@/types';

interface AllProductsSectionProps {
    products: PriceItem[];
}

const AllProductsSection = ({ products }: AllProductsSectionProps) => {
    if (products.length === 0) return null;

    return (
        <section id="সব-পণ্য" className="w-full py-8 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                
                <div className="flex flex-col mb-6">
                    <h2 className="text-xl font-bold text-gray-800">
                        সব পণ্য
                    </h2>
                    <p className="text-xs text-gray-500 mt-1">
                        মোট {products.length}টি পণ্য দেখানো হচ্ছে
                    </p>
                </div>

                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map((item) => (
                        <ProductCard key={item.id} item={item} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AllProductsSection;