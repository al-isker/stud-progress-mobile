import { Stack } from 'expo-router';
import { View } from 'react-native';
import { Header } from '@/widgets/header';
import { ScreenNames } from '@/shared/config/navigation';

export const MainAppLayout = () => (
	<View style={{ flex: 1 }}>
		<Header />
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
);
