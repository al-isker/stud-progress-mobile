import dayjs from 'dayjs';
import { View } from 'react-native';
import { Event, EventStatusEnum } from '@/entities/subject';
import { Typography } from '@/shared/ui/typography';

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
}: EventWithDateProps) => {
	return (
		<View
			style={{
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'space-between'
			}}
		>
			<Typography variant='t1'>{dayjs(date).format('DD MMMM YYYY')}</Typography>

			<Event status={status} mark={mark} isNew={isNew} />
		</View>
	);
};
