import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontsProvider } from '../../providers/fonts-provider/FontsProvider';
import { QueryProvider } from '../../providers/query-provider/QueryProvider';
import { UnistylesProvider } from '../../providers/unistyles-provider/UnistylesProvider';

export const RootAppLayout = () => (
	<QueryProvider>
		<FontsProvider>
			<UnistylesProvider>
				<SafeAreaView style={{ height: '100%' }}>
					<Stack screenOptions={{ headerShown: false }} />
				</SafeAreaView>
			</UnistylesProvider>
		</FontsProvider>
	</QueryProvider>
);
