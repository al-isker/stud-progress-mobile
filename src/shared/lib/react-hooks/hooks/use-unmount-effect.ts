import { DependencyList, useEffect } from 'react';

type UnmountEffectCallback = () => void;

export const useUnmountEffect = (
	unmountEffect: UnmountEffectCallback,
	deps?: DependencyList
) => {
	useEffect(() => {
		return unmountEffect;
	}, deps);
};
