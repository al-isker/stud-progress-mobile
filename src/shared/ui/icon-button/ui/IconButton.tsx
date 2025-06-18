import { ReactElement, cloneElement, forwardRef } from 'react';
import { ImageStyle, StyleProp, View, ViewStyle } from 'react-native';
import {
	UnistylesVariants,
	createStyleSheet,
	useStyles
} from 'react-native-unistyles';
import { Touchable, TouchableProps } from '@/shared/ui/touchable';

export type IconButtonProps = Omit<
	TouchableProps,
	'children' | 'feedbackColor' | 'contentContainerStyle'
> &
	UnistylesVariants<typeof stylesheet> & {
		children: ReactElement<{ style: StyleProp<ViewStyle | ImageStyle> }>;
	};

export const IconButton = forwardRef<View, IconButtonProps>(function IconButton(
	{ children, variant = 'primary', size = 'medium', style, ...touchableProps },
	forwardedRef
) {
	const { styles } = useStyles(stylesheet, { variant, size });

	return (
		<Touchable
			ref={forwardedRef}
			feedbackColor={styles.touchableContentContainer.feedbackColor}
			style={[styles.touchable, style]}
			contentContainerStyle={styles.touchableContentContainer}
			{...touchableProps}
		>
			{cloneElement(children, {
				style: [styles.icon, children.props.style]
			})}
		</Touchable>
	);
});

export const stylesheet = createStyleSheet(theme => ({
	touchable: {
		overflow: 'hidden',

		variants: {
			variant: {
				primary: {},
				secondary: {},
				text: {}
			},
			size: {
				large: {
					borderRadius: theme.borderRadius * 1.35
				},
				medium: {
					borderRadius: theme.borderRadius
				},
				small: {
					borderRadius: theme.borderRadius * 0.8
				}
			}
		}
	},
	touchableContentContainer: {
		aspectRatio: 1,
		justifyContent: 'center',
		alignItems: 'center',

		variants: {
			variant: {
				primary: {
					backgroundColor: theme.colors.primary,
					feedbackColor: theme.colors.alwaysBlackAlpha(0.3)
				},
				secondary: {
					backgroundColor: theme.colors.blackAlpha(0.08),
					feedbackColor: theme.colors.blackAlpha(0.08)
				},
				text: {
					backgroundColor: theme.colors.transparent,
					feedbackColor: theme.colors.blackAlpha(0.1)
				}
			},
			size: {
				large: {
					height: 54
				},
				medium: {
					height: 40
				},
				small: {
					height: 32
				}
			}
		}
	},
	icon: {
		aspectRatio: 1,
		height: '42.5%',

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
				large: {},
				medium: {},
				small: {}
			}
		}
	}
}));
