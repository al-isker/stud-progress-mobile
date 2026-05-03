import { DependencyList, useEffect } from 'react';

type CleanupEffectCallback = () => void;

type CleanupDependencyList = readonly [
	DependencyList[number],
	...DependencyList
];

export const useCleanupEffect = (
	cleanupEffect: CleanupEffectCallback,
	deps: CleanupDependencyList
) => {
	useEffect(() => {
		return cleanupEffect;
	}, deps);
};
