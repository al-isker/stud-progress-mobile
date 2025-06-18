import { forwardRef } from 'react';
import { Platform, View, ViewProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export type PaperProps = ViewProps;

export const Paper = forwardRef<View, PaperProps>(function Paper(
	{ style, ...props },
	forwardedRef
) {
	const { styles } = useStyles(stylesheet);

	return <View ref={forwardedRef} style={[styles.paper, style]} {...props} />;
});

const stylesheet = createStyleSheet(theme => ({
	paper: {
		borderRadius: theme.borderRadius * 2,
		backgroundColor: theme.colors.bgPaper,
		shadowColor: theme.colors.alwaysBlackAlpha(0.65),

		...Platform.select({
			android: {
				elevation: 4
			},
			ios: {
				shadowOffset: {
					width: 0,
					height: 2
				},
				shadowOpacity: 0.23,
				shadowRadius: 2.62
			}
		})
	}
}));
