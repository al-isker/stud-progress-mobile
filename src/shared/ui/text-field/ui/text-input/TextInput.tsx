import { forwardRef } from 'react';
import {
	TextInput as NativeTextInput,
	TextInputProps as NativeTextInputProps
} from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export type TextInputProps = NativeTextInputProps & {
	size: 'large';
};

export const TextInput = forwardRef<NativeTextInput, TextInputProps>(
	function TextInput({ size, style, ...props }, forwardedRef) {
		const { styles, theme } = useStyles(stylesheet, { size });

		return (
			<NativeTextInput
				ref={forwardedRef}
				style={[styles.textInput, style]}
				placeholderTextColor={theme.colors.blackAlpha(0.2)}
				{...props}
			/>
		);
	}
);

const stylesheet = createStyleSheet(theme => ({
	textInput: {
		padding: 0,
		color: theme.colors.blackAlpha(0.8),
		fontFamily: theme.typography.fontFamily.GolosTextRegular,

		variants: {
			size: {
				large: {
					fontSize: 15
				}
			}
		}
	}
}));
