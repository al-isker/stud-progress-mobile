import { Link } from 'expo-router';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { FolderOpenIcon, HeartBrokenIcon } from '@/shared/assets/icons';
import { links, routes } from '@/shared/config/navigation';
import { Button } from '@/shared/ui/button';
import { CircularLoader } from '@/shared/ui/circular-loader';
import { StatusScreen } from '@/shared/ui/status-screen';
import { useSubjectRatingList } from '../../model/hooks/use-subject-rating-list';
import { IOList } from '../io-list/IOList';

export const SubjectRatingScreen = () => {
	const { styles, theme } = useStyles(stylesheet);

	const { data, refetch, isLoading, isEmptyList, isSuccess, isRefetching } =
		useSubjectRatingList();

	if (isLoading) {
		return (
			<View style={[styles.centringContainer, styles.container]}>
				<CircularLoader />
			</View>
		);
	}

	if (isEmptyList) {
		return (
			<StatusScreen
				style={styles.container}
				iconSlot={<FolderOpenIcon color={theme.colors.primary} />}
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
				contentContainerStyle={styles.container}
				subjectRatingList={data!}
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
