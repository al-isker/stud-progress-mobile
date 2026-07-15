import { Link } from 'expo-router';
import { View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import { LINKS, routes } from '@/shared/config/navigation';
import { Button } from '@/shared/ui/button';
import { CircularLoader } from '@/shared/ui/circular-loader';
import { FolderOpenIcon, HeartBrokenIcon } from '@/shared/ui/icons';
import { StatusScreen } from '@/shared/ui/status-screen';
import { useSubjectRatingList } from '../../model/use-subject-rating-list';
import { SubjectRatingList } from '../subject-rating-list/SubjectRatingList';

export const SubjectRatingScreen = () => {
	const { theme } = useUnistyles();

	const {
		data,
		refetch,
		isPending,
		isPaused,
		isEmptyList,
		isSuccess,
		isRefetching
	} = useSubjectRatingList();

	return (
		<View style={styles.screen}>
			{isPaused ? (
				<StatusScreen
					style={styles.status}
					title='Нет интернета'
					description='проверь подключение к сети'
					actions={
						<Button title='попробовать снова' onPress={() => refetch()} />
					}
				/>
			) : isPending ? (
				<View style={styles.loaderContainer}>
					<CircularLoader />
				</View>
			) : isEmptyList ? (
				<StatusScreen
					style={styles.status}
					renderIcon={FolderOpenIcon}
					title='Здесь пусто'
					description='в выбранном семестре ты не получил ни одного балла'
					actions={
						<Link href={routes.updateSemesterForm} asChild>
							<Button variant='secondary' title='изменить семестр' />
						</Link>
					}
				/>
			) : isSuccess ? (
				<SubjectRatingList
					contentContainerStyle={styles.contentContainer}
					subjectRatingList={data!}
					refreshing={isRefetching}
					onRefresh={refetch}
				/>
			) : (
				<StatusScreen
					style={styles.status}
					renderIcon={props => (
						<HeartBrokenIcon {...props} color={theme.colors.red} />
					)}
					title='Ошибка'
					description='баллы не найдены, попробуй позже или обратись в поддержку'
					actions={
						<>
							<Link href={LINKS.telegramSupport} asChild>
								<Button variant='secondary' title='поддержка' />
							</Link>

							<Button title='попробовать снова' onPress={() => refetch()} />
						</>
					}
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create(theme => ({
	screen: {
		flex: 1,
		backgroundColor: theme.colors.bgBase
	},
	loaderContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	contentContainer: {
		padding: theme.spacing
	},
	status: {
		padding: theme.spacing
	}
}));
