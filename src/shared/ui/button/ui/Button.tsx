import { ReactElement, forwardRef } from 'react';
import { Text, View } from 'react-native';
import {
	UnistylesVariants,
	createStyleSheet,
	useStyles
} from 'react-native-unistyles';
import { SlotProps, renderSlot } from '@/shared/lib/slot';
import { Touchable, TouchableProps } from '@/shared/ui/touchable';

export type ButtonProps = Omit<
	TouchableProps,
	'children' | 'feedbackColor' | 'contentContainerStyle'
> &
	UnistylesVariants<typeof stylesheet> & {
		title?: string;
		startSlot?: ReactElement<SlotProps>;
		endSlot?: ReactElement<SlotProps>;
	};

export const Button = forwardRef<View, ButtonProps>(function Button(
	{
		variant = 'primary',
		size = 'medium',
		style,
		title,
		startSlot,
		endSlot,
		...props
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
			{...props}
		>
			{renderSlot(startSlot, {
				style: styles.slot,
				color: styles.styleProps.color
			})}

			<Text style={styles.title}>{title}</Text>

			{renderSlot(endSlot, {
				style: styles.slot,
				color: styles.styleProps.color
			})}
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
					height: 54,
					borderRadius: theme.borderRadius * 1.35
				},
				medium: {
					height: 40,
					borderRadius: theme.borderRadius
				},
				small: {
					height: 32,
					borderRadius: theme.borderRadius * 0.8
				}
			}
		}
	},
	touchableContentContainer: {
		height: '100%',
		width: '100%',
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
					paddingHorizontal: 18,
					columnGap: 13
				},
				medium: {
					paddingHorizontal: 16,
					columnGap: 12
				},
				small: {
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
		height: '42.5%'
	},
	styleProps: {
		color: '',

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
				large: {},
				medium: {},
				small: {}
			}
		}
	}
}));
