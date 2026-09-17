import { DependencyList, useEffect } from 'react';

type CleanupEffectCallback = () => void;

type CleanupDependencyListType = readonly [
	DependencyList[number],
	...DependencyList
];

export const useCleanupEffect = (
	cleanupEffect: CleanupEffectCallback,
	deps: CleanupDependencyListType
) => {
	useEffect(() => {
		return cleanupEffect;
	}, deps);
};
