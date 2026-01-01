import { useEffect } from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { useSharedValue, withTiming } from 'react-native-reanimated';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import { MedalStarIcon } from '@/shared/assets/icons';
import { formatPercent } from '@/shared/lib/animation';
import { Paper } from '@/shared/ui/paper';
import {
	ProgressChart,
	getProgressAnimationConfig
} from '@/shared/ui/progress-chart';

type StudentPercentWithBelowAverageMarkProps = {
	contentContainerStyle?: StyleProp<ViewStyle>;
	value: number | null;
};

export const StudentPercentWithBelowAverageMark = ({
	contentContainerStyle,
	value
}: StudentPercentWithBelowAverageMarkProps) => {
	const { theme } = useUnistyles();

	const sharedValue = useSharedValue(value);

	useEffect(() => {
		if (sharedValue.value !== value) {
			if (value === null) {
				sharedValue.value = null;
			} else {
				sharedValue.value = withTiming(
					value,
					getProgressAnimationConfig(sharedValue.value, value, 100)
				);
			}
		}
	}, [value]);

	return (
		<Paper contentContainerStyle={[styles.container, contentContainerStyle]}>
			<View style={styles.leftContent}>
				<View style={styles.header}>
					<MedalStarIcon style={styles.icon} color={theme.colors.primary} />
					<Text style={styles.title}>Статус</Text>
				</View>
				<View style={styles.main}>
					<Text style={styles.description}>
						твой средний балл выше, чем у {value}% студентов по данной
						дисциплине
					</Text>
				</View>
			</View>

			<View style={styles.rightContent}>
				<ProgressChart
					diameter={80}
					strokeWidth={10}
					fontSize={16}
					style={styles.progressChart}
					maxValue={100}
					sharedValue={sharedValue}
					formatValue={formatPercent}
				/>
			</View>
		</Paper>
	);
};

const styles = StyleSheet.create(theme => ({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	leftContent: {
		flex: 1,
		padding: theme.spacing * 1.5,
		justifyContent: 'space-between',
		rowGap: 8
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		columnGap: 5
	},
	title: {
		fontFamily: theme.typography.fontFamily.GolosTextRegular,
		fontSize: 14,
		color: theme.colors.blackAlpha(0.85)
	},
	icon: {
		width: 20,
		height: 20
	},
	main: {
		marginRight: -14
	},
	description: {
		fontFamily: theme.typography.fontFamily.GolosTextRegular,
		fontSize: 12,
		color: theme.colors.blackAlpha(0.65)
	},
	rightContent: {
		flex: 1,
		padding: theme.spacing * 1.5
	},
	progressChart: {
		margin: 'auto'
	}
}));
