import { Text, TextProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export type ErrorTextProps = TextProps;

export const ErrorText = ({ children, style, ...props }: ErrorTextProps) => {
	if (children) {
		return (
			<Text style={[styles.text, style]} {...props}>
				{children}
			</Text>
		);
	}
};

const styles = StyleSheet.create(theme => ({
	text: {
		color: theme.colors.red,
		fontSize: 12,
		fontFamily: theme.typography.fontFamily.GolosText,
		fontWeight: 400
	}
}));
