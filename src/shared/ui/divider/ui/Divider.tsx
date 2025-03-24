import React from 'react';
import { View, ViewProps } from 'react-native';
import {
	UnistylesVariants,
	createStyleSheet,
	useStyles
} from 'react-native-unistyles';

type DividerProps = ViewProps & UnistylesVariants<typeof stylesheet>;

export const Divider = ({
	orientation = 'horizontal',
	size = 'medium',
	style,
	...props
}: DividerProps) => {
	const { styles } = useStyles(stylesheet, { orientation, size });

	return <View style={[styles.divider, style]} {...props} />;
};

const stylesheet = createStyleSheet(() => ({
	divider: {
		borderWidth: 0,
		borderStyle: 'solid',

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
