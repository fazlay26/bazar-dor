import React from 'react';
import { PriceItem } from '@/types';
import CategoryContent from '@/app/components/CategoryContent';
import EmptyState from '@/app/components/EmptyState';


interface CategoryPageProps {
    params: Promise<{ slug: string }>;
}
export const instant = false;


async function getProductsByCategory(slug: string): Promise<PriceItem[]> {
    const res = await fetch(
        `https://openapi.programming-hero.com/api/bazardor/products?category=${slug}`,
        { next: { revalidate: 3600 } }
    );
    
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
    const { slug } = await params;
    const products = await getProductsByCategory(slug);
 if (products.length === 0) {
        return (
            <div className="w-full bg-gray-50 min-h-screen py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <EmptyState
                        title="ক্যাটাগরি খুঁজে পাওয়া যায়নি"
                        message={`দুঃখিত, "${slug}" নামে কোনো ক্যাটাগরি নেই। অনুগ্রহ করে হোম পেজে ফিরে যান।`}
                    />
                </div>
            </div>
        );
    }
    
    const categoryName = products[0]?.categoryNameBn || slug;
    const categoryIcon = products[0]?.categoryIcon;

    return (
        <div className="w-full bg-gray-50 min-h-screen py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                
                <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6 flex items-center gap-4">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-3xl">
                        {categoryIcon}
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900 mb-1">
                            {categoryName}
                        </h1>
                        <p className="text-sm text-gray-500">
                            প্রতিটি পণ্যের আজকের দাম ও পরিবর্তন
                        </p>
                    </div>
                </div>

                <CategoryContent products={products} />


            </div>
        </div>
    );
};

export default CategoryPage;