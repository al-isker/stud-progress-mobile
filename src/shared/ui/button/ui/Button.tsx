import { ReactElement, Ref } from 'react';
import { Text, View } from 'react-native';
import {
	UnistylesVariants,
	createStyleSheet,
	useStyles
} from 'react-native-unistyles';
import { SlotProps, renderSlot } from '@/shared/lib/slot';
import { Pressable, PressableProps } from '@/shared/ui/pressable';

export type ButtonProps = Omit<
	PressableProps,
	'children' | 'feedbackColor' | 'contentContainerStyle'
> &
	UnistylesVariants<typeof stylesheet> & {
		ref?: Ref<View>;
		title?: string;
		startSlot?: ReactElement<SlotProps>;
		endSlot?: ReactElement<SlotProps>;
	};

export const Button = ({
	variant = 'primary',
	size = 'medium',
	style,
	title,
	startSlot,
	endSlot,
	...props
}: ButtonProps) => {
	const { styles } = useStyles(stylesheet, { variant, size });

	return (
		<Pressable
			feedbackColor={styles.feedback.color}
			style={[styles.pressable, style]}
			{...props}
		>
			{renderSlot(startSlot, {
				style: styles.slot,
				color: styles.slotProps.color
			})}

			<Text style={styles.title} numberOfLines={1}>
				{title}
			</Text>

			{renderSlot(endSlot, {
				style: styles.slot,
				color: styles.slotProps.color
			})}
		</Pressable>
	);
};

export const stylesheet = createStyleSheet(theme => ({
	pressable: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',

		variants: {
			variant: {
				primary: {
					backgroundColor: theme.colors.primary
				},
				secondary: {
					backgroundColor: theme.colors.blackAlpha(0.08)
				},
				text: {
					backgroundColor: theme.colors.transparent
				}
			},
			size: {
				large: {
					height: 54,
					paddingHorizontal: 18,
					columnGap: 13,
					borderRadius: theme.borderRadius * 1.35
				},
				medium: {
					height: 40,
					paddingHorizontal: 16,
					columnGap: 12,
					borderRadius: theme.borderRadius
				},
				small: {
					height: 32,
					paddingHorizontal: 12,
					columnGap: 8,
					borderRadius: theme.borderRadius * 0.8
				}
			}
		}
	},
	title: {
		flex: 1,
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
			variant: {},
			size: {
				large: {
					height: 20
				},
				medium: {
					height: 16
				},
				small: {
					height: 13
				}
			}
		}
	},
	slotProps: {
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
			size: {}
		}
	},
	feedback: {
		color: '',

		variants: {
			variant: {
				primary: {
					color: theme.colors.alwaysBlackAlpha(0.3)
				},
				secondary: {
					color: theme.colors.blackAlpha(0.08)
				},
				text: {
					color: theme.colors.blackAlpha(0.1)
				}
			},
			size: {}
		}
	}
}));
