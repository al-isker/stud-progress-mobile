import React, { forwardRef } from 'react';
import { View, ViewProps } from 'react-native';
import {
	UnistylesVariants,
	createStyleSheet,
	useStyles
} from 'react-native-unistyles';

export type DividerProps = ViewProps & UnistylesVariants<typeof stylesheet>;

export const Divider = forwardRef<View, DividerProps>(function Divider(
	{ orientation = 'horizontal', size = 'medium', style, ...props },
	ref
) {
	const { styles } = useStyles(stylesheet, { orientation, size });

	return <View ref={ref} style={[styles.divider, style]} {...props} />;
});

const stylesheet = createStyleSheet(theme => ({
	divider: {
		borderWidth: 0,
		borderStyle: 'solid',
		borderColor: theme.colors.blackAlpha(0.2),

		borderTopWidth: 0,
		borderLeftWidth: 0,

		variants: {
			orientation: {
				horizontal: {
					borderRightWidth: 0
				},
				vertical: {
					borderBottomWidth: 0
				}
			},
			size: {
				large: {
					borderWidth: 1.5
				},
				medium: {
					borderWidth: 1
				},
				small: {
					borderWidth: 0.75
				}
			}
		}
	}
}));
