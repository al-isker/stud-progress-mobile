import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet(theme => ({
	wrapper: {
		overflow: 'hidden',
		borderRadius: theme.borderRadius / 2,
		color: theme.colors.white
	},
	touchable: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		columnGap: 12,

		variants: {
			variant: {
				primary: {
					backgroundColor: theme.colors.primary,
					androidFeedbackColor: theme.colors.alwaysBlackAlpha(0.15),
					iOSActiveOpacity: 0.8
				},
				secondary: {
					backgroundColor: theme.colors.primaryAlpha(0.1),
					androidFeedbackColor: theme.colors.primaryAlpha(0.1),
					iOSActiveOpacity: 0.7
				},
				text: {
					backgroundColor: theme.colors.transparent,
					androidFeedbackColor: theme.colors.blackAlpha(0.1),
					iOSActiveOpacity: 0.5
				}
			},
			size: {
				large: {
					padding: 18
				},
				medium: {
					padding: 12
				}
			}
		}
	},
	title: {
		textAlign: 'center',
		fontFamily: theme.typography.fontFamily.GolosTextRegular,

		variants: {
			variant: {
				primary: {
					color: theme.colors.alwaysWhite
				},
				secondary: {
					color: theme.colors.primary
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
				}
			}
		}
	},
	slot: {
		aspectRatio: 1,

		variants: {
			variant: {
				primary: {
					color: theme.colors.alwaysWhite
				},
				secondary: {
					color: theme.colors.primary
				},
				text: {
					color: theme.colors.blackAlpha(0.7)
				}
			},
			size: {
				large: {
					height: 18
				},
				medium: {
					height: 16
				}
			}
		}
	}
}));
