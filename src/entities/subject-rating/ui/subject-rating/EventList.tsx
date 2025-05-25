import React, { useState } from 'react';
import { LayoutChangeEvent, StyleProp, View, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { IEventList } from '../../model/types/event';
import { Event } from './Event';

type EventListProps = {
	style?: StyleProp<ViewStyle>;
	eventList: IEventList;
};

export const EventList = ({ style, eventList }: EventListProps) => {
	const { styles } = useStyles(stylesheet);

	const [fitsItemsCount, setFitsItemsCount] = useState(0);

	const handleLayout = (e: LayoutChangeEvent) => {
		const containerWidth = e.nativeEvent.layout.width;
		const containerGap = styles.container.columnGap;
		const markWidth = styles.mark.width;

		const calculatedFitsItemsCount = Math.floor(
			containerWidth / (markWidth + containerGap)
		);

		setFitsItemsCount(calculatedFitsItemsCount);
	};

	return (
		<View style={[styles.container, style]} onLayout={handleLayout}>
			{eventList.slice(-fitsItemsCount).map(event => (
				<Event
					key={event.id}
					style={styles.mark}
					status={event.status}
					mark={event.mark}
					isNew={event.isNew}
				/>
			))}

			{Array.from({ length: fitsItemsCount - eventList.length }).map(
				(_, index) => (
					<View key={index} style={styles.mark} />
				)
			)}
		</View>
	);
};

const stylesheet = createStyleSheet({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		columnGap: 6
	},
	mark: {
		width: 30
	}
});
