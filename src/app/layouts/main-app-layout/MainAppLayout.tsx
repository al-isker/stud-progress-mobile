import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Header } from '@/widgets/header';
import { ScreenNames } from '@/shared/config/navigation';

export const MainAppLayout = () => {
	const safeAreaInsets = useSafeAreaInsets();

	return (
		<>
			<StatusBar style='light' />

			<View style={{ flex: 1 }}>
				<Header safeAreaInsetTop={safeAreaInsets.top} />

				<Stack screenOptions={{ headerShown: false }}>
					<Stack.Screen
						name={ScreenNames.TABS}
						options={{
							animation: 'none'
						}}
					/>
					<Stack.Screen
						name={ScreenNames.SUBJECT_BY_ID_RATING}
						options={{
							animation: 'fade_from_bottom'
						}}
					/>
				</Stack>
			</View>
		</>
	);
};
