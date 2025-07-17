import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { ControlType, ControlTypeEnum } from '@/entities/subject';
import { Paper } from '@/shared/ui/paper';
import { Typography } from '@/shared/ui/typography';

type MainSectionProps = {
	name: string;
	controlType: ControlTypeEnum;
};

export const MainSection = ({ name, controlType }: MainSectionProps) => {
	const { styles } = useStyles(stylesheet);

	return (
		<Paper style={styles.paper}>
			<Typography variant='h2'>{name}</Typography>

			<ControlType variant='primary' controlType={controlType} />
		</Paper>
	);
};

const stylesheet = createStyleSheet(theme => ({
	paper: {
		alignItems: 'flex-start',
		padding: theme.spacing * 1.5,
		rowGap: 12
	}
}));
