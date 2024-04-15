import { Flex, Box, ButtonGroup, Button, Spacer, Text } from '@chakra-ui/react';
import { FaRegUserCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const UserHeader = ({ onLogOut }) => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" pb={10}>
      <Box>
        <Text>Hola ALEJANDRO VALLEJOS</Text>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button
          leftIcon={<FaRegUserCircle />}
          colorScheme="teal"
          variant="outline"
          onClick={onLogOut}
        >
          Log out
        </Button>
      </ButtonGroup>
    </Flex>
  );
};

UserHeader.propTypes = {
  onLogOut: PropTypes.func.isRequired,
};

UserHeader.defaultProps = {
  onLogOut: () => {},
};
