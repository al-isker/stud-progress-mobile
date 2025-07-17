import { StyleProp, ViewStyle } from 'react-native';
import { StopwatchIcon } from '@/shared/assets/icons';
import { getWordByNumber } from '@/shared/lib/word-by-number';
import { NumberStat } from '@/shared/ui/number-stat';

type DaysWithoutMarkProps = {
	style?: StyleProp<ViewStyle>;
	value: number | null;
};

export const DaysWithoutMark = ({ style, value }: DaysWithoutMarkProps) => {
	let formattedValue: string;
	let hint: string | undefined;

	if (value === null) {
		formattedValue = '−';
	} else {
		formattedValue = value.toString();

		hint = getWordByNumber(value, {
			one: 'день',
			two: 'дня',
			five: 'дней'
		});
	}

	return (
		<NumberStat
			style={style}
			title='Нет баллов'
			value={formattedValue}
			valueHint={hint}
			headerStartSlot={<StopwatchIcon />}
		/>
	);
};
