import { useEffect, useRef } from 'react';

type UnmountEffectCallback = () => void;

export const useUnmountEffect = (unmountEffect: UnmountEffectCallback) => {
	const unmountEffectRef = useRef(unmountEffect);

	unmountEffectRef.current = unmountEffect;

	useEffect(() => {
		return () => {
			unmountEffectRef.current();
		};
	}, []);
};
