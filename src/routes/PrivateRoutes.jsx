import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoutes = () => {
  const data = false;

  return data ? <Outlet /> : <Navigate to="/login" />;
};
