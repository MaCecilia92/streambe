import { Navigate, Outlet } from 'react-router-dom';
import useLocalStorage from '../CustomHook/useLocalStorage';

export const PrivateRoutes = () => {
  const [data] = useLocalStorage('session');
  return data !== null ? <Outlet /> : <Navigate to="/login" />;
};
