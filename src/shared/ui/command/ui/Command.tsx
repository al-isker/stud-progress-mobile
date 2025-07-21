import { ReactElement, forwardRef } from 'react';
import { Text, View } from 'react-native';
import {
	UnistylesVariants,
	createStyleSheet,
	useStyles
} from 'react-native-unistyles';
import { SlotProps, renderSlot } from '@/shared/lib/slot';
import { Touchable, TouchableProps } from '@/shared/ui/touchable';

export type CommandProps = Omit<
	TouchableProps,
	'children' | 'feedbackColor' | 'contentContainerStyle'
> &
	UnistylesVariants<typeof stylesheet> & {
		title?: string;
		startSlot?: ReactElement<SlotProps>;
		endSlot?: ReactElement<SlotProps>;
	};

export const Command = forwardRef<View, CommandProps>(function Command(
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
			feedbackColor={styles.feedback.color}
			style={[styles.touchable, style]}
			contentContainerStyle={styles.touchableContentContainer}
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
				style: [styles.slot, styles.endSlot],
				color: styles.slotProps.color
			})}
		</Touchable>
	);
});

const stylesheet = createStyleSheet(theme => ({
	touchable: {
		overflow: 'hidden',

		variants: {
			variant: {},
			size: {
				large: {
					height: 54
				},
				medium: {
					height: 40
				}
			}
		}
	},
	touchableContentContainer: {
		height: '100%',
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',

		variants: {
			variant: {
				primary: {
					backgroundColor: theme.colors.primaryAlpha(0.05)
				},
				danger: {
					backgroundColor: theme.colors.transparent
				},
				text: {
					backgroundColor: theme.colors.transparent
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
				}
			}
		}
	},
	title: {
		flex: 1,
		fontFamily: theme.typography.fontFamily.GolosTextRegular,

		variants: {
			variant: {
				primary: {
					color: theme.colors.blackAlpha(0.8)
				},
				danger: {
					color: theme.colors.red
				},
				text: {
					color: theme.colors.blackAlpha(0.8)
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
			variant: {},
			size: {
				large: {
					height: 20
				},
				medium: {
					height: 16
				}
			}
		}
	},
	endSlot: {
		marginLeft: 'auto'
	},
	slotProps: {
		color: '',

		variants: {
			variant: {
				primary: {
					color: theme.colors.blackAlpha(0.7)
				},
				danger: {
					color: theme.colors.red
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
					color: theme.colors.blackAlpha(0.1)
				},
				danger: {
					color: theme.colors.redAlpha(0.1)
				},
				text: {
					color: theme.colors.blackAlpha(0.1)
				}
			},
			size: {}
		}
	}
}));
