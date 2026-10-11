import React from 'react';
import Link from 'next/link';


import ProtectedRoute from '../components/ProtectedRoute';
import ProfileContent from '../components/ProfileContent';

const MyAccountPage = () => {
    return (
        <ProtectedRoute>
            <ProfileContent />
        </ProtectedRoute>
    );
};

export default MyAccountPage;