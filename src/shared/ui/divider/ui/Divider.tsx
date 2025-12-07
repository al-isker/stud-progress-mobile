import { Ref } from 'react';
import { View, ViewProps } from 'react-native';
import { StyleSheet, UnistylesVariants } from 'react-native-unistyles';

export type DividerProps = ViewProps &
	UnistylesVariants<typeof styles> & {
		ref?: Ref<View>;
	};

export const Divider = ({
	orientation = 'horizontal',
	size = 'medium',
	style,
	...props
}: DividerProps) => {
	styles.useVariants({ orientation, size });

	return <View style={[styles.divider, style]} {...props} />;
};

const styles = StyleSheet.create(theme => ({
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
