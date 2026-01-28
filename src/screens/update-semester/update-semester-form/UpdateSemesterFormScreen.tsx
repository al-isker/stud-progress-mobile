import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import { OutsideMainHeader } from '@/widgets/outside-main-header';
import { UpdateSemesterForm } from '@/features/update-semester';

export const UpdateSemesterFormScreen = () => {
	const { rt } = useUnistyles();

	return (
		<>
			<StatusBar style='dark' />

			<View style={styles.container}>
				<View style={styles.headerContainer}>
					<OutsideMainHeader safeAreaInsetTop={rt.insets.top} />

					<Text style={styles.title}>Изменение семестра</Text>
				</View>

				<View style={styles.contentContainer}>
					<Text style={styles.description}>
						Выбери семестр, на который хочешь переключиться
					</Text>

					<UpdateSemesterForm style={styles.form} />
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create(theme => ({
	container: {
		flex: 1,
		backgroundColor: theme.colors.bgPaper
	},
	headerContainer: {
		paddingHorizontal: theme.spacing,
		paddingBottom: theme.spacing,
		alignItems: 'center'
	},
	title: {
		color: theme.colors.blackAlpha(0.9),
		fontSize: 24,
		fontFamily: theme.typography.fontFamily.GolosTextSemiBold
	},
	contentContainer: {
		flex: 1,
		paddingHorizontal: theme.spacing,
		backgroundColor: theme.colors.bgPaper
	},
	description: {
		maxWidth: 210,
		marginBottom: theme.spacing * 1.5,
		alignSelf: 'center',
		textAlign: 'center',
		color: theme.colors.blackAlpha(0.5),
		fontSize: 14,
		fontFamily: theme.typography.fontFamily.GolosTextRegular
	},
	form: {
		flex: 1
	}
}));
