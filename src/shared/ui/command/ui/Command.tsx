import { Ref } from 'react';
import { Text, View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { StyleSheet, UnistylesVariants } from 'react-native-unistyles';
import { RenderSlotType, createSlot } from '@/shared/lib/slot';
import { Pressable, PressableProps } from '@/shared/ui/pressable';

export type CommandProps = Omit<
	PressableProps,
	'children' | 'feedbackColor' | 'contentContainerStyle'
> &
	UnistylesVariants<typeof styles> & {
		ref?: Ref<View>;
		title?: string;
		renderLeftIcon?: RenderSlotType<SvgProps>;
		renderRightIcon?: RenderSlotType<SvgProps>;
		renderRightSlot?: RenderSlotType;
	};

export const Command = ({
	variant = 'primary',
	color = 'primary',
	size = 'medium',
	style,
	title,
	renderLeftIcon,
	renderRightIcon,
	renderRightSlot,
	...props
}: CommandProps) => {
	styles.useVariants({ variant, color, size });

	return (
		<Pressable
			feedbackColor={styles.feedback.color}
			style={[styles.pressable, style]}
			{...props}
		>
			{createSlot(renderLeftIcon, {
				style: styles.icon,
				color: styles.iconProps.color
			})}

			<Text style={styles.title} numberOfLines={1}>
				{title}
			</Text>

			{(renderRightIcon || renderRightSlot) && (
				<View style={styles.rightSlotContainer}>
					{createSlot(renderRightIcon, {
						style: styles.icon,
						color: styles.iconProps.color
					})}

					{createSlot(renderRightSlot, {
						style: styles.icon
					})}
				</View>
			)}
		</Pressable>
	);
};

const styles = StyleSheet.create(theme => ({
	pressable: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: theme.colors.transparent,

		variants: {
			variant: {
				primary: {},
				text: {}
			},
			color: {
				primary: {},
				danger: {}
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
		},
		compoundVariants: [
			{
				variant: 'primary',
				color: 'primary',
				styles: {
					backgroundColor: theme.colors.primaryAlpha(0.05)
				}
			},
			{
				variant: 'primary',
				color: 'danger',
				styles: {
					backgroundColor: theme.colors.redAlpha(0.05)
				}
			}
		]
	},
	title: {
		flex: 1,
		fontFamily: theme.typography.fontFamily.GolosText,
		fontWeight: 400,

		variants: {
			variant: {},
			color: {
				primary: {
					color: theme.colors.blackAlpha(0.8)
				},
				danger: {
					color: theme.colors.red
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
	rightSlotContainer: {
		marginLeft: 'auto'
	},
	icon: {
		variants: {
			variant: {},
			color: {},
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
	iconProps: {
		color: '',

		variants: {
			variant: {},
			color: {
				primary: {
					color: theme.colors.blackAlpha(0.7)
				},
				danger: {
					color: theme.colors.red
				}
			},
			size: {}
		}
	},
	feedback: {
		color: '',

		variants: {
			variant: {},
			color: {
				primary: {
					color: theme.colors.blackAlpha(0.1)
				},
				danger: {
					color: theme.colors.redAlpha(0.1)
				}
			},
			size: {}
		}
	}
}));
