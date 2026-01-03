import { StyleProp, ViewStyle } from 'react-native';
import { getWordByNumber } from '@/shared/lib/word-by-number';
import { StopwatchIcon } from '@/shared/ui/icons';
import { NumberStat } from '@/shared/ui/number-stat';

type DaysWithoutMarkProps = {
	style?: StyleProp<ViewStyle>;
	contentContainerStyle?: StyleProp<ViewStyle>;
	value: number | null;
};

export const DaysWithoutMark = ({
	style,
	contentContainerStyle,
	value
}: DaysWithoutMarkProps) => {
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
			contentContainerStyle={contentContainerStyle}
			title='Нет баллов'
			value={formattedValue}
			valueHint={hint}
			headerStartSlot={<StopwatchIcon />}
		/>
	);
};
