import { Link } from 'expo-router';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { HeartBrokenIcon } from '@/shared/assets/icons';
import { links } from '@/shared/config/navigation';
import { Button } from '@/shared/ui/button';
import { CircularLoader } from '@/shared/ui/circular-loader';
import { StatusScreen } from '@/shared/ui/status-screen';
import { useSubjectRatingDetails } from '../../model/hooks/use-subject-rating-details';
import { Content } from '../content/Content';

export const SubjectRatingDetailsScreen = () => {
	const { styles, theme } = useStyles(stylesheet);

	const { data, refetch, isLoading, isSuccess, isRefetching } =
		useSubjectRatingDetails();

	if (isLoading) {
		return (
			<View style={[styles.centringContainer, styles.container]}>
				<CircularLoader />
			</View>
		);
	}

	if (isSuccess) {
		return (
			<Content
				contentContainerStyle={styles.container}
				subjectRatingDetails={data!}
				refreshing={isRefetching}
				onRefresh={refetch}
			/>
		);
	}

	return (
		<StatusScreen
			style={styles.container}
			iconSlot={<HeartBrokenIcon color={theme.colors.red} />}
			title='Ошибка'
			description='баллы не найдены, попробуй позже или обратись в поддержку'
			actions={
				<>
					<Link href={links.telegramSupport} asChild>
						<Button variant='secondary' title='поддержка' />
					</Link>

					<Button title='обновить' onPress={() => refetch()} />
				</>
			}
		/>
	);
};

const stylesheet = createStyleSheet(theme => ({
	container: {
		padding: theme.spacing
	},
	centringContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
}));
