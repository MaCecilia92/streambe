import { FormInputTypes } from './FormInputTypes';
import PropTypes from 'prop-types';
import { Flex, Button } from '@chakra-ui/react';

export const FormComponent = ({
  params,
  onSubmit,
  buttonText,
  isDisabled,
  isLoading,
}) => {
  console.log(params, 'params');
  return (
    <Flex direction="column" p={10}>
      {params.map((param) => (
        <FormInputTypes key={param.id} param={param} />
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
      // Define las PropTypes para cada elemento en el array 'params'
      id: PropTypes.number.isRequired, // Ejemplo: id es un número y es requerido
      // Añade más PropTypes según las propiedades que esperas en cada 'param'
    }),
  ).isRequired, // 'params' debe ser un array y es requerido
};

FormComponent.defaultProps = {
  params: [],
  buttonText: 'button',
  onSubmit: true, // Valor por defecto para 'params' si no se proporciona
};
