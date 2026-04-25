import { ReactElement, Ref } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet, UnistylesVariants } from 'react-native-unistyles';
import { SlotProps, renderSlot } from '@/shared/lib/slot';
import { Pressable, PressableProps } from '@/shared/ui/pressable';

export type CommandProps = Omit<
	PressableProps,
	'children' | 'feedbackColor' | 'contentContainerStyle'
> &
	UnistylesVariants<typeof styles> & {
		ref?: Ref<View>;
		title?: string;
		startSlot?: ReactElement<SlotProps>;
		endSlot?: ReactElement<SlotProps>;
	};

export const Command = ({
	variant = 'primary',
	size = 'medium',
	style,
	title,
	startSlot,
	endSlot,
	...props
}: CommandProps) => {
	styles.useVariants({ variant, size });

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
				style: [styles.slot, styles.endSlot],
				color: styles.slotProps.color
			})}
		</Pressable>
	);
};

const styles = StyleSheet.create(theme => ({
	pressable: {
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
					height: 54,
					paddingHorizontal: 18,
					columnGap: 13
				},
				medium: {
					height: 40,
					paddingHorizontal: 16,
					columnGap: 12
				}
			}
		}
	},
	title: {
		flex: 1,
		fontFamily: theme.typography.fontFamily.GolosText,
		fontWeight: 400,

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
		variants: {
			variant: {},
			size: {
				large: {
					width: 20,
					height: 20
				},
				medium: {
					width: 16,
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
