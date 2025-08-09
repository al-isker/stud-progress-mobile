import { useState } from 'react';
import { LayoutChangeEvent, StyleProp, View, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { Event, EventStatusEnum } from '@/entities/subject';

type EventListProps = {
	style?: StyleProp<ViewStyle>;
	eventList: Array<{
		id: number;
		status: EventStatusEnum;
		mark: number | null;
		isNew: boolean;
	}>;
};

export const EventList = ({ style, eventList }: EventListProps) => {
	const { styles } = useStyles(stylesheet);

	const [fitsItemsCount, setFitsItemsCount] = useState(0);

	const handleLayout = (e: LayoutChangeEvent) => {
		const containerWidth = e.nativeEvent.layout.width;
		const containerGap = styles.container.columnGap;
		const eventWidth = styles.event.width;

		const calculatedFitsItemsCount = Math.floor(
			containerWidth / (eventWidth + containerGap)
		);

		setFitsItemsCount(calculatedFitsItemsCount);
	};

	return (
		<View style={[styles.container, style]} onLayout={handleLayout}>
			{eventList.slice(-fitsItemsCount).map(event => (
				<Event
					key={event.id}
					style={styles.event}
					status={event.status}
					mark={event.mark}
					isNew={event.isNew}
				/>
			))}

			{Array.from({ length: fitsItemsCount - eventList.length }).map(
				(_, index) => (
					<View key={index} style={styles.event} />
				)
			)}
		</View>
	);
};

const stylesheet = createStyleSheet({
	container: {
		width: '100%',
		flexDirection: 'row',
		columnGap: 10
	},
	event: {
		width: 30
	}
});
