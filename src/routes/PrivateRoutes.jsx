import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoutes = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

PrivateRoutes.propTypes = {
  isAuthenticated: PropTypes.bool,
};

PrivateRoutes.defaultProps = {
  isAuthenticated: null,
};
