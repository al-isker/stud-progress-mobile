import { ReactElement, cloneElement, forwardRef } from 'react';
import {
	ImageStyle,
	StyleProp,
	Text,
	View,
	ViewProps,
	ViewStyle
} from 'react-native';
import {
	UnistylesVariants,
	createStyleSheet,
	useStyles
} from 'react-native-unistyles';

export type TagProps = Omit<ViewProps, 'children'> &
	UnistylesVariants<typeof stylesheet> & {
		title?: string;
		startSlot?: ReactElement<{ style: StyleProp<ViewStyle | ImageStyle> }>;
		endSlot?: ReactElement<{ style: StyleProp<ViewStyle | ImageStyle> }>;
	};

export const Tag = forwardRef<View, TagProps>(function Tag(
	{
		variant = 'black',
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
		<View ref={forwardedRef} style={[styles.tag, style]} {...props}>
			{startSlot &&
				cloneElement(startSlot, {
					style: [styles.slot, startSlot.props.style]
				})}

			<Text style={styles.title}>{title}</Text>

			{endSlot &&
				cloneElement(endSlot, {
					style: [styles.slot, endSlot.props.style]
				})}
		</View>
	);
});

const stylesheet = createStyleSheet(theme => ({
	tag: {
		flexDirection: 'row',
		alignItems: 'center',

		variants: {
			variant: {
				black: {
					backgroundColor: theme.colors.blackAlpha(0.06)
				},
				primary: {
					backgroundColor: theme.colors.primaryAlpha(0.08)
				}
			},
			size: {
				medium: {
					height: 20,
					paddingHorizontal: 8,
					columnGap: 6,
					borderRadius: theme.borderRadius / 2
				},
				small: {
					height: 18,
					paddingHorizontal: 7,
					columnGap: 5,
					borderRadius: theme.borderRadius / 2.2
				}
			}
		}
	},
	title: {
		letterSpacing: 0.15,
		fontFamily: theme.typography.fontFamily.GolosTextMedium,

		variants: {
			variant: {
				black: {
					color: theme.colors.blackAlpha(0.7)
				},
				primary: {
					color: theme.colors.primary
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
	slot: {
		aspectRatio: 1,

		variants: {
			variant: {
				black: {
					color: theme.colors.blackAlpha(0.7)
				},
				primary: {
					color: theme.colors.primary
				}
			},
			size: {
				medium: {
					height: 13
				},
				small: {
					height: 12
				}
			}
		}
	}
}));
