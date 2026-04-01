import { Ref } from 'react';
import { View, ViewProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export type PaperProps = ViewProps & {
	ref?: Ref<View>;
};

export const Paper = ({ style, ...props }: PaperProps) => {
	return <View style={[styles.paper, style]} {...props} />;
};

const styles = StyleSheet.create(theme => ({
	paper: {
		backgroundColor: theme.colors.bgPaper,
		borderRadius: theme.borderRadius * 1.8,
		boxShadow: `0 2px 4px ${theme.colors.alwaysBlackAlpha(0.05)}`
	}
}));
