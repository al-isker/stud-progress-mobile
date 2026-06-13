import dayjs from 'dayjs';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { PulseIndicator } from '@/shared/ui/pulse-indicator';
import { getTestStatusDisplay } from '../../lib/control-type/get-test-status-display';
import { ControlTypeEnum } from '../../model/control-type/control-type-enum';
import { GradeStatusEnum } from '../../model/subject-grade/grade-status-enum';

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
	styles.useVariants({ status });

	return (
		<View style={[styles.container, style]}>
			<View style={styles.blockContainer}>
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
							{getTestStatusDisplay(status)}
						</Text>
					) : (
						<Text style={[styles.mark, styles.coloredText]}>{mark}</Text>
					)}
				</View>
			</View>

			{isNew && <PulseIndicator style={styles.pulseIndicator} />}
		</View>
	);
};

const styles = StyleSheet.create(theme => ({
	container: {
		position: 'relative'
	},
	blockContainer: {
		flex: 1,
		overflow: 'hidden',
		minWidth: 140,
		rowGap: 1.2,
		borderRadius: theme.borderRadius * 0.7
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
		fontFamily: theme.typography.fontFamily.GolosText,
		fontWeight: 500
	},
	emptyText: {
		color: theme.colors.black,
		fontSize: 13,
		fontFamily: theme.typography.fontFamily.GolosText,
		fontWeight: 500
	},
	testText: {
		marginBottom: 2,
		fontSize: 13,
		fontFamily: theme.typography.fontFamily.GolosText,
		fontWeight: 600
	},
	mark: {
		fontSize: 20,
		fontFamily: theme.typography.fontFamily.GolosText,
		fontWeight: 600
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
