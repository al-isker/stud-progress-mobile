import { ReactNode } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

type RootSafeAreaViewProps = {
	children: ReactNode;
};

export const RootSafeAreaView = ({ children }: RootSafeAreaViewProps) => (
	<View style={styles.area}>{children}</View>
);

const styles = StyleSheet.create((theme, rt) => ({
	area: {
		flex: 1,
		paddingLeft: rt.insets.left,
		paddingRight: rt.insets.right,
		backgroundColor: theme.colors.bgBase
	}
}));
