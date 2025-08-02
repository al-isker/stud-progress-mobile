import { useEffect, useRef } from 'react';
import { useNavigation } from 'expo-router';

export const useLockNavigation = () => {
	const navigation = useNavigation();

	const isLockRef = useRef(true);

	const remove = () => {
		isLockRef.current = false;
	};

	useEffect(() => {
		const listener = navigation.addListener('beforeRemove', e => {
			if (isLockRef.current) {
				e.preventDefault();
			}
		});

		return () => {
			navigation.removeListener('beforeRemove', listener);
		};
	}, []);

	return { remove };
};
