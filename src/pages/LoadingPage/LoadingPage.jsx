import PropTypes from 'prop-types';
import { Flex, Spinner } from '@chakra-ui/react';

export const LoadingPage = ({ noStatic, ...props }) => (
  <Flex
    flex={1}
    justify="center"
    alignItems="center"
    position={noStatic ? 'initial' : 'fixed'}
    top={0}
    bottom={0}
    left={0}
    right={0}
    p={10}
  >
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray"
      color="blue"
      size="xs"
      boxSize={24}
      {...props}
    />
  </Flex>
);

LoadingPage.propTypes = {
  noStatic: PropTypes.bool,
};

LoadingPage.defaultProps = {
  noStatic: false,
};
