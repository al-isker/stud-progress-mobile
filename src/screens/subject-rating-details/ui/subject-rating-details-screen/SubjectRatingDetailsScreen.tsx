import { Link } from 'expo-router';
import { View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import { HeartBrokenIcon } from '@/shared/assets/icons';
import { links } from '@/shared/config/navigation';
import { Button } from '@/shared/ui/button';
import { CircularLoader } from '@/shared/ui/circular-loader';
import { StatusScreen } from '@/shared/ui/status-screen';
import { useSubjectRatingDetails } from '../../model/hooks/use-subject-rating-details';
import { Content } from '../content/Content';

export const SubjectRatingDetailsScreen = () => {
	const { theme, rt } = useUnistyles();

	const { data, refetch, isLoading, isSuccess, isRefetching } =
		useSubjectRatingDetails();

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
				subjectRatingDetails={data!}
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

					<Button title='обновить' onPress={() => refetch()} />
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
