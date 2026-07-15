import { Link } from 'expo-router';
import { View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import { LINKS } from '@/shared/config/navigation';
import { Button } from '@/shared/ui/button';
import { CircularLoader } from '@/shared/ui/circular-loader';
import { HeartBrokenIcon } from '@/shared/ui/icons';
import { StatusScreen } from '@/shared/ui/status-screen';
import { useProfile } from '../../model/use-profile';
import { Content } from '../content/Content';

export const ProfileScreen = () => {
	const { theme } = useUnistyles();

	const { data, refetch, isPending, isPaused, isSuccess, isRefetching } =
		useProfile();

	if (isPaused) {
		return (
			<StatusScreen
				style={styles.status}
				title='Нет интернета'
				description='проверь подключение к сети'
				actions={<Button title='попробовать снова' onPress={() => refetch()} />}
			/>
		);
	}

	if (isPending) {
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
				profile={data!}
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
			description='профиль не найден, попробуй позже или обратись в поддержку'
			actions={
				<>
					<Link href={LINKS.telegramSupport} asChild>
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
