import { Navigation } from '../navigation';
import { FontsProvider, StoreProvider } from '../providers';
import '../styles/tailwind.css';

export const RootLayout = () => (
	<StoreProvider>
		<FontsProvider>
			<Navigation />
		</FontsProvider>
	</StoreProvider>
);
