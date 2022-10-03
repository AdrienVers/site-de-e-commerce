import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { Outlet, useLocation, Navigate } from 'react-router-dom';

function Private() {
    const { currentUser } = useContext(UserContext);
    console.log('PRIVATE', currentUser);

    if (!currentUser) {
        return <Navigate to="/" />;
    }

    return (
        <div className="private-container">
            <Outlet />
        </div>
    );
}

export default Private;
