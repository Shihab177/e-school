import React, { Children } from 'react';


import { Navigate } from 'react-router';
import useAuthStore from '../store/authStore/useAuthStore';



const AdminRoute = ({ children }) => {
   const { authStore} = useAuthStore();
  

    if (authStore?.role!== 'admin') {
        return <Navigate state={{ from: location.pathname }} to="/forbidden"></Navigate>
    }

    return children;
};

export default AdminRoute;