import { Ref } from 'react';
import { View, ViewProps } from 'react-native';
import {
	UnistylesVariants,
	createStyleSheet,
	useStyles
} from 'react-native-unistyles';

export type DividerProps = ViewProps &
	UnistylesVariants<typeof stylesheet> & {
		ref?: Ref<View>;
	};

export const Divider = ({
	orientation = 'horizontal',
	size = 'medium',
	style,
	...props
}: DividerProps) => {
	const { styles } = useStyles(stylesheet, { orientation, size });

	return <View style={[styles.divider, style]} {...props} />;
};

const stylesheet = createStyleSheet(theme => ({
	divider: {
		borderWidth: 0,
		borderStyle: 'solid',
		borderColor: theme.colors.blackAlpha(0.12),

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
				medium: {
					borderWidth: 1
				},
				small: {
					borderWidth: 0.8
				}
			}
		}
	}
}));
