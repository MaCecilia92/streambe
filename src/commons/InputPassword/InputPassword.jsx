import { useState } from 'react';
import { InputGroup, Button, Input, InputRightElement } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const InputPassword = ({ placeholder }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <InputGroup size="md" mb={5}>
      <Input
        pr="4.5rem"
        type={show ? 'text' : 'password'}
        placeholder={placeholder}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

InputPassword.propTypes = {
  placeholder: PropTypes.string,
};

InputPassword.defaultProps = {
  placeholder: '',
};
