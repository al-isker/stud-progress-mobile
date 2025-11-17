import { ReactNode } from 'react';
import { View } from 'react-native';
import { UnistylesRuntime, useStyles } from 'react-native-unistyles';

export const RootSafeAreaView = ({ children }: { children: ReactNode }) => {
	const { theme } = useStyles();

	return (
		<View
			style={{
				flex: 1,
				paddingLeft: UnistylesRuntime.insets.left,
				paddingRight: UnistylesRuntime.insets.right,
				backgroundColor: theme.colors.bgBase
			}}
		>
			{children}
		</View>
	);
};
