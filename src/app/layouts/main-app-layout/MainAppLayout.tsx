import { Stack } from 'expo-router';
import { Header } from '@/widgets/header';

export const MainAppLayout = () => (
	<>
		<Header />
		<Stack
			screenOptions={{
				headerShown: false,
				animation: 'fade_from_bottom'
			}}
		/>
	</>
);
