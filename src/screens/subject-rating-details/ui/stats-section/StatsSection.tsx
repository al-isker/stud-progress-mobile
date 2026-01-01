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
			<ImpactLastMark
				style={styles.topLeftStat}
				contentContainerStyle={styles.topLeftStatContentContainer}
				value={impactLastMark}
			/>
			<DaysWithoutMark
				style={styles.topRightStat}
				contentContainerStyle={styles.topRightStatContentContainer}
				value={daysWithoutMark}
			/>
		</View>

		<StudentPercentWithBelowAverageMark
			contentContainerStyle={styles.bottomStatContentContainer}
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
		flex: 1
	},
	topLeftStatContentContainer: {
		borderTopRightRadius: 4,
		borderBottomRightRadius: 4,
		borderBottomLeftRadius: 4
	},
	topRightStat: {
		flex: 1
	},
	topRightStatContentContainer: {
		borderTopLeftRadius: 4,
		borderBottomRightRadius: 4,
		borderBottomLeftRadius: 4
	},
	bottomStatContentContainer: {
		borderTopLeftRadius: 4,
		borderTopRightRadius: 4
	}
}));
