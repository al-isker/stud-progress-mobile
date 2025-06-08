import React, { FC, forwardRef } from 'react';
import { ImageStyle, StyleProp, Text, View, ViewStyle } from 'react-native';
import {
	UnistylesVariants,
	createStyleSheet,
	useStyles
} from 'react-native-unistyles';
import { Touchable, TouchableProps } from '@/shared/ui/touchable';

export type ButtonProps = Omit<
	TouchableProps,
	'children' | 'feedbackColor' | 'contentContainerStyle'
> &
	UnistylesVariants<typeof stylesheet> & {
		title?: string;
		StartSlot?: FC<{ style: StyleProp<ViewStyle | ImageStyle> }>;
		EndSlot?: FC<{ style: StyleProp<ViewStyle | ImageStyle> }>;
	};

export const Button = forwardRef<View, ButtonProps>(function Button(
	{
		variant = 'primary',
		size = 'medium',
		style,
		title,
		StartSlot,
		EndSlot,
		...touchableProps
	},
	ref
) {
	const { styles } = useStyles(stylesheet, { variant, size });

	return (
		<Touchable
			ref={ref}
			feedbackColor={styles.touchableContentContainer.feedbackColor}
			style={[styles.touchable, style]}
			contentContainerStyle={styles.touchableContentContainer}
			{...touchableProps}
		>
			{StartSlot && <StartSlot style={styles.slot} />}

			<Text style={styles.title}>{title}</Text>

			{EndSlot && <EndSlot style={styles.slot} />}
		</Touchable>
	);
});

export const stylesheet = createStyleSheet(theme => ({
	touchable: {
		overflow: 'hidden',
		borderRadius: theme.borderRadius / 2
	},
	touchableContentContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		columnGap: 12,

		variants: {
			variant: {
				primary: {
					backgroundColor: theme.colors.primary,
					feedbackColor: theme.colors.alwaysBlackAlpha(0.3)
				},
				secondary: {
					backgroundColor: theme.colors.primaryAlpha(0.1),
					feedbackColor: theme.colors.primaryAlpha(0.1)
				},
				text: {
					backgroundColor: theme.colors.transparent,
					feedbackColor: theme.colors.blackAlpha(0.1)
				}
			},
			size: {
				large: {
					padding: 18
				},
				medium: {
					padding: 12
				}
			}
		}
	},
	title: {
		textAlign: 'center',
		fontFamily: theme.typography.fontFamily.GolosTextRegular,

		variants: {
			variant: {
				primary: {
					color: theme.colors.alwaysWhite
				},
				secondary: {
					color: theme.colors.primary
				},
				text: {
					color: theme.colors.blackAlpha(0.7)
				}
			},
			size: {
				large: {
					fontSize: 15
				},
				medium: {
					fontSize: 14
				}
			}
		}
	},
	slot: {
		aspectRatio: 1,

		variants: {
			variant: {
				primary: {
					color: theme.colors.alwaysWhite
				},
				secondary: {
					color: theme.colors.primary
				},
				text: {
					color: theme.colors.blackAlpha(0.7)
				}
			},
			size: {
				large: {
					height: 18
				},
				medium: {
					height: 16
				}
			}
		}
	}
}));
