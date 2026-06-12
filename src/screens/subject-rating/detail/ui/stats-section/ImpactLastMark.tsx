import { StyleProp, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { getRuPluralForm } from '@/shared/lib/plural';
import { preciseRound } from '@/shared/lib/precise-round';
import { RenderSlotType } from '@/shared/lib/slot';
import { isDefined } from '@/shared/lib/toolkit';
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
	const roundedValue = isDefined(value) ? preciseRound(value, 1) : null;

	let formattedValue: string;
	let hint: string | undefined;
	let renderMainLeftIcon: RenderSlotType<SvgProps> | undefined;

	if (!roundedValue) {
		formattedValue = '−';
	} else {
		formattedValue = Math.abs(roundedValue).toString();

		hint = getRuPluralForm(roundedValue, {
			one: 'балл',
			few: 'балла',
			many: 'баллов'
		});

		if (roundedValue > 0) {
			renderMainLeftIcon = AltArrowUpIcon;
		} else if (roundedValue < 0) {
			renderMainLeftIcon = AltArrowDownIcon;
		}
	}

	return (
		<NumberStat
			style={style}
			title='Тенденция'
			value={formattedValue}
			valueHint={hint}
			renderHeaderLeftIcon={GraphUpIcon}
			renderMainLeftIcon={renderMainLeftIcon}
		/>
	);
};
