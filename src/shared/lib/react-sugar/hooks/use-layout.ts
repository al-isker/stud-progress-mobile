import { useRef } from 'react';
import { LayoutChangeEvent, LayoutRectangle } from 'react-native';

export const useLayout = () => {
	const layoutRef = useRef<LayoutRectangle>();

	const handleLayout = (e: LayoutChangeEvent) => {
		layoutRef.current = e.nativeEvent.layout;
	};

	return [layoutRef, handleLayout] as const;
};
