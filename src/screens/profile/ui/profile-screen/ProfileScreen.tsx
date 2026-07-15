import { Link } from 'expo-router';
import { View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import { LINKS } from '@/shared/config/navigation';
import { Button } from '@/shared/ui/button';
import { CircularLoader } from '@/shared/ui/circular-loader';
import { HeartBrokenIcon } from '@/shared/ui/icons';
import { StatusScreen } from '@/shared/ui/status-screen';
import { useProfile } from '../../model/use-profile';
import { ProfileContent } from '../profile-content/ProfileContent';

export const ProfileScreen = () => {
	const { theme } = useUnistyles();

	const { data, refetch, isPending, isPaused, isSuccess, isRefetching } =
		useProfile();

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
			) : isSuccess ? (
				<ProfileContent
					contentContainerStyle={styles.contentContainer}
					profile={data!}
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
