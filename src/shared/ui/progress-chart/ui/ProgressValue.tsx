import { SkFont, Text, useFont } from '@shopify/react-native-skia';
import { SharedValue, useDerivedValue } from 'react-native-reanimated';
import { useStyles } from 'react-native-unistyles';
import { GolosTextSemiBold } from '@/shared/assets/fonts';

type ProgressValueProps = {
	radius: number;
	value: SharedValue<number | null>;
	formatValue?: (value: number | null) => string;
};

export const ProgressValue = (props: ProgressValueProps) => {
	const fontSize = props.radius / 2;

	const font = useFont(GolosTextSemiBold, fontSize);

	if (font) {
		return <ProgressValueWithFont font={font} {...props} />;
	}
};

type ProgressValueWithFontProps = ProgressValueProps & {
	font: SkFont;
};

const ProgressValueWithFont = ({
	font,
	radius,
	value,
	formatValue
}: ProgressValueWithFontProps) => {
	const { theme } = useStyles();

	const text = useDerivedValue(() => {
		return (formatValue ?? String)(value.value);
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
