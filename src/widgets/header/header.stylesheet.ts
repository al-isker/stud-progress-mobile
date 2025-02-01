import { createStyleSheet } from 'react-native-unistyles';

export const stylesheet = createStyleSheet(theme => ({
	header: {
		zIndex: theme.zIndex.header,
		elevation: 8,
		backgroundColor: theme.colors.primary,
		paddingTop: 8,
		paddingInline: 16,
		paddingBottom: 16
	},
	title: {
		fontFamily: theme.typography.fontFamily.GolosTextBold,
		fontSize: theme.typography.fontSize.h1,
		color: theme.colors.white
	}
}));
