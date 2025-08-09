import dayjs from 'dayjs';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { PulseIndicator } from '@/shared/ui/pulse-indicator';
import { TEST_STATUS_DISPLAY } from '../../lib/const/test-status-display';
import { ControlTypeEnum } from '../../model/types/control-type';
import { GradeStatusEnum } from '../../model/types/grade-status';

type GradeProps = {
	style?: StyleProp<ViewStyle>;
	status: GradeStatusEnum;
	date: string;
	controlType: ControlTypeEnum;
	mark: number | null;
	isNew: boolean;
};

export const Grade = ({
	style,
	status,
	date,
	controlType,
	mark,
	isNew
}: GradeProps) => {
	const { styles } = useStyles(stylesheet, { status });

	return (
		<View style={[styles.container, style]}>
			{date && (
				<View style={[styles.block, styles.topBlock]}>
					<Text style={[styles.topText, styles.coloredText]}>
						{dayjs(date).format('DD MMMM YYYY')}
					</Text>
				</View>
			)}

			<View style={[styles.block, styles.bottomBlock]}>
				{status === GradeStatusEnum.EMPTY ? (
					<Text style={styles.emptyText}>−</Text>
				) : controlType === ControlTypeEnum.TEST ? (
					<Text style={[styles.testText, styles.coloredText]}>
						{TEST_STATUS_DISPLAY[status]}
					</Text>
				) : (
					<Text style={[styles.mark, styles.coloredText]}>{mark}</Text>
				)}
			</View>

			{isNew && <PulseIndicator style={styles.pulseIndicator} />}
		</View>
	);
};

const stylesheet = createStyleSheet(theme => ({
	container: {
		position: 'relative',
		overflow: 'hidden',
		minWidth: 140,
		rowGap: 1.2,
		borderRadius: theme.borderRadius / 1.4
	},
	block: {
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 1,

		variants: {
			status: {
				[GradeStatusEnum.PASS]: {
					backgroundColor: theme.colors.primaryAlpha(0.08)
				},
				[GradeStatusEnum.FAIL]: {
					backgroundColor: theme.colors.redAlpha(0.1)
				},
				[GradeStatusEnum.EMPTY]: {
					backgroundColor: theme.colors.blackAlpha(0.07)
				}
			}
		}
	},
	topBlock: {
		paddingVertical: 4,
		paddingHorizontal: 6
	},
	bottomBlock: {
		flex: 1
	},
	topText: {
		textAlign: 'center',
		fontSize: 10,
		fontFamily: theme.typography.fontFamily.GolosTextMedium
	},
	emptyText: {
		color: theme.colors.black,
		fontSize: 13,
		fontFamily: theme.typography.fontFamily.GolosTextMedium
	},
	testText: {
		marginBottom: 2,
		fontSize: 13,
		fontFamily: theme.typography.fontFamily.GolosTextSemiBold
	},
	mark: {
		fontSize: 20,
		fontFamily: theme.typography.fontFamily.GolosTextSemiBold
	},
	coloredText: {
		variants: {
			status: {
				[GradeStatusEnum.PASS]: {
					color: theme.colors.black
				},
				[GradeStatusEnum.FAIL]: {
					color: theme.colors.red
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
