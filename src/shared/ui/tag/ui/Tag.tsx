import React, { FC, forwardRef } from 'react';
import {
	ImageStyle,
	StyleProp,
	Text,
	View,
	ViewProps,
	ViewStyle
} from 'react-native';
import {
	UnistylesVariants,
	createStyleSheet,
	useStyles
} from 'react-native-unistyles';

export type TagProps = Omit<ViewProps, 'children'> &
	UnistylesVariants<typeof stylesheet> & {
		title?: string;
		StartIcon?: FC<{ style: StyleProp<ViewStyle | ImageStyle> }>;
		EndIcon?: FC<{ style: StyleProp<ViewStyle | ImageStyle> }>;
	};

export const Tag = forwardRef<View, TagProps>(function Tag(
	{ variant = 'black', size, style, title, StartIcon, EndIcon, ...props },
	ref
) {
	const { styles } = useStyles(stylesheet, { variant, size });

	return (
		<View ref={ref} style={[styles.tag, style]} {...props}>
			{StartIcon && <StartIcon style={styles.icon} />}

			<Text style={styles.title}>{title}</Text>

			{EndIcon && <EndIcon style={styles.icon} />}
		</View>
	);
});

const stylesheet = createStyleSheet(theme => ({
	tag: {
		flexDirection: 'row',
		alignItems: 'center',
		columnGap: 4,

		variants: {
			variant: {
				black: {
					backgroundColor: theme.colors.blackAlpha(0.06)
				},
				primary: {
					backgroundColor: theme.colors.primaryAlpha(0.08)
				}
			},
			size: {
				small: {
					paddingVertical: 2,
					paddingHorizontal: 8,
					borderRadius: 6
				}
			}
		}
	},
	title: {
		letterSpacing: 0.15,
		fontFamily: theme.typography.fontFamily.GolosTextMedium,

		variants: {
			variant: {
				black: {
					color: theme.colors.blackAlpha(0.7)
				},
				primary: {
					color: theme.colors.primary
				}
			},
			size: {
				small: {
					fontSize: 12
				}
			}
		}
	},
	icon: {
		aspectRatio: 1,

		variants: {
			variant: {
				black: {
					color: theme.colors.blackAlpha(0.7)
				},
				primary: {
					color: theme.colors.primary
				}
			},
			size: {
				small: {
					height: 12
				}
			}
		}
	}
}));
