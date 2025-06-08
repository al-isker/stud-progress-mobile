import React, { forwardRef } from 'react';
import { View, ViewProps } from 'react-native';
import Animated, {
	SharedValue,
	useAnimatedStyle
} from 'react-native-reanimated';
import {
	UnistylesVariants,
	createStyleSheet,
	useStyles
} from 'react-native-unistyles';

export type ProgressLoaderProps = ViewProps &
	UnistylesVariants<typeof stylesheet> & {
		value: SharedValue<number>;
	};

export const ProgressLoader = forwardRef<View, ProgressLoaderProps>(
	function ProgressLoader(
		{ colorOnPrimary = false, style, value, ...props },
		forwardedRef
	) {
		const { styles } = useStyles(stylesheet, { colorOnPrimary });

		const progressAnimatedStyle = useAnimatedStyle(() => ({
			width: `${value.value}%`
		}));

		return (
			<View ref={forwardedRef} style={[styles.loader, style]} {...props}>
				<Animated.View style={[styles.progress, progressAnimatedStyle]} />
			</View>
		);
	}
);

const stylesheet = createStyleSheet(theme => ({
	loader: {
		height: 10,
		overflow: 'hidden',
		borderRadius: 1000,
		backgroundColor: theme.colors.alwaysBlackAlpha(0.3)
	},
	progress: {
		height: '100%',
		backgroundColor: theme.colors.primary,

		variants: {
			colorOnPrimary: {
				true: {
					backgroundColor: theme.colors.alwaysWhite
				}
			}
		}
	}
}));
