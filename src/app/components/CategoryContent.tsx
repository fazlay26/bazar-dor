'use client';

import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';


import { PriceItem } from '@/types';
import SortDropdown from './SortDropdown.tsx';
import EmptyState from './EmptyState';

interface CategoryContentProps {
    products: PriceItem[];
}

const CategoryContent = ({ products }: CategoryContentProps) => {
    const [sortBy, setSortBy] = useState('default');

   
    const sortedProducts = useMemo(() => {
        const items = [...products];

        switch (sortBy) {
            case 'price-asc':
                return items.sort((a, b) => a.today - b.today);
            case 'price-desc':
                return items.sort((a, b) => b.today - a.today);
            case 'name':
                return items.sort((a, b) => a.nameBn.localeCompare(b.nameBn, 'bn'));
            default:
                return items;
        }
    }, [products, sortBy]);

    if (products.length === 0) {
        return (
            <EmptyState
                title="কোনো পণ্য পাওয়া যায়নি"
                message="দুঃখিত, এই ক্যাটাগরিতে এখন কোনো পণ্য নেই। অনুগ্রহ করে অন্য ক্যাটাগরি দেখুন বা হোম পেজে ফিরে যান।"
            />
        );
    }

    return (
        <>
            
            <div className="flex justify-end mb-4">
                <SortDropdown sortBy={sortBy} onSortChange={setSortBy} />
            </div>

            
            <p className="text-sm text-gray-500 mb-4">
                মোট {sortedProducts.length}টি পণ্য দেখানো হচ্ছে
            </p>

           
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {sortedProducts.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </>
    );
};

export default CategoryContent;