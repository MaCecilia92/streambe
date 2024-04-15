import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoutes = ({ user }) => {
  return user ? <Outlet /> : <Navigate to="/login" />;
};

PrivateRoutes.propTypes = {
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

PrivateRoutes.defaultProps = {
  user: null,
};
