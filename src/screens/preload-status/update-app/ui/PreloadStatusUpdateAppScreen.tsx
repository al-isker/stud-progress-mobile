import { Link } from 'expo-router';
import { useQuery } from '@tanstack/react-query';
import { Platform, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { getMobileAppInfoQueryOptions } from '@/shared/api';
import { Button } from '@/shared/ui/button';
import { StatusScreen } from '@/shared/ui/status-screen';

export const PreloadStatusUpdateAppScreen = () => {
	const mobileAppInfoQuery = useQuery(getMobileAppInfoQueryOptions());

	const mobileAppInfoQueryData = mobileAppInfoQuery.data!;

	const updateLink = Platform.select({
		android: mobileAppInfoQueryData.linkToGooglePlay,
		ios: mobileAppInfoQueryData.linkToAppStore
	})!;

	return (
		<View style={styles.container}>
			<StatusScreen
				title='Обновление'
				description='текущая версия приложения больше не поддерживается'
				actions={
					<Link href={updateLink} asChild>
						<Button title='обновить' />
					</Link>
				}
			/>
		</View>
	);
};

const styles = StyleSheet.create((theme, rt) => ({
	container: {
		flex: 1,
		paddingHorizontal: theme.spacing,
		paddingBottom: rt.screen.height / 5 + rt.insets.bottom,
		backgroundColor: theme.colors.bgPaper
	}
}));
