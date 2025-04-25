import { ReactNode, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import * as Fonts from '@/shared/assets/fonts';

SplashScreen.preventAutoHideAsync();

export const FontsProvider = ({ children }: { children: ReactNode }) => {
	const [isFontsLoaded] = useFonts(Fonts);

	useEffect(() => {
		if (isFontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [isFontsLoaded]);

	return isFontsLoaded && children;
};
