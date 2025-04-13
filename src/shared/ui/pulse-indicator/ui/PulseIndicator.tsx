import React, { useEffect } from 'react';
import { View, ViewProps } from 'react-native';
import Animated, {
	useSharedValue,
	withDelay,
	withRepeat,
	withSequence,
	withTiming
} from 'react-native-reanimated';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { animationDelay } from '../model/config/animation-delay';
import { animationTimingConfig } from '../model/config/animation-timing-config';

export type PulseIndicatorProps = ViewProps;

export const PulseIndicator = ({ style, ...props }: PulseIndicatorProps) => {
	const { styles } = useStyles(stylesheet);

	const opacity = useSharedValue(1);
	const scale = useSharedValue(1);

	useEffect(() => {
		opacity.value = withRepeat(
			withDelay(
				animationDelay,
				withSequence(
					withTiming(0.5, animationTimingConfig),
					withTiming(0, animationTimingConfig)
				)
			),
			-1
		);

		scale.value = withRepeat(
			withDelay(
				animationDelay,
				withSequence(
					withTiming(1, animationTimingConfig),
					withTiming(1.75, animationTimingConfig)
				)
			),
			-1
		);
	}, []);

	return (
		<View style={[styles.indicator, style]} {...props}>
			<Animated.View
				style={[styles.pulse, { opacity, transform: [{ scale }] }]}
			/>
		</View>
	);
};

const stylesheet = createStyleSheet(theme => ({
	indicator: {
		width: 14,
		height: 14,
		borderRadius: 1000,
		borderWidth: 2,
		borderColor: theme.colors.white,
		backgroundColor: theme.colors.red
	},
	pulse: {
		flex: 1,
		borderRadius: 1000,
		backgroundColor: theme.colors.red
	}
}));
