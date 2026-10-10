import React, { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PriceItem } from '@/types';

interface DetailPageProps {
    params: Promise<{ productId: string }>;
}
export const instant = false;

export async function generateStaticParams() {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products');
    const products: PriceItem[] = await res.json();

    return products.map((product) => ({
        productId: product.slug,
    }));
}


async function getAllProducts(): Promise<PriceItem[]> {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products', {
        next: { revalidate: 3600 }
    });
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
}


async function getProductBySlug(slug: string): Promise<PriceItem | null> {
    const products = await getAllProducts();
    console.log(products);
    return products.find((item) => item.slug === slug) || null;
}


const translateUnit = (unit: string) => {
    const units: Record<string, string> = {
        'kg': 'কেজি',
        'litre': 'লিটার',
        'piece': 'পিস',
        'dozen': 'ডজন',
    };
    return units[unit] || unit;
};

const ProductDetailPage = async ({ params }: DetailPageProps) => {
    const { productId } = await params;
    const product = await getProductBySlug(productId);

    if (!product) notFound();

   
    const allMins = product.markets.map((m) => m.min);
    const allMaxs = product.markets.map((m) => m.max);
    const lowestPrice = Math.min(...allMins);
    const highestPrice = Math.max(...allMaxs);
    const averagePrice = Math.round(
        product.markets.reduce((sum, m) => sum + (m.min + m.max) / 2, 0) / product.markets.length
    );

    const isUp = product.change.dir === 'up';
    const isDown = product.change.dir === 'down';

    return (
            <div className="w-full bg-gray-50 min-h-screen py-6">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

               
                <nav className="text-xs text-gray-500 mb-4 flex items-center gap-2">
                    <Link href="/" className="hover:text-green-600">হোম</Link>
                    <span>›</span>
                    <Link href={`/category/${product.category}`} className="hover:text-green-600">
                        {product.categoryNameBn}
                    </Link>
                    <span>›</span>
                    <span className="text-gray-700 font-medium">{product.nameBn}</span>
                </nav>

                
                <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6 flex justify-between items-start gap-4">
                   
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-3xl">
                            {product.image || product.categoryIcon}
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 mb-1">
                                {product.nameBn}
                            </h1>
                            <p className="text-sm text-gray-500">
                                প্রতি {translateUnit(product.unit)} • ১২টি বাজার থেকে সংগৃহীত
                            </p>
                            <p className={`text-xs mt-1 font-medium ${isUp ? 'text-red-500' : isDown ? 'text-green-600' : 'text-gray-500'}`}>
                                আজকের দাম {isUp ? 'বেড়েছে' : isDown ? 'কমেছে' : 'অপরিবর্তিত'}: {Math.abs(product.change.pct)}%
                            </p>
                        </div>
                    </div>

                    
                    <div className="bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 text-center min-w-[140px]">
                        <p className="text-xs text-gray-500 mb-1">আজকের দাম</p>
                        <p className="text-3xl font-bold text-gray-900">
                            {product.today}
                        </p>
                        <p className="text-xs text-gray-500 mb-1">টাকা / {translateUnit(product.unit)}</p>
                        <p className={`text-xs font-bold flex items-center justify-center gap-1 ${isUp ? 'text-red-500' : isDown ? 'text-green-600' : 'text-gray-500'}`}>
                            {isUp && '▲'} {isDown && '▼'} {!isUp && !isDown && '●'} {Math.abs(product.change.pct)}%
                        </p>
                    </div>
                </div>

               
                <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
                    <h2 className="text-base font-bold text-gray-800 mb-4">
                        দামের সারসংক্ষেপ
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        
                        <div className="border border-green-200 bg-green-50 rounded-xl p-4">
                            <p className="text-xs text-green-700 mb-1">সর্বনিম্ন</p>
                            <p className="text-xl font-bold text-green-700 mb-1">{lowestPrice} টাকা</p>
                            <p className="text-[11px] text-gray-500">সমগ্র দেশের মধ্যে সবচেয়ে সস্তা</p>
                        </div>

                        
                        <div className="border border-red-200 bg-red-50 rounded-xl p-4">
                            <p className="text-xs text-red-700 mb-1">সর্বোচ্চ</p>
                            <p className="text-xl font-bold text-red-700 mb-1">{highestPrice} টাকা</p>
                            <p className="text-[11px] text-gray-500">সমগ্র দেশের মধ্যে সবচেয়ে ব্যয়বহুল</p>
                        </div>

                       
                        <div className="border border-green-200 bg-green-50 rounded-xl p-4">
                            <p className="text-xs text-green-700 mb-1">গড় দাম</p>
                            <p className="text-xl font-bold text-green-700 mb-1">{averagePrice} টাকা</p>
                            <p className="text-[11px] text-gray-500">সব বাজারের গড় হিসাব করে</p>
                        </div>
                    </div>
                </div>

               
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                    <h2 className="text-base font-bold text-gray-800 mb-4">
                        বাজারভিত্তিক আজকের দাম
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-gray-200 text-left text-xs text-gray-500">
                                    <th className="pb-3 font-medium">বাজার</th>
                                    <th className="pb-3 font-medium">বিভাগ</th>
                                    <th className="pb-3 font-medium text-right">সর্বনিম্ন</th>
                                    <th className="pb-3 font-medium text-right">সর্বোচ্চ</th>
                                    <th className="pb-3 font-medium text-right">গড়</th>
                                </tr>
                            </thead>
                            <tbody>
                                {product.markets.map((market, index) => {
                                    const avg = Math.round((market.min + market.max) / 2);
                                    return (
                                        <tr 
                                            key={index} 
                                            className="border-b border-gray-100 last:border-0 hover:bg-gray-50"
                                        >
                                            <td className="py-3 font-medium text-gray-800">
                                                {market.market}
                                            </td>
                                            <td className="py-3 text-gray-500">
                                                {market.division}
                                            </td>
                                            <td className="py-3 text-right text-gray-700">
                                                {market.min} টাকা
                                            </td>
                                            <td className="py-3 text-right text-gray-700">
                                                {market.max} টাকা
                                            </td>
                                            <td className="py-3 text-right font-semibold text-gray-900">
                                                {avg} টাকা
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductDetailPage;