import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Fonts from '@/shared/assets/fonts';
import './tailwind.css';

SplashScreen.preventAutoHideAsync();

export const RootLayout = () => {
	const [fontsLoaded] = useFonts(Fonts);

	useEffect(() => {
		if (fontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<SafeAreaView className='h-full'>
			<Slot />
		</SafeAreaView>
	);
};
