import { useContext } from 'react';
import { UpdateSemesterContext } from '../context/update-semester-context';

export const useUpdateSemesterContext = () => useContext(UpdateSemesterContext);
