import * as SplashScreen from 'expo-splash-screen';

export const splashScreenConfigure = () => {
	SplashScreen.preventAutoHideAsync();

	SplashScreen.setOptions({
		fade: true,
		duration: 200
	});
};
