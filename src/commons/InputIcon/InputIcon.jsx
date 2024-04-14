import {
  InputGroup,
  Input,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const InputIcon = ({ leftIcon, rightIcon }) => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
        {leftIcon}
      </InputLeftElement>
      <Input placeholder="Enter amount" />
      <InputRightElement>{rightIcon}</InputRightElement>
    </InputGroup>
  );
};

InputIcon.propTypes = {
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
};

InputIcon.defaultProps = {
  leftIcon: null,
  rightIcon: null,
};
