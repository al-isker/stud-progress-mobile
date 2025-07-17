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
	{ size = 'medium', style, title, startSlot, endSlot, ...props },
	forwardedRef
) {
	const { theme, styles } = useStyles(stylesheet, { size });

	return (
		<Touchable
			ref={forwardedRef}
			feedbackColor={theme.colors.blackAlpha(0.1)}
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
				style: [styles.slot, styles.endSlot],
				color: styles.styleProps.color
			})}
		</Touchable>
	);
});

const stylesheet = createStyleSheet(theme => ({
	touchable: {
		overflow: 'hidden',
		borderRadius: theme.borderRadius / 4,
		variants: {
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
		backgroundColor: theme.colors.primaryAlpha(0.05),

		variants: {
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
		color: theme.colors.blackAlpha(0.8),
		fontFamily: theme.typography.fontFamily.GolosTextRegular,

		variants: {
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
		height: '42.5%'
	},
	endSlot: {
		marginLeft: 'auto'
	},
	styleProps: {
		color: theme.colors.blackAlpha(0.8)
	}
}));
