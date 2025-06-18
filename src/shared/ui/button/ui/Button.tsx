import { FC, forwardRef } from 'react';
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
	forwardedRef
) {
	const { styles } = useStyles(stylesheet, { variant, size });

	return (
		<Touchable
			ref={forwardedRef}
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

		variants: {
			variant: {
				primary: {},
				secondary: {},
				text: {}
			},
			size: {
				large: {
					borderRadius: theme.borderRadius * 1.35
				},
				medium: {
					borderRadius: theme.borderRadius
				},
				small: {
					borderRadius: theme.borderRadius * 0.8
				}
			}
		}
	},
	touchableContentContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',

		variants: {
			variant: {
				primary: {
					backgroundColor: theme.colors.primary,
					feedbackColor: theme.colors.alwaysBlackAlpha(0.3)
				},
				secondary: {
					backgroundColor: theme.colors.blackAlpha(0.08),
					feedbackColor: theme.colors.blackAlpha(0.08)
				},
				text: {
					backgroundColor: theme.colors.transparent,
					feedbackColor: theme.colors.blackAlpha(0.1)
				}
			},
			size: {
				large: {
					height: 54,
					paddingHorizontal: 18,
					columnGap: 13
				},
				medium: {
					height: 40,
					paddingHorizontal: 16,
					columnGap: 12
				},
				small: {
					height: 32,
					paddingHorizontal: 12,
					columnGap: 8
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
					color: theme.colors.blackAlpha(0.7)
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
				},
				small: {
					fontSize: 13
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
					color: theme.colors.blackAlpha(0.7)
				},
				text: {
					color: theme.colors.blackAlpha(0.7)
				}
			},
			size: {
				large: {
					height: 17
				},
				medium: {
					height: 15
				},
				small: {
					height: 14
				}
			}
		}
	}
}));
