import { Text, TextProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export type ErrorTextProps = TextProps;

export const ErrorText = ({ children, style, ...props }: ErrorTextProps) => {
	const { styles } = useStyles(stylesheet);

	if (children) {
		return (
			<Text style={[styles.text, style]} {...props}>
				{children}
			</Text>
		);
	}
};

const stylesheet = createStyleSheet(theme => ({
	text: {
		color: theme.colors.red,
		fontSize: 12,
		fontFamily: theme.typography.fontFamily.GolosTextRegular
	}
}));
