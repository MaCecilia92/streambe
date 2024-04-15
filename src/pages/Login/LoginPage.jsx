import { FormComponent } from '../../components';
import { getInputs } from '../../utils/index';
import { Flex, Box, Heading } from '@chakra-ui/react';
import useLocalStorage from '../../CustomHook/useLocalStorage';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const LoginPage = ({ setSessionUser, setUserParams, userParams }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data] = useLocalStorage('session');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserParams({ ...userParams, [id]: value });
  };

  const handleClick = () => {
    dispatch(setSessionUser(userParams));
    if (data !== null && data !== undefined) {
      navigate('/dashboard');
    }
  };

  const loginInputs = getInputs.loginForm();

  return (
    <Flex w="100vw">
      <Box flex={1} bg="blue.500" w="60%" h="100vh"></Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="40%"
        flexDirection="column"
      >
        <Heading>Login</Heading>
        <FormComponent
          params={loginInputs}
          buttonText="Ingresar"
          onChange={handleChange}
          onSubmit={handleClick}
        />
      </Box>
    </Flex>
  );
};

export default LoginPage;
