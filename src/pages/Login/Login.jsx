import { FormComponent } from '../../components';
import { getInputs } from '../../utils/index';
import { Flex, Box } from '@chakra-ui/react';

// import { useDispatch } from 'react-redux';
import { setDataRequest } from '../../state/Session/reducer';

console.log(setDataRequest, 'store');

export const Login = () => {
  const loginInputs = getInputs.loginForm();
  return (
    <Flex w="100vw">
      <Box flex={1} bg="blue.500" w="60%" h="100vh"></Box>
      <Box display="flex" justifyContent="center" alignItems="center" w="40%">
        <FormComponent params={loginInputs} />
      </Box>
    </Flex>
  );
};
