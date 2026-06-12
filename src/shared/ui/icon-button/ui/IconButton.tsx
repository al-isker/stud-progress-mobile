import { Ref } from 'react';
import { View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { StyleSheet, UnistylesVariants } from 'react-native-unistyles';
import { RenderSlotType, createSlot } from '@/shared/lib/slot';
import { Pressable, PressableProps } from '@/shared/ui/pressable';

export type IconButtonProps = Omit<
	PressableProps,
	'children' | 'feedbackColor' | 'contentContainerStyle'
> &
	UnistylesVariants<typeof styles> & {
		ref?: Ref<View>;
		icon: RenderSlotType<SvgProps>;
	};

export const IconButton = ({
	icon,
	variant = 'primary',
	size = 'medium',
	style,
	...props
}: IconButtonProps) => {
	styles.useVariants({ variant, size });

	return (
		<Pressable
			feedbackColor={styles.feedback.color}
			style={[styles.pressable, style]}
			{...props}
		>
			{createSlot(icon, {
				style: styles.icon,
				color: styles.iconProps.color
			})}
		</Pressable>
	);
};

const styles = StyleSheet.create(theme => ({
	pressable: {
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
					width: 54,
					height: 54,
					borderRadius: theme.borderRadius * 1.35
				},
				medium: {
					width: 40,
					height: 40,
					borderRadius: theme.borderRadius
				},
				small: {
					width: 32,
					height: 32,
					borderRadius: theme.borderRadius * 0.8
				}
			}
		}
	},
	icon: {
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
				},
				small: {
					width: 13,
					height: 13
				}
			}
		}
	},
	iconProps: {
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
