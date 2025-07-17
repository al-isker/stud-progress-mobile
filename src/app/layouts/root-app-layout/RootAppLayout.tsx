import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DayjsProvider } from '@/app/providers/dayjs-provider/DayjsProvider';
import { ScreenNames } from '@/shared/config/navigation';
import { FontsProvider } from '../../providers/fonts-provider/FontsProvider';
import { QueryProvider } from '../../providers/query-provider/QueryProvider';
import { UnistylesProvider } from '../../providers/unistyles-provider/UnistylesProvider';

export const RootAppLayout = () => (
	<QueryProvider>
		<FontsProvider>
			<DayjsProvider>
				<UnistylesProvider>
					<SafeAreaView style={{ height: '100%' }}>
						<Stack screenOptions={{ headerShown: false }}>
							<Stack.Screen name={ScreenNames.MAIN} />
							<Stack.Screen name={ScreenNames.LOGIN} />
						</Stack>
					</SafeAreaView>
				</UnistylesProvider>
			</DayjsProvider>
		</FontsProvider>
	</QueryProvider>
);
