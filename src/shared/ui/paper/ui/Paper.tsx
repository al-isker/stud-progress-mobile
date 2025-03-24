import React, { forwardRef } from 'react';
import { Platform, View, ViewProps } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

export interface PaperProps extends ViewProps {}

export const Paper = forwardRef<View, PaperProps>(function Paper(
	{ style, ...props },
	ref
) {
	const { styles } = useStyles(stylesheet);

	return <View ref={ref} style={[styles.paper, style]} {...props} />;
});

const stylesheet = createStyleSheet(theme => ({
	paper: {
		borderRadius: theme.borderRadius,
		backgroundColor: theme.colors.bgPaper,
		...Platform.select({
			android: {
				elevation: 4
			},
			ios: {
				shadowColor: theme.colors.alwaysBlack,
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
