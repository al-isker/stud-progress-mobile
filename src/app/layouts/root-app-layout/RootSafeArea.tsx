import { ReactNode } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

type RootSafeAreaProps = {
	children: ReactNode;
};

export const RootSafeArea = ({ children }: RootSafeAreaProps) => (
	<View style={styles.safeArea}>
		<View style={styles.innerArea}>{children}</View>
	</View>
);

const styles = StyleSheet.create((theme, rt) => ({
	safeArea: {
		flex: 1,
		paddingLeft: rt.insets.left,
		paddingRight: rt.insets.right,
		backgroundColor: theme.colors.black
	},
	innerArea: {
		flex: 1,
		backgroundColor: theme.colors.bgBase
	}
}));
