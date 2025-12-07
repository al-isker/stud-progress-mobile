import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { ChatSquireIcon, HashtagSquireIcon } from '@/shared/assets/icons';
import { NumberStat } from '@/shared/ui/number-stat';

type StatsSectionProps = {
	course: number;
	semester: number;
};

export const StatsSection = ({ course, semester }: StatsSectionProps) => (
	<View style={styles.container}>
		<NumberStat
			style={styles.leftStat}
			title='Курс'
			value={course}
			headerStartSlot={<ChatSquireIcon />}
		/>
		<NumberStat
			style={styles.rightStat}
			title='Семестр'
			value={semester}
			headerStartSlot={<HashtagSquireIcon />}
		/>
	</View>
);

const styles = StyleSheet.create(theme => ({
	container: {
		flexDirection: 'row',
		columnGap: theme.spacing / 2
	},
	leftStat: {
		borderTopRightRadius: 4,
		borderBottomRightRadius: 4
	},
	rightStat: {
		borderTopLeftRadius: 4,
		borderBottomLeftRadius: 4
	}
}));
