import { Input, Text } from '@chakra-ui/react';
import { InputPassword } from '../../commons';
import { typeInputs } from '../../constants/typeInputs';
import PropTypes from 'prop-types';

export const FormInputTypes = ({
  param,
  values,
  onChange,
  isDisabled,
  onInputChange,
  isLoading,
}) => {
  switch (param.type) {
    case typeInputs.TEXT:
      return <Input mb={5} />;
    case typeInputs.PASSWORD:
      return <InputPassword />;
    default:
      return <Text>Tipo de input no encontrado</Text>;
  }
};

FormInputTypes.propTypes = {
  param: PropTypes.shape({
    type: PropTypes.shape([]),
    key: PropTypes.string,
    placeholder: PropTypes.string,
    // Add other PropTypes for param as needed
  }).isRequired,
  values: PropTypes.shape({}), // Adjust this according to the shape of values
  onChange: PropTypes.func,
  isDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  isLoading: PropTypes.bool,
};

FormInputTypes.defaultProps = {
  isDisabled: false,
  onfocus: undefined,
  onChange: undefined,
};
