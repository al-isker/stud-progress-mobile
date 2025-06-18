import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { PulseIndicator } from '@/shared/ui/pulse-indicator';
import { IEvent } from '../../model/types/event';
import { EventStatusEnum } from '../../model/types/event-status';

type EventProps = Pick<IEvent, 'status' | 'mark' | 'isNew'> & {
	style?: StyleProp<ViewStyle>;
};

export const Event = ({ style, status, mark, isNew }: EventProps) => {
	const { styles } = useStyles(stylesheet, { status });

	const statusDisplay = {
		[EventStatusEnum.MARK]: mark,
		[EventStatusEnum.EMPTY]: '−',
		[EventStatusEnum.ABSENCE]: 'н/б',
		[EventStatusEnum.UPWORKED]: 'н/б',
		[EventStatusEnum.UPWORKED_WITH_MARK]: mark
	};

	return (
		<View style={[styles.container, style]}>
			<Text style={styles.text}>{statusDisplay[status]}</Text>

			{isNew && <PulseIndicator style={styles.pulseIndicator} />}
		</View>
	);
};

const stylesheet = createStyleSheet(theme => ({
	container: {
		aspectRatio: 1,
		position: 'relative',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: theme.borderRadius / 1.4,

		variants: {
			status: {
				[EventStatusEnum.MARK]: {
					backgroundColor: theme.colors.blackAlpha(0.08)
				},
				[EventStatusEnum.EMPTY]: {
					backgroundColor: theme.colors.blackAlpha(0.08)
				},
				[EventStatusEnum.ABSENCE]: {
					backgroundColor: theme.colors.redAlpha(0.1)
				},
				[EventStatusEnum.UPWORKED]: {
					backgroundColor: theme.colors.greenAlpha(0.15)
				},
				[EventStatusEnum.UPWORKED_WITH_MARK]: {
					backgroundColor: theme.colors.greenAlpha(0.15)
				}
			}
		}
	},
	text: {
		variants: {
			status: {
				[EventStatusEnum.MARK]: {
					color: theme.colors.black,
					fontSize: 16,
					fontFamily: theme.typography.fontFamily.GolosTextMedium
				},
				[EventStatusEnum.EMPTY]: {
					color: theme.colors.black,
					fontSize: 14,
					fontFamily: theme.typography.fontFamily.GolosTextRegular
				},
				[EventStatusEnum.ABSENCE]: {
					color: theme.colors.red,
					fontSize: 11,
					fontFamily: theme.typography.fontFamily.GolosTextSemiBold
				},
				[EventStatusEnum.UPWORKED]: {
					color: theme.colors.green,
					fontSize: 11,
					fontFamily: theme.typography.fontFamily.GolosTextSemiBold
				},
				[EventStatusEnum.UPWORKED_WITH_MARK]: {
					color: theme.colors.green,
					fontSize: 16,
					fontFamily: theme.typography.fontFamily.GolosTextMedium
				}
			}
		}
	},
	pulseIndicator: {
		position: 'absolute',
		top: -4,
		right: -4,
		borderColor: theme.colors.bgPaper
	}
}));
