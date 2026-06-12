import { Link } from 'expo-router';
import { View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import { links, routes } from '@/shared/config/navigation';
import { Button } from '@/shared/ui/button';
import { CircularLoader } from '@/shared/ui/circular-loader';
import { FolderOpenIcon, HeartBrokenIcon } from '@/shared/ui/icons';
import { StatusScreen } from '@/shared/ui/status-screen';
import { useSubjectRatingList } from '../../model/use-subject-rating-list';
import { IOList } from '../io-list/IOList';

export const SubjectRatingListScreen = () => {
	const { theme } = useUnistyles();

	const { data, refetch, isLoading, isEmptyList, isSuccess, isRefetching } =
		useSubjectRatingList();

	if (isLoading) {
		return (
			<View style={styles.loaderContainer}>
				<CircularLoader />
			</View>
		);
	}

	if (isEmptyList) {
		return (
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
		);
	}

	if (isSuccess) {
		return (
			<IOList
				contentContainerStyle={styles.contentContainer}
				subjectRatingList={data!}
				refreshing={isRefetching}
				onRefresh={refetch}
			/>
		);
	}

	return (
		<StatusScreen
			style={styles.status}
			renderIcon={props => (
				<HeartBrokenIcon {...props} color={theme.colors.red} />
			)}
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

const styles = StyleSheet.create(theme => ({
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
