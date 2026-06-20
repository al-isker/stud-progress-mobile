import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import { ScreenNames } from '@/shared/config/navigation';
import { OutsideMainHeader } from '@/shared/ui/outside-main-header';

export const PreloadStatusAppLayout = () => {
	const { rt } = useUnistyles();

	return (
		<>
			<StatusBar style='dark' />

			<View style={styles.container}>
				<OutsideMainHeader
					style={styles.header}
					safeAreaInsetTop={rt.insets.top}
				/>

				<Stack
					screenOptions={{
						animation: 'simple_push',
						headerShown: false
					}}
				>
					<Stack.Screen name={ScreenNames.PRELOAD_STATUS_OFFLINE} />
					<Stack.Screen name={ScreenNames.PRELOAD_STATUS_ERROR} />
					<Stack.Screen name={ScreenNames.PRELOAD_STATUS_UPDATE_APP} />
				</Stack>
			</View>
		</>
	);
};

const styles = StyleSheet.create(theme => ({
	container: {
		flex: 1,
		backgroundColor: theme.colors.bgPaper
	},
	header: {
		paddingHorizontal: theme.spacing
	}
}));

export default PreloadStatusAppLayout;
