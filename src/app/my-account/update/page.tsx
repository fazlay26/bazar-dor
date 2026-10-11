import ProtectedRoute from '@/app/components/ProtectedRoute';
import UpdateProfileWrapper from '@/app/components/UpdateProfileWrapper';
import React from 'react';


const UpdateProfilePage = async () => {
    // সার্ভার সাইডে সেশন পাওয়া (ঐচ্ছিক)
    // তবে এখানে আমরা ProtectedRoute-এর ভেতরে থাকায় সেশন ক্লায়েন্টেও পাওয়া যাবে
    
    return (
        <ProtectedRoute>
            <UpdateProfileWrapper />
        </ProtectedRoute>
    );
};

export default UpdateProfilePage;