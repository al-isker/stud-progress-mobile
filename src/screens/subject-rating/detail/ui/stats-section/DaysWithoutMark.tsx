import { StyleProp, ViewStyle } from 'react-native';
import { getRuPluralForm } from '@/shared/lib/plural';
import { StopwatchIcon } from '@/shared/ui/icons';
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

		hint = getRuPluralForm(value, {
			one: 'день',
			few: 'дня',
			many: 'дней'
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
