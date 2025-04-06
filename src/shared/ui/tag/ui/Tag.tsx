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
		StartSlot?: FC<{ style: StyleProp<ViewStyle | ImageStyle> }>;
		EndSlot?: FC<{ style: StyleProp<ViewStyle | ImageStyle> }>;
	};

export const Tag = forwardRef<View, TagProps>(function Tag(
	{
		variant = 'black',
		size = 'medium',
		style,
		title,
		StartSlot,
		EndSlot,
		...props
	},
	ref
) {
	const { styles } = useStyles(stylesheet, { variant, size });

	return (
		<View ref={ref} style={[styles.tag, style]} {...props}>
			{StartSlot && <StartSlot style={styles.slot} />}

			<Text style={styles.title}>{title}</Text>

			{EndSlot && <EndSlot style={styles.slot} />}
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
				medium: {
					paddingVertical: 2,
					paddingHorizontal: 10,
					borderRadius: 8
				},
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
				medium: {
					fontSize: 14
				},
				small: {
					fontSize: 12
				}
			}
		}
	},
	slot: {
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
				medium: {
					height: 14
				},
				small: {
					height: 12
				}
			}
		}
	}
}));
