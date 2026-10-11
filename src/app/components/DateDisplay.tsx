'use client';

import React, { useSyncExternalStore } from 'react';


const subscribe = (callback: () => void) => {
    const interval = setInterval(callback, 1000);
    return () => clearInterval(interval);
};


const getSnapshot = () => {
    const today = new Date();
    const days = ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'];
    const months = ['জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'];
    
    return `${days[today.getDay()]}, ${today.getDate()} ${months[today.getMonth()]}, ${today.getFullYear()}`;
};


const getServerSnapshot = () => '';

const DateDisplay = () => {
    const currentDate = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

    

    return (
        <p className="text-[11px] text-gray-500 font-medium">
            {currentDate}
        </p>
    );
};

export default DateDisplay;