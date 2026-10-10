'use client';

import React, { useSyncExternalStore } from 'react';

// সিস্টেম ক্লক থেকে ডেটা পড়ার জন্য সাবস্ক্রাইব ফাংশন
const subscribe = (callback: () => void) => {
    const interval = setInterval(callback, 1000); // প্রতি সেকেন্ডে চেক করবে
    return () => clearInterval(interval);
};

// ক্লায়েন্ট সাইডে তারিখ বের করার ফাংশন
const getSnapshot = () => {
    const today = new Date();
    const days = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'];
    const months = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
    
    return `${days[today.getDay()]}, ${today.getDate()} ${months[today.getMonth()]}, ${today.getFullYear()}`;
};

// সার্ভার সাইডে রেন্ডার হওয়ার সময় খালি স্ট্রিং রিটার্ন করবে
const getServerSnapshot = () => '';

const DateDisplay = () => {
    const currentDate = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    // সার্ভার সাইডে রেন্ডার হওয়ার সময় currentDate খালি থাকবে, তাই কিছুই দেখাবে না
    if (!currentDate) {
        return null; // অথবা <p className="text-[11px] text-gray-400">লোড হচ্ছে...</p>
    }

    return (
        <p className="text-[11px] text-gray-500 font-medium">
            {currentDate}
        </p>
    );
};

export default DateDisplay;