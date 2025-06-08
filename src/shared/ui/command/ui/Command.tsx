import React, { FC, forwardRef } from 'react';
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
		StartSlot?: FC<{ style: StyleProp<ViewStyle | ImageStyle> }>;
		EndSlot?: FC<{ style: StyleProp<ViewStyle | ImageStyle> }>;
	};

export const Command = forwardRef<View, CommandProps>(function Command(
	{ size = 'medium', style, title, StartSlot, EndSlot, ...props },
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
			{StartSlot && <StartSlot style={styles.slot} />}

			<Text style={styles.title}>{title}</Text>

			{EndSlot && <EndSlot style={[styles.slot, styles.endSlot]} />}
		</Touchable>
	);
});

const stylesheet = createStyleSheet(theme => ({
	touchable: {
		overflow: 'hidden',
		borderRadius: 4
	},
	touchableContentContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		columnGap: 12,
		backgroundColor: theme.colors.primaryAlpha(0.05),

		variants: {
			size: {
				large: {
					padding: 18
				},
				medium: {
					paddingVertical: 12,
					paddingHorizontal: 16
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
		color: theme.colors.blackAlpha(0.8),

		variants: {
			size: {
				large: {
					height: 18
				},
				medium: {
					height: 16
				}
			}
		}
	},
	endSlot: {
		marginLeft: 'auto'
	}
}));
