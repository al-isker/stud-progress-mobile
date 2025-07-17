import dayjs from 'dayjs';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Event, EventStatusEnum } from '@/entities/subject';
import { Typography } from '@/shared/ui/typography';

type EventWithDateProps = {
	id: number;
	status: EventStatusEnum;
	date: string;
	mark: number | null;
	isNew: boolean;
};

export const EventWithDate = ({
	id,
	status,
	date,
	mark,
	isNew
}: EventWithDateProps) => {
	const { styles } = useStyles(stylesheet);

	return (
		<View style={styles.container}>
			<Typography variant='t1'>{dayjs(date).format('DD MMMM YYYY')}</Typography>

			<Event style={styles.event} status={status} mark={mark} isNew={isNew} />
		</View>
	);
};

const stylesheet = createStyleSheet({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	event: {
		width: 30
	}
});
