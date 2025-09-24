import { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useStyles } from 'react-native-unistyles';

export const RootSafeArea = ({ children }: { children: ReactNode }) => {
	const { theme } = useStyles();

	return (
		<SafeAreaView
			edges={['left', 'right']}
			style={{
				flex: 1,
				backgroundColor: theme.colors.bgBase
			}}
		>
			{children}
		</SafeAreaView>
	);
};
