import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet(theme => ({
	textField: {},
	textInput: {
		position: 'relative',
		borderWidth: 1,
		borderColor: theme.colors.blackAlpha(0.1),
		borderRadius: theme.borderRadius / 2,
		paddingHorizontal: 12,
		backgroundColor: theme.colors.primaryAlpha(0.05),

		variants: {
			size: {
				large: {
					paddingTop: 24,
					paddingBottom: 10
				}
			}
		}
	},
	label: {
		position: 'absolute',
		left: 12,
		transformOrigin: 'top left',
		color: theme.colors.blackAlpha(0.3),
		fontFamily: theme.typography.fontFamily.GolosTextRegular,

		variants: {
			size: {
				large: {
					top: 17.5,
					fontSize: 15
				}
			}
		}
	},
	errorText: {
		marginTop: 2,
		marginHorizontal: 12
	}
}));
