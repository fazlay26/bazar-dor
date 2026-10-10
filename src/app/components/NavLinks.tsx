import React from 'react';
import Link from 'next/link';

interface Category {
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
};
async function getCategories(): Promise<Category[]> {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/categories', {
        next: { revalidate: 3600 } // ১ ঘণ্টা পরপর ডেটা আপডেট হবে (Caching)
    });
    
    if (!res.ok) {
        throw new Error('Failed to fetch categories');
    }
    
    return res.json();
}

const NavLinks = async () => {
    const categories = await getCategories();

    return (
        <div className="w-full bg-white border-b border-gray-200 py-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ul className="flex items-center gap-6 md:gap-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
                    {categories.map((category:Category) => (
                        <li key={category.id}>
                            <Link 
                                href={`/category/${category.slug}`} 
                                className="flex items-center gap-1.5 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
                            >
                                {/* API-তে 'dal' এর আইকন খালি আছে, তাই ফলব্যাক আইকন দেওয়া হয়েছে */}
                                <span className="text-lg">{category.icon || '🫘'}</span>
                                <span>{category.nameBn}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NavLinks;