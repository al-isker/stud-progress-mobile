import { SkFont, Text } from '@shopify/react-native-skia';
import { SharedValue, useDerivedValue } from 'react-native-reanimated';

type ProgressValueProps = {
	radius: number;
	font: SkFont;
	color: string;
	sharedValue:
		| SharedValue<number | null>
		| SharedValue<number>
		| SharedValue<null>;
	formatValue?: (value: number | null) => string;
};

export const ProgressValue = ({
	radius,
	font,
	color,
	sharedValue,
	formatValue
}: ProgressValueProps) => {
	const text = useDerivedValue(() => {
		return (formatValue ?? String)(sharedValue.value);
	}, []);

	const x = useDerivedValue(() => {
		const bounds = font.measureText(text.value);

		return radius - bounds.x - bounds.width / 2;
	}, [radius]);

	const { ascent, descent } = font.getMetrics();
	const y = radius - (ascent + descent) / 2;

	return <Text text={text} x={x} y={y} font={font} color={color} />;
};
