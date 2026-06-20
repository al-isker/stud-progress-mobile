import { Ref } from 'react';
import { Canvas, Group, Path, Skia } from '@shopify/react-native-skia';
import { View, ViewProps } from 'react-native';
import { SharedValue, useDerivedValue } from 'react-native-reanimated';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import { useSkiaFont } from '@/shared/lib/skia-fonts';
import { ProgressValue } from './ProgressValue';

export type ProgressChartProps = ViewProps & {
	ref?: Ref<View>;
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

export const ProgressChart = ({
	diameter,
	strokeWidth,
	fontSize,
	style,
	sharedValue,
	maxValue,
	showOnZero,
	formatValue,
	...props
}: ProgressChartProps) => {
	const { theme } = useUnistyles();

	const font = useSkiaFont({
		fontFamily: 'GolosTextSemiBold',
		fontSize
	});

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
		<View style={[styles.container(diameter), style]} {...props}>
			<Canvas style={styles.canvas}>
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
					font={font}
					color={theme.colors.blackAlpha(0.9)}
					sharedValue={sharedValue}
					formatValue={formatValue}
				/>
			</Canvas>
		</View>
	);
};

const styles = StyleSheet.create({
	container: (diameter: number) => ({
		width: diameter,
		height: diameter
	}),
	canvas: {
		flex: 1
	}
});
