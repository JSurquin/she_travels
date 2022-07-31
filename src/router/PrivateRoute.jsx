import { Outlet, Navigate, useLocation } from 'react-router';
import { AuthContext } from '@contexts/auth';
import { useContext } from 'react';
const PrivateRoute = () => {
    const auth = useContext(AuthContext);
    const location = useLocation();

    return auth ? <Outlet /> : <Navigate state={{ from: location }} to="/" />;
};

export default PrivateRoute;
