import { PriceItem } from '@/types';
import Link from 'next/link';
import React from 'react';


interface ProductCardProps {
    item: PriceItem;
}

const ProductCard = ({ item }: ProductCardProps) => {
    const isUp = item.change.dir === 'up';
    const isDown = item.change.dir === 'down';

    const translateUnit = (unit: string) => {
        const units: Record<string, string> = {
            'kg': 'কেজি',
            'litre': 'লিটার',
            'piece': 'পিস',
            'dozen': 'ডজন',
        };
        return units[unit] || unit;
    };

    return (
       <Link href={`/products/${item.slug}`}>
        <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col justify-between hover:shadow-md transition-shadow">
            
            
            <div className="flex items-start gap-3">
                
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-2xl">
                    {item.image || item.categoryIcon || '🛒'}
                </div>
                
               
                <div className="flex flex-col">
                    <h3 className="font-bold text-gray-800 text-sm leading-tight">
                        {item.nameBn}
                    </h3>
                    <p className="text-xs text-gray-500">
                        প্রতি {translateUnit(item.unit)}
                    </p>
                </div>
            </div>

           
            <div className="flex items-end justify-between mt-4">
                {/* দাম */}
                <div className="flex flex-col">
                    <span className="text-xs text-gray-500">আজকের দাম</span>
                    <span className="text-lg font-bold text-gray-900">
                        {item.today} টাকা
                    </span>
                </div>

                
                <div
                    className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-md ${
                        isUp
                            ? 'bg-red-50 text-red-600'
                            : isDown
                            ? 'bg-green-50 text-green-600'
                            : 'bg-gray-100 text-gray-500'
                    }`}
                >
                    {isUp && <span>▲</span>}
                    {isDown && <span>▼</span>}
                    {!isUp && !isDown && <span>●</span>}
                    <span>{Math.abs(item.change.pct)}%</span>
                </div>
            </div>
        </div>
       </Link>
    );
};

export default ProductCard;