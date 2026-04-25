import { Text } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { ControlType, ControlTypeEnum } from '@/entities/subject';
import { Paper } from '@/shared/ui/paper';

type MainSectionProps = {
	name: string;
	controlType: ControlTypeEnum;
};

export const MainSection = ({ name, controlType }: MainSectionProps) => (
	<Paper style={styles.paper}>
		<Text style={styles.name}>{name}</Text>

		<ControlType variant='primary' controlType={controlType} />
	</Paper>
);

const styles = StyleSheet.create(theme => ({
	paper: {
		alignItems: 'flex-start',
		padding: theme.spacing * 1.5,
		rowGap: 12
	},
	name: {
		color: theme.colors.blackAlpha(0.9),
		fontSize: 24,
		fontFamily: theme.typography.fontFamily.GolosText,
		fontWeight: 600
	}
}));
