import { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import {
	AltArrowDownIcon,
	AltArrowUpIcon,
	GraphUpIcon
} from '@/shared/assets/icons';
import { preciseRound } from '@/shared/lib/precise-round';
import { getWordByNumber } from '@/shared/lib/word-by-number';
import { NumberStat } from '@/shared/ui/number-stat';

type ImpactLastMarkProps = {
	style?: StyleProp<ViewStyle>;
	contentContainerStyle?: StyleProp<ViewStyle>;
	value: number | null;
};

export const ImpactLastMark = ({
	style,
	contentContainerStyle,
	value
}: ImpactLastMarkProps) => {
	let formattedValue: string;
	let hint: string | undefined;
	let MainStartIcon: FC | undefined;

	if (!value) {
		formattedValue = '−';
	} else {
		formattedValue = preciseRound(Math.abs(value), 1).toString();

		hint = getWordByNumber(value, {
			one: 'балл',
			two: 'балла',
			five: 'баллов'
		});

		if (value > 0) {
			MainStartIcon = AltArrowUpIcon;
		} else if (value < 0) {
			MainStartIcon = AltArrowDownIcon;
		}
	}

	return (
		<NumberStat
			style={style}
			contentContainerStyle={contentContainerStyle}
			title='Тенденция'
			value={formattedValue}
			valueHint={hint}
			headerStartSlot={<GraphUpIcon />}
			mainStartSlot={MainStartIcon && <MainStartIcon />}
		/>
	);
};
