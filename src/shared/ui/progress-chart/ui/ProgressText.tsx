import React from 'react';
import { SkFont, Text, useFont } from '@shopify/react-native-skia';
import { SharedValue, useDerivedValue } from 'react-native-reanimated';
import { useStyles } from 'react-native-unistyles';
import { GolosTextSemiBold } from '@/shared/assets/fonts';

type ProgressTextProps = {
	radius: number;
	value: SharedValue<number>;
	format?: (value: number) => string;
};

export const ProgressText = (progressTextProps: ProgressTextProps) => {
	const font = useFont(GolosTextSemiBold, 26);

	if (font) {
		return <ProgressTextWithFont font={font} {...progressTextProps} />;
	}
};

type ProgressTextWithFontProps = ProgressTextProps & {
	font: SkFont;
};

const ProgressTextWithFont = ({
	font,
	radius,
	value,
	format
}: ProgressTextWithFontProps) => {
	const { theme } = useStyles();

	const text = useDerivedValue(() => {
		return (format ?? String)(value.value);
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
