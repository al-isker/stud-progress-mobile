import { Navigation } from '../navigation/Navigation';
import { FontsProvider } from '../providers/fonts/FontsProvider';
import { StoreProvider } from '../providers/store/StoreProvider';
import { UnistylesProvider } from '../providers/unistyles/UnistylesProvider';

export const RootLayout = () => (
	<StoreProvider>
		<FontsProvider>
			<UnistylesProvider>
				<Navigation />
			</UnistylesProvider>
		</FontsProvider>
	</StoreProvider>
);
