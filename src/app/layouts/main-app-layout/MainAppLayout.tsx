import { Stack } from 'expo-router';
import { Header } from '@/widgets/header';
import { ScreenNames } from '@/shared/config/navigation';

export const MainAppLayout = () => (
	<>
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
			<Stack.Screen
				name={ScreenNames.PRIVACY_POLICY}
				options={{
					animation: 'default'
				}}
			/>
		</Stack>
	</>
);
