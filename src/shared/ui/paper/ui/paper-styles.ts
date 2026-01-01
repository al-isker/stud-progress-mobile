import { StyleSheet } from 'react-native-unistyles';

export const paperStyles = StyleSheet.create(theme => {
	const borderRadius = theme.borderRadius * 1.8;
	const backgroundColor = theme.colors.bgPaper;
	const shadowColor = theme.colors.alwaysBlackAlpha(0.25);

	return {
		androidContainer: {
			backgroundColor,
			borderRadius,
			shadowColor,
			elevation: 4
		},
		iosContainer: {
			shadowColor,
			shadowOffset: { width: 0, height: 3 },
			shadowOpacity: 0.2,
			shadowRadius: 3
		},
		iosContentContainer: {
			flex: 1,
			backgroundColor,
			borderRadius
		}
	};
});
