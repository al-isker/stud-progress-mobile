import { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { isExist } from '@/shared/lib/cheсks';
import { preciseRound } from '@/shared/lib/precise-round';
import { getWordByNumber } from '@/shared/lib/word-by-number';
import {
	AltArrowDownIcon,
	AltArrowUpIcon,
	GraphUpIcon
} from '@/shared/ui/icons';
import { NumberStat } from '@/shared/ui/number-stat';

type ImpactLastMarkProps = {
	style?: StyleProp<ViewStyle>;
	value: number | null;
};

export const ImpactLastMark = ({ style, value }: ImpactLastMarkProps) => {
	const roundedValue = isExist(value) ? preciseRound(value, 1) : null;

	let formattedValue: string;
	let hint: string | undefined;
	let MainStartIcon: FC | undefined;

	if (!roundedValue) {
		formattedValue = '−';
	} else {
		formattedValue = Math.abs(roundedValue).toString();

		hint = getWordByNumber(roundedValue, {
			one: 'балл',
			two: 'балла',
			five: 'баллов'
		});

		if (roundedValue > 0) {
			MainStartIcon = AltArrowUpIcon;
		} else if (roundedValue < 0) {
			MainStartIcon = AltArrowDownIcon;
		}
	}

	return (
		<NumberStat
			style={style}
			title='Тенденция'
			value={formattedValue}
			valueHint={hint}
			headerStartSlot={<GraphUpIcon />}
			mainStartSlot={MainStartIcon && <MainStartIcon />}
		/>
	);
};
