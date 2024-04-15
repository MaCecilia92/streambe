import { Input, Text } from '@chakra-ui/react';
import { InputPassword } from '../../commons';
import { typeInputs } from '../../constants/typeInputs';
import PropTypes from 'prop-types';

export const FormInputTypes = ({ param, onChange }) => {
  switch (param.type) {
    case typeInputs.TEXT:
      return (
        <Input
          placeholder={param.placeholder}
          mb={5}
          onChange={onChange}
          id={param.key}
          name={param.name}
        />
      );
    case typeInputs.PASSWORD:
      return (
        <InputPassword
          placeholder={param.placeholder}
          onChange={onChange}
          id={param.key}
          name={param.name}
        />
      );
    default:
      return <Text>Tipo de input no encontrado</Text>;
  }
};

FormInputTypes.propTypes = {
  param: PropTypes.shape({
    type: PropTypes.shape([]),
    key: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  values: PropTypes.shape({}),
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
