import { ReactElement, forwardRef } from 'react';
import { Text, View, ViewProps } from 'react-native';
import {
	UnistylesVariants,
	createStyleSheet,
	useStyles
} from 'react-native-unistyles';
import { SlotProps, renderSlot } from '@/shared/lib/slot';

export type TagProps = Omit<ViewProps, 'children'> &
	UnistylesVariants<typeof stylesheet> & {
		title?: string;
		startSlot?: ReactElement<SlotProps>;
		endSlot?: ReactElement<SlotProps>;
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
			{renderSlot(startSlot, {
				style: styles.slot,
				color: styles.styleProps.color
			})}

			<Text style={styles.title}>{title}</Text>

			{renderSlot(startSlot, {
				style: styles.slot,
				color: styles.styleProps.color
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
				black: {},
				primary: {}
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
	},
	styleProps: {
		color: '',

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
				medium: {},
				small: {}
			}
		}
	}
}));
