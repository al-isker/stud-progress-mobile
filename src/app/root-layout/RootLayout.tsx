import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import './tailwind.css';

export const RootLayout = () => {
	return (
		<SafeAreaView className='h-full'>
			<Slot />
		</SafeAreaView>
	);
};
