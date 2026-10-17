import { useReducer } from 'react';

export const useRerender = () => {
	const [, rerender] = useReducer((state: number) => state + 1, 0);

	return rerender;
};
