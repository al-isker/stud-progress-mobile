import { ReactNode, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import * as Fonts from '@/shared/assets/fonts/fonts';

SplashScreen.preventAutoHideAsync();

export const FontsProvider = ({ children }: { children: ReactNode }) => {
	const [fontsLoaded] = useFonts(Fonts);

	useEffect(() => {
		if (fontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return children;
};
