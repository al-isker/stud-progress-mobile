import React, { useState } from 'react';
import { LayoutChangeEvent, StyleProp, View, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { ISubjectRating } from '../../model/types/subject-rating';
import { Mark } from './Mark';

type RatingProps = Pick<ISubjectRating, 'rating'> & {
	style?: StyleProp<ViewStyle>;
};

export const Rating = ({ style, rating }: RatingProps) => {
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
			{rating.slice(-fitsItemsCount).map(item => (
				<Mark
					key={item.id}
					style={styles.mark}
					status={item.status}
					mark={item.mark}
					isNew={item.isNew}
				/>
			))}

			{Array.from({ length: fitsItemsCount - rating.length }).map(
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
