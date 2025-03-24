import React, { FC, forwardRef } from 'react';
import { ImageStyle, StyleProp, Text, View, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Touchable, TouchableProps } from '@/shared/ui/touchable';

export interface CommandProps extends Omit<TouchableProps, 'children'> {
	size?: 'large' | 'medium';
	title?: string;
	StartIcon?: FC<{ style: StyleProp<ViewStyle | ImageStyle> }>;
	EndIcon?: FC<{ style: StyleProp<ViewStyle | ImageStyle> }>;
}

export const Command = forwardRef<View, CommandProps>(
	({ size = 'medium', style, title, StartIcon, EndIcon, ...props }, ref) => {
		const { styles } = useStyles(stylesheet, { size });

		return (
			<View ref={ref} style={[styles.container, style]}>
				<Touchable
					style={styles.command}
					androidFeedbackColor={styles.command.androidFeedbackColor}
					iOSActiveOpacity={styles.command.iOSActiveOpacity}
					{...props}
				>
					{StartIcon && <StartIcon style={styles.icon} />}

					<Text style={styles.title}>{title}</Text>

					{EndIcon && <EndIcon style={[styles.icon, styles.endIcon]} />}
				</Touchable>
			</View>
		);
	}
);

const stylesheet = createStyleSheet(theme => ({
	container: {
		overflow: 'hidden',
		borderRadius: 4
	},
	command: {
		flexDirection: 'row',
		alignItems: 'center',
		columnGap: 12,

		backgroundColor: theme.colors.primaryAlpha(0.05),
		androidFeedbackColor: theme.colors.blackAlpha(0.1),
		iOSActiveOpacity: 0.6,

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
	icon: {
		aspectRatio: 1,
		color: theme.colors.blackAlpha(0.8),
		fontFamily: theme.typography.fontFamily.GolosTextRegular,

		variants: {
			size: {
				large: {
					height: 18,
					fontSize: 15
				},
				medium: {
					height: 16,
					fontSize: 14
				}
			}
		}
	},
	endIcon: {
		marginLeft: 'auto'
	}
}));
