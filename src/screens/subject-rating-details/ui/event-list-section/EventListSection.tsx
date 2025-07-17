import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Fragment } from 'react/jsx-runtime';
import { EventStatusEnum } from '@/entities/subject';
import { Divider } from '@/shared/ui/divider';
import { Paper } from '@/shared/ui/paper';
import { Typography } from '@/shared/ui/typography';
import { EventWithDate } from './EventWithDate';

type EventListSectionProps = {
	eventList: Array<{
		id: number;
		status: EventStatusEnum;
		date: string;
		mark: number | null;
		isNew: boolean;
	}>;
};

export const EventListSection = ({ eventList }: EventListSectionProps) => {
	const { styles } = useStyles(stylesheet);

	return (
		<View>
			<Paper style={styles.container}>
				<Typography variant='h3' style={styles.title}>
					Баллы
				</Typography>

				<View style={styles.list}>
					{eventList.map((event, index) => (
						<Fragment key={event.id}>
							<EventWithDate
								id={event.id}
								status={event.status}
								date={event.date}
								mark={event.mark}
								isNew={event.isNew}
							/>

							{index !== eventList.length - 1 && <Divider size='small' />}
						</Fragment>
					))}
				</View>
			</Paper>
		</View>
	);
};

const stylesheet = createStyleSheet(theme => ({
	container: {
		padding: theme.spacing * 1.5
	},
	title: {
		marginBottom: 12
	},
	list: {
		rowGap: 6
	}
}));
