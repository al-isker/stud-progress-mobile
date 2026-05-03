import { useState } from 'react';

export const useRerender = () => {
	const [_, setState] = useState(false);

	const rerender = () => {
		setState(prev => !prev);
	};

	return rerender;
};
