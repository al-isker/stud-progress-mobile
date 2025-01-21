import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontsProvider } from '../providers/fonts';
import { StoreProvider } from '../providers/store';
import '../styles/tailwind.css';

export const RootLayout = () => (
	<FontsProvider>
		<StoreProvider>
			<SafeAreaView className='h-full'>
				<Slot />
			</SafeAreaView>
		</StoreProvider>
	</FontsProvider>
);
