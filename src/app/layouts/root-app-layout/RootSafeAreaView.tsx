import { ReactNode } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export const RootSafeAreaView = ({ children }: { children: ReactNode }) => (
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
