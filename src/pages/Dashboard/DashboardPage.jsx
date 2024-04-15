import PropTypes from 'prop-types';
import { TableComponent } from '../../commons';
import { UserHeader } from '../../components';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const DashboardPage = ({ logOut }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/login');
    navigate(0);
  };

  return (
    <Flex
      w="100vw"
      p={10}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box w="100%">
        <UserHeader onLogOut={handleLogOut} />
      </Box>
      <Box textAlign="left" w="100%" pb={10}>
        <Heading as="h4" size="md">
          Dashboard
        </Heading>
      </Box>
      <Box flex="1" textAlign="center">
        <TableComponent />
      </Box>
    </Flex>
  );
};

DashboardPage.propTypes = {
  logOut: PropTypes.func.isRequired,
};

DashboardPage.defaultProps = {
  logOut: () => {},
};
