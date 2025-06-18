import { SkFont, Text, useFont } from '@shopify/react-native-skia';
import { SharedValue, useDerivedValue } from 'react-native-reanimated';
import { useStyles } from 'react-native-unistyles';
import { GolosTextSemiBold } from '@/shared/assets/fonts';

type ProgressValueProps = {
	radius: number;
	fontSize: number;
	sharedValue:
		| SharedValue<number | null>
		| SharedValue<number>
		| SharedValue<null>;
	formatValue?: (value: number | null) => string;
};

export const ProgressValue = ({ fontSize, ...props }: ProgressValueProps) => {
	const font = useFont(GolosTextSemiBold, fontSize);

	if (font) {
		return <ProgressValueWithFont font={font} {...props} />;
	}
};

type ProgressValueWithFontProps = Omit<ProgressValueProps, 'fontSize'> & {
	font: SkFont;
};

const ProgressValueWithFont = ({
	radius,
	font,
	sharedValue,
	formatValue
}: ProgressValueWithFontProps) => {
	const { theme } = useStyles();

	const text = useDerivedValue(() => {
		return (formatValue ?? String)(sharedValue.value);
	}, []);

	const x = useDerivedValue(() => {
		return radius - font.measureText(text.value).width / 2;
	}, [radius]);

	const y = radius + font.measureText('0').height / 2;

	return (
		<Text
			text={text}
			x={x}
			y={y}
			font={font}
			color={theme.colors.blackAlpha(0.9)}
		/>
	);
};
