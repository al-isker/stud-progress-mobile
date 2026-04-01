import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { DaysWithoutMark } from './DaysWithoutMark';
import { ImpactLastMark } from './ImpactLastMark';
import { StudentPercentWithBelowAverageMark } from './StudentPercentWithBelowAverageMark';

type StatsSectionProps = {
	impactLastMark: number | null;
	daysWithoutMark: number | null;
	studentPercentWithBelowAverageMark: number | null;
};

export const StatsSection = ({
	impactLastMark,
	daysWithoutMark,
	studentPercentWithBelowAverageMark
}: StatsSectionProps) => (
	<View style={styles.container}>
		<View style={styles.topContainer}>
			<ImpactLastMark style={styles.topLeftStat} value={impactLastMark} />
			<DaysWithoutMark style={styles.topRightStat} value={daysWithoutMark} />
		</View>

		<StudentPercentWithBelowAverageMark
			style={styles.bottomStat}
			value={studentPercentWithBelowAverageMark}
		/>
	</View>
);

const styles = StyleSheet.create(theme => ({
	container: {
		rowGap: theme.spacing / 2
	},
	topContainer: {
		flexDirection: 'row',
		columnGap: theme.spacing / 2
	},
	topLeftStat: {
		flex: 1,
		borderTopRightRadius: 4,
		borderBottomRightRadius: 4,
		borderBottomLeftRadius: 4
	},
	topRightStat: {
		flex: 1,
		borderTopLeftRadius: 4,
		borderBottomRightRadius: 4,
		borderBottomLeftRadius: 4
	},
	bottomStat: {
		borderTopLeftRadius: 4,
		borderTopRightRadius: 4
	}
}));
