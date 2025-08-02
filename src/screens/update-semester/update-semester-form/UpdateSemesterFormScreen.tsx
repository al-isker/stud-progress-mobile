import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { UpdateSemesterForm } from '@/features/update-semester';
import { OutsideMainLayout } from '@/shared/ui/outside-main-layout';
import { Typography } from '@/shared/ui/typography';

export const UpdateSemesterFormScreen = () => {
	const { styles } = useStyles(stylesheet);

	return (
		<OutsideMainLayout contentContainerStyle={styles.layoutContentContainer}>
			<Typography variant='h2' style={styles.title}>
				Изменение семестра
			</Typography>

			<Typography variant='t2' style={styles.description}>
				Выбери семестр, на который хочешь переключится
			</Typography>

			<UpdateSemesterForm style={styles.form} />
		</OutsideMainLayout>
	);
};

const stylesheet = createStyleSheet(theme => ({
	layoutContentContainer: {
		paddingHorizontal: theme.spacing
	},
	title: {
		textAlign: 'center',
		marginVertical: theme.spacing
	},
	description: {
		maxWidth: 280,
		marginBottom: theme.spacing * 1.75,
		alignSelf: 'center',
		textAlign: 'center'
	},
	form: {
		flex: 1
	}
}));
