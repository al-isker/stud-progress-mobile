import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { SubjectRatingList } from '@/entities/subject-rating';

export const Home = () => {
	const { styles } = useStyles(stylesheet);

	return <SubjectRatingList style={styles.subjectRatingList} />;
};

const stylesheet = createStyleSheet(theme => ({
	subjectRatingList: {
		padding: theme.spacing.container
	}
}));
