import dayjs from 'dayjs';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Event, EventStatusEnum } from '@/entities/subject';

type EventWithDateProps = {
	status: EventStatusEnum;
	date: string;
	mark: number | null;
	isNew: boolean;
};

export const EventWithDate = ({
	status,
	date,
	mark,
	isNew
}: EventWithDateProps) => (
	<View style={styles.container}>
		<Text style={styles.date}>{dayjs(date).format('DD MMMM YYYY')}</Text>

		<Event status={status} mark={mark} isNew={isNew} />
	</View>
);

const styles = StyleSheet.create(theme => ({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	date: {
		color: theme.colors.blackAlpha(0.8),
		fontSize: 14,
		fontFamily: theme.typography.fontFamily.GolosTextRegular
	}
}));
