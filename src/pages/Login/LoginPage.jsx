import { FormComponent } from '../../components';
import { getInputs } from '../../utils/index';
import { Flex, Box, Heading } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const LoginPage = ({ setSessionUser, setUserParams, userParams }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserParams({ ...userParams, [id]: value });
  };

  useEffect(() => {
    dispatch(setSessionUser(userParams));
  }, [dispatch, userParams]);

  const handleClick = () => {
    navigate('/dashboard', { replace: true });
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

LoginPage.propTypes = {
  setSessionUser: PropTypes.func.isRequired,
  setUserParams: PropTypes.func.isRequired,
  userParams: PropTypes.object.isRequired,
};

LoginPage.defaultProps = {
  userParams: {},
};
