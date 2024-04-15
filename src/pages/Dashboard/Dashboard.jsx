import { TableComponent } from '../../commons';
import { UserHeader } from '../../components';
import { Box, Flex, Heading } from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <Flex
      w="100vw"
      p={10}
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box w="100%">
        <UserHeader />
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

export default Dashboard;
