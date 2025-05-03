import React, { forwardRef } from 'react';
import { Canvas, Group, Path, Skia } from '@shopify/react-native-skia';
import { View, ViewProps } from 'react-native';
import { SharedValue, useDerivedValue } from 'react-native-reanimated';
import { useStyles } from 'react-native-unistyles';
import { ProgressValue } from './ProgressValue';

export type ProgressChartProps = ViewProps & {
	diameter: number;
	value: SharedValue<number | null>;
	maxValue: number;
	showOnZero?: boolean;
	formatValue?: (value: number | null) => string;
};

export const ProgressChart = forwardRef<View, ProgressChartProps>(
	function ProgressChart(
		{ diameter, style, value, maxValue, showOnZero, formatValue, ...props },
		ref
	) {
		const { theme } = useStyles();

		const radius = diameter / 2;
		const strokeWidth = radius / 3.5;
		const innerRadius = radius - strokeWidth / 2;

		const path = Skia.Path.Make().addCircle(radius, radius, innerRadius);

		const progressEnd = useDerivedValue(() => {
			if (value.value !== null) {
				if (showOnZero && value.value === 0) {
					return 0.001;
				}

				return value.value / maxValue;
			}

			return 0;
		}, []);

		return (
			<View
				ref={ref}
				style={[{ width: diameter, height: diameter }, style]}
				{...props}
			>
				<Canvas style={{ flex: 1 }}>
					<Group
						transform={[{ rotate: -Math.PI / 2 }]}
						origin={{ x: radius, y: radius }}
					>
						<Path
							path={path}
							strokeWidth={strokeWidth}
							style='stroke'
							color={theme.colors.blackAlpha(0.125)}
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

					<ProgressValue
						radius={radius}
						value={value}
						formatValue={formatValue}
					/>
				</Canvas>
			</View>
		);
	}
);
