import { Link } from 'expo-router';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { HeartBrokenIcon } from '@/shared/assets/icons';
import { links } from '@/shared/config/navigation';
import { Button } from '@/shared/ui/button';
import { CircularLoader } from '@/shared/ui/circular-loader';
import { StatusScreen } from '@/shared/ui/status-screen';
import { useSubjectGradeList } from '../../model/hooks/use-subject-grade-list';
import { List } from '../list/List';

export const SubjectGradeScreen = () => {
	const { styles, theme } = useStyles(stylesheet);

	const { data, refetch, isLoading, isSuccess, isRefetching } =
		useSubjectGradeList();

	if (isLoading) {
		return (
			<View style={styles.loaderContainer}>
				<CircularLoader />
			</View>
		);
	}

	if (isSuccess) {
		return (
			<List
				contentContainerStyle={styles.contentContainer}
				subjectGradeList={data!}
				refreshing={isRefetching}
				onRefresh={refetch}
			/>
		);
	}

	return (
		<StatusScreen
			style={styles.status}
			iconSlot={<HeartBrokenIcon color={theme.colors.red} />}
			title='Ошибка'
			description='сессия не найдена, попробуй позже или обратись в поддержку'
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
