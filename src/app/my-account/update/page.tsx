import ProtectedRoute from '@/app/components/ProtectedRoute';
import UpdateProfileWrapper from '@/app/components/UpdateProfileWrapper';
import React from 'react';


const UpdateProfilePage = async () => {
    
    
    return (
        <ProtectedRoute>
            <UpdateProfileWrapper />
        </ProtectedRoute>
    );
};

export default UpdateProfilePage;