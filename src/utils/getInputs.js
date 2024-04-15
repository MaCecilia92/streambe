import { typeInputs } from '../constants/typeInputs';

const getInputs = {
  loginForm: () => [
    {
      id: 1,
      key: 'username',
      type: typeInputs.TEXT,
      placeholder: 'Username',
      defaultValue: null,
    },
    {
      id: 2,
      key: 'password',
      type: typeInputs.PASSWORD,
      placeholder: 'Password',
      defaultValue: null,
    },
  ],
};

export default getInputs;
