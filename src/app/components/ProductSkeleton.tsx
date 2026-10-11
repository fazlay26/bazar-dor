

const ProductSkeleton = () => {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-4 animate-pulse">
           
            <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div className="flex flex-col flex-1 gap-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
            </div>

           
            <div className="flex items-end justify-between mt-4">
                <div className="flex flex-col gap-2">
                    <div className="h-3 bg-gray-200 rounded w-16"></div>
                    <div className="h-5 bg-gray-200 rounded w-20"></div>
                </div>
                <div className="h-6 bg-gray-200 rounded w-14"></div>
            </div>
        </div>
    );
};

export default ProductSkeleton;