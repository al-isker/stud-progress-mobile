import { Link } from 'expo-router';
import { Platform, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { useMobileAppInfoQueryData } from '@/entities/mobile-app-info';
import { Button } from '@/shared/ui/button';
import { StatusScreen } from '@/shared/ui/status-screen';

export const PreloadStatusUpdateAppScreen = () => {
	const mobileAppInfoQueryData = useMobileAppInfoQueryData()!;

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
		paddingBottom: rt.screen.height / 5 + rt.insets.bottom
	}
}));
