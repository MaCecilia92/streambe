import { FormInputTypes } from './FormInputTypes';
import PropTypes from 'prop-types';
import { Flex, Button } from '@chakra-ui/react';

export const FormComponent = ({
  params,
  buttonText,
  onSubmit,
  isLoading,
  isDisabled,
  onChange,
}) => {
  return (
    <Flex direction="column" p={10}>
      {params.map((param) => (
        <FormInputTypes key={param.id} param={param} onChange={onChange} />
      ))}
      {onSubmit && (
        <Button
          onClick={onSubmit}
          colorScheme="teal"
          isLoading={isLoading}
          isDisabled={isDisabled}
        >
          {buttonText}
        </Button>
      )}
    </Flex>
  );
};

FormComponent.propTypes = {
  params: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  buttonText: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

FormComponent.defaultProps = {
  params: [],
  buttonText: 'button',
  onSubmit: () => {},
  onChange: () => {},
};
