import { createContext } from 'react';
import { UpdateSemesterContextType } from '../types/update-semester-context';

export const UpdateSemesterContext = createContext(
	{} as UpdateSemesterContextType
);
