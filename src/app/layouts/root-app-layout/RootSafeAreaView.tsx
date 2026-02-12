import { ReactNode } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

type RootSafeAreaViewProps = {
	children: ReactNode;
};

export const RootSafeAreaView = ({ children }: RootSafeAreaViewProps) => (
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
