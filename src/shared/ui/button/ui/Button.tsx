import { Ref } from 'react';
import { Text, View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { StyleSheet, UnistylesVariants } from 'react-native-unistyles';
import { RenderSlotType, createSlot } from '@/shared/lib/slot';
import { Pressable, PressableProps } from '@/shared/ui/pressable';

export type ButtonProps = Omit<
	PressableProps,
	'children' | 'feedbackColor' | 'contentContainerStyle'
> &
	UnistylesVariants<typeof styles> & {
		ref?: Ref<View>;
		title?: string;
		renderLeftIcon?: RenderSlotType<SvgProps>;
		renderRightIcon?: RenderSlotType<SvgProps>;
	};

export const Button = ({
	variant = 'primary',
	size = 'medium',
	style,
	title,
	renderLeftIcon,
	renderRightIcon,
	...props
}: ButtonProps) => {
	styles.useVariants({ variant, size });

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

			{createSlot(renderRightIcon, {
				style: styles.icon,
				color: styles.iconProps.color
			})}
		</Pressable>
	);
};

const styles = StyleSheet.create(theme => ({
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
		fontFamily: theme.typography.fontFamily.GolosText,
		fontWeight: 400,

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
