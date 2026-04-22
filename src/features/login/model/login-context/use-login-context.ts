import { useContext } from 'react';
import { LoginContext } from './login-context';

export const useLoginContext = () => useContext(LoginContext);
