'use client';

interface SortDropdownProps {
    sortBy: string;
    onSortChange: (value: string) => void;
}

const SortDropdown = ({ sortBy, onSortChange }: SortDropdownProps) => {
    return (
        <div className="flex items-center gap-3">
            <span className="text-sm text-gray-600">সাজান:</span>
            <select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
                className="select select-bordered select-sm bg-white text-sm"
            >
                <option value="default">ডিফল্ট</option>
                <option value="price-asc">কম দাম থেকে বেশি</option>
                <option value="price-desc">বেশি দাম থেকে কম</option>
                
            </select>
        </div>
    );
};

export default SortDropdown;