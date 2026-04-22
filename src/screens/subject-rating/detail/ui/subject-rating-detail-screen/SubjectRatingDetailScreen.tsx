import { Link } from 'expo-router';
import { View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import { links } from '@/shared/config/navigation';
import { Button } from '@/shared/ui/button';
import { CircularLoader } from '@/shared/ui/circular-loader';
import { HeartBrokenIcon } from '@/shared/ui/icons';
import { StatusScreen } from '@/shared/ui/status-screen';
import { useSubjectRatingDetail } from '../../model/use-subject-rating-detail';
import { Content } from '../content/Content';

export const SubjectRatingDetailScreen = () => {
	const { theme, rt } = useUnistyles();

	const { data, refetch, isLoading, isSuccess, isRefetching } =
		useSubjectRatingDetail();

	if (isLoading) {
		return (
			<View style={styles.loaderContainer}>
				<CircularLoader />
			</View>
		);
	}

	if (isSuccess) {
		return (
			<Content
				contentContainerStyle={styles.contentContainer}
				subjectRatingDetail={data!}
				refreshing={isRefetching}
				onRefresh={refetch}
			/>
		);
	}

	return (
		<StatusScreen
			style={styles.status}
			safeAreaInsets={{ bottom: rt.insets.bottom }}
			iconSlot={<HeartBrokenIcon color={theme.colors.red} />}
			title='Ошибка'
			description='баллы не найдены, попробуй позже или обратись в поддержку'
			actions={
				<>
					<Link href={links.telegramSupport} asChild>
						<Button variant='secondary' title='поддержка' />
					</Link>

					<Button title='попробовать снова' onPress={() => refetch()} />
				</>
			}
		/>
	);
};

const styles = StyleSheet.create((theme, rt) => ({
	loaderContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: rt.insets.bottom
	},
	contentContainer: {
		padding: theme.spacing,
		paddingBottom: theme.spacing + rt.insets.bottom
	},
	status: {
		padding: theme.spacing
	}
}));
