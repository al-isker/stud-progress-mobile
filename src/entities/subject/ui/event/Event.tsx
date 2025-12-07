import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { PulseIndicator } from '@/shared/ui/pulse-indicator';
import { EventStatusEnum } from '../../model/types/event-status';

type EventProps = {
	style?: StyleProp<ViewStyle>;
	status: EventStatusEnum;
	mark: number | null;
	isNew: boolean;
};

export const Event = ({ style, status, mark, isNew }: EventProps) => {
	styles.useVariants({ status });

	const statusDisplay = {
		[EventStatusEnum.MARK]: mark,
		[EventStatusEnum.EMPTY]: '−',
		[EventStatusEnum.ABSENCE]: 'н/б',
		[EventStatusEnum.UPWORKED]: 'н/б'
	};

	return (
		<View style={[styles.container, style]}>
			<Text style={styles.text}>{statusDisplay[status]}</Text>

			{isNew && <PulseIndicator style={styles.pulseIndicator} />}
		</View>
	);
};

const styles = StyleSheet.create(theme => ({
	container: {
		width: 30,
		height: 30,
		position: 'relative',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: theme.borderRadius / 1.4,

		variants: {
			status: {
				[EventStatusEnum.MARK]: {
					backgroundColor: theme.colors.blackAlpha(0.07)
				},
				[EventStatusEnum.EMPTY]: {
					backgroundColor: theme.colors.blackAlpha(0.07)
				},
				[EventStatusEnum.ABSENCE]: {
					backgroundColor: theme.colors.redAlpha(0.1)
				},
				[EventStatusEnum.UPWORKED]: {
					backgroundColor: theme.colors.blackAlpha(0.07)
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
					color: theme.colors.black,
					fontSize: 11,
					fontFamily: theme.typography.fontFamily.GolosTextSemiBold
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
