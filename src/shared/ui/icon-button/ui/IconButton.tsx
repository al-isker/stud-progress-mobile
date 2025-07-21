import { ReactElement, forwardRef } from 'react';
import { View } from 'react-native';
import {
	UnistylesVariants,
	createStyleSheet,
	useStyles
} from 'react-native-unistyles';
import { SlotProps, renderSlot } from '@/shared/lib/slot';
import { Touchable, TouchableProps } from '@/shared/ui/touchable';

export type IconButtonProps = Omit<
	TouchableProps,
	'children' | 'feedbackColor' | 'contentContainerStyle'
> &
	UnistylesVariants<typeof stylesheet> & {
		children: ReactElement<SlotProps>;
	};

export const IconButton = forwardRef<View, IconButtonProps>(function IconButton(
	{ children, variant = 'primary', size = 'medium', style, ...props },
	forwardedRef
) {
	const { styles } = useStyles(stylesheet, { variant, size });

	return (
		<Touchable
			ref={forwardedRef}
			feedbackColor={styles.feedback.color}
			style={[styles.touchable, style]}
			contentContainerStyle={styles.touchableContentContainer}
			{...props}
		>
			{renderSlot(children, {
				style: styles.icon,
				color: styles.slotProps.color
			})}
		</Touchable>
	);
});

export const stylesheet = createStyleSheet(theme => ({
	touchable: {
		overflow: 'hidden',
		aspectRatio: 1,

		variants: {
			variant: {
				primary: {},
				secondary: {},
				text: {}
			},
			size: {
				large: {
					height: 54,
					borderRadius: theme.borderRadius * 1.35
				},
				medium: {
					height: 40,
					borderRadius: theme.borderRadius
				},
				small: {
					height: 32,
					borderRadius: theme.borderRadius * 0.8
				}
			}
		}
	},
	touchableContentContainer: {
		height: '100%',
		width: '100%',
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
			size: {}
		}
	},
	icon: {
		aspectRatio: 1,

		variants: {
			variant: {},
			size: {
				large: {
					height: 20
				},
				medium: {
					height: 16
				},
				small: {
					height: 13
				}
			}
		}
	},
	slotProps: {
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
