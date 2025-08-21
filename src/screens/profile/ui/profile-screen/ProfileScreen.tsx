import { Link } from 'expo-router';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { HeartBrokenIcon } from '@/shared/assets/icons';
import { links } from '@/shared/config/navigation';
import { Button } from '@/shared/ui/button';
import { CircularLoader } from '@/shared/ui/circular-loader';
import { StatusScreen } from '@/shared/ui/status-screen';
import { useProfile } from '../../model/hooks/use-profile';
import { Content } from '../content/Content';

export const ProfileScreen = () => {
	const { styles, theme } = useStyles(stylesheet);

	const { data, refetch, isLoading, isSuccess, isRefetching } = useProfile();

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
				profile={data!}
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
			description='профиль не найден, попробуй позже или обратись в поддержку'
			actions={
				<>
					<Link href={links.supportTelegram} asChild>
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
