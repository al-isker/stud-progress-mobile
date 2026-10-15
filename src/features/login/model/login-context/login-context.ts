import { createContext } from 'react';
import { LoginContextValueType } from './login-context-value-type';

export const LoginContext = createContext({} as LoginContextValueType);
