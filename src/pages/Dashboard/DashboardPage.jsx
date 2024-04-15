import PropTypes from 'prop-types';
import { TableComponent } from '../../commons';
import { UserHeader } from '../../components';
import { Box, Flex, Heading } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../utils';
import { useEffect } from 'react';

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'birthDate', label: 'Birth Date' },
  { key: 'photo', label: 'Photo' },
];

export const DashboardPage = ({ logOut, user, getData, data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = data;

  const getRows = (dataTable) =>
    dataTable?.map((item) => {
      const rows = [
        `${item.name} ${item.surnames}`,
        formatDate(item.birthDate),
        item.photo,
      ];
      return { key: item.id, values: rows };
    });

  const handleLogOut = () => {
    dispatch(logOut());
    navigate('/');
    navigate(0);
  };

  useEffect(() => {
    dispatch(getData());
  }, [user]);

  return (
    <Flex
      w="100vw"
      p={10}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box w="100%">
        <UserHeader
          onLogOut={handleLogOut}
          userName={`${user?.name} ${user?.lastname}`}
        />
      </Box>
      <Box textAlign="left" w="100%" pb={10}>
        <Heading as="h4" size="md">
          Dashboard
        </Heading>
      </Box>
      <Box flex="1" textAlign="center">
        {data && <TableComponent columns={columns} data={getRows(users)} />}
      </Box>
    </Flex>
  );
};

DashboardPage.propTypes = {
  logOut: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    lastname: PropTypes.string,
  }).isRequired,
  getData: PropTypes.func.isRequired,
  data: PropTypes.shape({
    users: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

DashboardPage.defaultProps = {
  user: {},
  data: { users: [] },
};
