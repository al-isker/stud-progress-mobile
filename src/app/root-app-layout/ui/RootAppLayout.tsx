import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontsProvider } from '../providers/fonts/FontsProvider';
import { StoreProvider } from '../providers/store/StoreProvider';
import { UnistylesProvider } from '../providers/unistyles/UnistylesProvider';

export const RootAppLayout = () => (
	<StoreProvider>
		<FontsProvider>
			<UnistylesProvider>
				<SafeAreaView style={{ height: '100%' }}>
					<Stack screenOptions={{ headerShown: false }} />
				</SafeAreaView>
			</UnistylesProvider>
		</FontsProvider>
	</StoreProvider>
);
