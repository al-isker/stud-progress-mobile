import React from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { PulseIndicator } from '@/shared/ui/pulse-indicator';
import { RatingItem } from '../../model/types/rating-item';
import { RatingStatus } from '../../model/types/rating-status';

type Props = Pick<RatingItem, 'status' | 'mark' | 'isNew'> & {
	style?: StyleProp<ViewStyle>;
};

export const Mark = ({ style, status, mark, isNew }: Props) => {
	const { styles } = useStyles(stylesheet, { status });

	const statusDisplay = {
		[RatingStatus.MARK]: mark,
		[RatingStatus.EMPTY]: '−',
		[RatingStatus.ABSENCE]: 'н/б',
		[RatingStatus.UPWORKED]: 'н/б',
		[RatingStatus.UPWORKED_WITH_MARK]: mark
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
		borderRadius: theme.borderRadius / 4,

		variants: {
			status: {
				[RatingStatus.MARK]: {
					backgroundColor: theme.colors.blackAlpha(0.08)
				},
				[RatingStatus.EMPTY]: {
					backgroundColor: theme.colors.blackAlpha(0.08)
				},
				[RatingStatus.ABSENCE]: {
					backgroundColor: theme.colors.redAlpha(0.1)
				},
				[RatingStatus.UPWORKED]: {
					backgroundColor: theme.colors.greenAlpha(0.15)
				},
				[RatingStatus.UPWORKED_WITH_MARK]: {
					backgroundColor: theme.colors.greenAlpha(0.15)
				}
			}
		}
	},
	text: {
		variants: {
			status: {
				[RatingStatus.MARK]: {
					color: theme.colors.black,
					fontSize: 16,
					fontFamily: theme.typography.fontFamily.GolosTextMedium
				},
				[RatingStatus.EMPTY]: {
					color: theme.colors.black,
					fontSize: 14,
					fontFamily: theme.typography.fontFamily.GolosTextRegular
				},
				[RatingStatus.ABSENCE]: {
					color: theme.colors.red,
					fontSize: 11,
					fontFamily: theme.typography.fontFamily.GolosTextSemiBold
				},
				[RatingStatus.UPWORKED]: {
					color: theme.colors.green,
					fontSize: 11,
					fontFamily: theme.typography.fontFamily.GolosTextSemiBold
				},
				[RatingStatus.UPWORKED_WITH_MARK]: {
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
