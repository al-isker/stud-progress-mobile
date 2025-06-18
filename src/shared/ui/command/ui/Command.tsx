import { ReactElement, cloneElement, forwardRef } from 'react';
import { ImageStyle, StyleProp, Text, View, ViewStyle } from 'react-native';
import {
	UnistylesVariants,
	createStyleSheet,
	useStyles
} from 'react-native-unistyles';
import { Touchable, TouchableProps } from '@/shared/ui/touchable';

export type CommandProps = Omit<
	TouchableProps,
	'children' | 'feedbackColor' | 'contentContainerStyle'
> &
	UnistylesVariants<typeof stylesheet> & {
		title?: string;
		startSlot?: ReactElement<{ style: StyleProp<ViewStyle | ImageStyle> }>;
		endSlot?: ReactElement<{ style: StyleProp<ViewStyle | ImageStyle> }>;
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
			{startSlot &&
				cloneElement(startSlot, {
					style: [styles.slot, startSlot.props.style]
				})}

			<Text style={styles.title}>{title}</Text>

			{endSlot &&
				cloneElement(endSlot, {
					style: [styles.slot, styles.endSlot, endSlot.props.style]
				})}
		</Touchable>
	);
});

const stylesheet = createStyleSheet(theme => ({
	touchable: {
		overflow: 'hidden',
		borderRadius: theme.borderRadius / 4
	},
	touchableContentContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: theme.colors.primaryAlpha(0.05),

		variants: {
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
		height: '42.5%',
		color: theme.colors.blackAlpha(0.8)
	},
	endSlot: {
		marginLeft: 'auto'
	}
}));
