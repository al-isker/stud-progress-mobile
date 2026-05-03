import { DependencyList, useEffect } from 'react';

type AsyncEffectCallback = () => Promise<void>;

export const useAsyncEffect = (
	asyncEffect: AsyncEffectCallback,
	deps?: DependencyList
) => {
	useEffect(() => {
		asyncEffect();
	}, deps);
};
