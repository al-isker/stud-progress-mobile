import React, { forwardRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export type TextInputBaseProps = TextInputProps & {
	size: 'large';
};

export const TextInputBase = forwardRef<TextInput, TextInputBaseProps>(
	function TextInputBase({ size, style, ...props }, ref) {
		const { styles, theme } = useStyles(stylesheet, { size });

		return (
			<TextInput
				ref={ref}
				style={[styles.textInputBase, style]}
				placeholderTextColor={theme.colors.blackAlpha(0.2)}
				{...props}
			/>
		);
	}
);

const stylesheet = createStyleSheet(theme => ({
	textInputBase: {
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
