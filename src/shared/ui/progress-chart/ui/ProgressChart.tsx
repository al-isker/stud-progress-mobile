import { forwardRef } from 'react';
import { Canvas, Group, Path, Skia } from '@shopify/react-native-skia';
import { View, ViewProps } from 'react-native';
import { SharedValue, useDerivedValue } from 'react-native-reanimated';
import { useStyles } from 'react-native-unistyles';
import { ProgressValue } from './ProgressValue';

export type ProgressChartProps = ViewProps & {
	diameter: number;
	strokeWidth: number;
	fontSize: number;
	sharedValue:
		| SharedValue<number | null>
		| SharedValue<number>
		| SharedValue<null>;
	maxValue: number;
	showOnZero?: boolean;
	formatValue?: (value: number | null) => string;
};

export const ProgressChart = forwardRef<View, ProgressChartProps>(
	function ProgressChart(
		{
			diameter,
			strokeWidth,
			fontSize,
			style,
			sharedValue,
			maxValue,
			showOnZero,
			formatValue,
			...props
		},
		forwardedRef
	) {
		const { theme } = useStyles();

		const radius = diameter / 2;
		const innerRadius = radius - strokeWidth / 2;

		const path = Skia.Path.Make().addCircle(radius, radius, innerRadius);

		const progressEnd = useDerivedValue(() => {
			if (sharedValue.value !== null) {
				if (showOnZero && sharedValue.value === 0) {
					return 0.001;
				}

				return sharedValue.value / maxValue;
			}

			return 0;
		}, []);

		return (
			<View
				ref={forwardedRef}
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
							color={theme.colors.blackAlpha(0.1)}
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
						fontSize={fontSize}
						sharedValue={sharedValue}
						formatValue={formatValue}
					/>
				</Canvas>
			</View>
		);
	}
);
