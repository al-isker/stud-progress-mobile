import React, { useEffect } from 'react';
import { Canvas, Group, Path, Skia } from '@shopify/react-native-skia';
import { View, ViewProps } from 'react-native';
import {
	useDerivedValue,
	useSharedValue,
	withTiming
} from 'react-native-reanimated';
import { useStyles } from 'react-native-unistyles';
import { animationTimingConfig } from '../model/config/animation-timing-config';
import { ProgressText } from './ProgressText';

export type ProgressChartProps = ViewProps & {
	diameter: number;
	value: number;
	maxValue: number;
	formatValue?: (value: number) => string;
};

export const ProgressChart = ({
	diameter,
	style,
	value,
	maxValue,
	formatValue,
	...props
}: ProgressChartProps) => {
	const { theme } = useStyles();

	const radius = diameter / 2;
	const strokeWidth = radius / 3.5;
	const innerRadius = radius - strokeWidth / 2;

	const path = Skia.Path.Make().addCircle(radius, radius, innerRadius);

	const sharedValue = useSharedValue(0);

	const progressEnd = useDerivedValue(() => {
		return sharedValue.value / maxValue;
	}, []);

	useEffect(() => {
		sharedValue.set(withTiming(value, animationTimingConfig));
	}, [value]);

	return (
		<View style={[{ width: diameter, height: diameter }, style]} {...props}>
			<Canvas style={{ flex: 1 }}>
				<Group
					transform={[{ rotate: -Math.PI / 2 }]}
					origin={{ x: radius, y: radius }}
				>
					<Path
						path={path}
						strokeWidth={strokeWidth}
						style='stroke'
						color={theme.colors.blackAlpha(0.15)}
						start={0}
						end={1}
					/>
					<Path
						path={path}
						strokeWidth={strokeWidth}
						style='stroke'
						strokeJoin='round'
						strokeCap='round'
						color={theme.colors.primary}
						start={0}
						end={progressEnd}
					/>
				</Group>

				<ProgressText
					radius={radius}
					value={sharedValue}
					formatValue={formatValue}
				/>
			</Canvas>
		</View>
	);
};
