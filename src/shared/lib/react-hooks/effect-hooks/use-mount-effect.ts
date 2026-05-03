import { useEffect } from 'react';

type MountEffectCallback = () => void;

export const useMountEffect = (mountEffect: MountEffectCallback) => {
	useEffect(() => {
		mountEffect();
	}, []);
};
