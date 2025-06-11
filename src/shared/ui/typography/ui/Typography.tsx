import React, { forwardRef } from 'react';
import { Text, TextProps } from 'react-native';
import {
	UnistylesVariants,
	createStyleSheet,
	useStyles
} from 'react-native-unistyles';

export type TypographyProps = TextProps & UnistylesVariants<typeof stylesheet>;

export const Typography = forwardRef<Text, TypographyProps>(function Typography(
	{ variant = 'h1', colorOnPrimary = false, style, ...props },
	forwardedRef
) {
	const { styles } = useStyles(stylesheet, {
		variant,
		colorOnPrimary
	});

	return <Text ref={forwardedRef} style={[styles.text, style]} {...props} />;
});

const stylesheet = createStyleSheet(theme => ({
	text: {
		variants: {
			variant: {
				h1: {
					color: theme.colors.black,
					fontSize: 26,
					fontFamily: theme.typography.fontFamily.GolosTextBold
				},
				h2: {
					color: theme.colors.blackAlpha(0.9),
					fontSize: 24,
					fontFamily: theme.typography.fontFamily.GolosTextSemiBold
				},
				h3: {
					color: theme.colors.blackAlpha(0.9),
					fontSize: 18,
					fontFamily: theme.typography.fontFamily.GolosTextSemiBold
				},
				t1: {
					color: theme.colors.blackAlpha(0.8),
					fontSize: 14,
					fontFamily: theme.typography.fontFamily.GolosTextRegular
				},
				t2: {
					color: theme.colors.blackAlpha(0.5),
					fontSize: 14,
					fontFamily: theme.typography.fontFamily.GolosTextRegular
				},
				error: {
					color: theme.colors.red,
					fontSize: 14,
					fontFamily: theme.typography.fontFamily.GolosTextRegular
				}
			},
			colorOnPrimary: {
				true: {
					color: theme.colors.alwaysWhite
				}
			}
		}
	}
}));
