import { Ref } from 'react';
import { Text, View, ViewProps } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { StyleSheet, UnistylesVariants } from 'react-native-unistyles';
import { RenderSlotType, createSlot } from '@/shared/lib/slot';

export type TagProps = Omit<ViewProps, 'children'> &
	UnistylesVariants<typeof styles> & {
		ref?: Ref<View>;
		title?: string;
		renderLeftIcon?: RenderSlotType<SvgProps>;
		renderRightIcon?: RenderSlotType<SvgProps>;
	};

export const Tag = ({
	color = 'primary',
	size = 'medium',
	style,
	title,
	renderLeftIcon,
	renderRightIcon,
	...props
}: TagProps) => {
	styles.useVariants({ color, size });

	return (
		<View style={[styles.tag, style]} {...props}>
			{createSlot(renderLeftIcon, {
				style: styles.icon,
				color: styles.iconProps.color
			})}

			<Text style={styles.title}>{title}</Text>

			{createSlot(renderRightIcon, {
				style: styles.icon,
				color: styles.iconProps.color
			})}
		</View>
	);
};

const styles = StyleSheet.create(theme => ({
	tag: {
		flexDirection: 'row',
		alignItems: 'center',

		variants: {
			color: {
				primary: {
					backgroundColor: theme.colors.primaryAlpha(0.08)
				},
				black: {
					backgroundColor: theme.colors.blackAlpha(0.06)
				}
			},
			size: {
				medium: {
					height: 20,
					paddingHorizontal: 8,
					columnGap: 6,
					borderRadius: theme.borderRadius * 0.5
				},
				small: {
					height: 18,
					paddingHorizontal: 7,
					columnGap: 5,
					borderRadius: theme.borderRadius * 0.45
				}
			}
		}
	},
	title: {
		letterSpacing: 0.15,
		fontFamily: theme.typography.fontFamily.GolosText,
		fontWeight: 500,

		variants: {
			color: {
				primary: {
					color: theme.colors.primary
				},
				black: {
					color: theme.colors.blackAlpha(0.7)
				}
			},
			size: {
				medium: {
					fontSize: 13
				},
				small: {
					fontSize: 12
				}
			}
		}
	},
	icon: {
		variants: {
			color: {},
			size: {
				medium: {
					width: 13,
					height: 13
				},
				small: {
					width: 12,
					height: 12
				}
			}
		}
	},
	iconProps: {
		color: '',

		variants: {
			color: {
				primary: {
					color: theme.colors.primary
				},
				black: {
					color: theme.colors.blackAlpha(0.7)
				}
			},
			size: {}
		}
	}
}));
