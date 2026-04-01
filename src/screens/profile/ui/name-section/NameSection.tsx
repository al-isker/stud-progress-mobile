import { Text } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { Paper } from '@/shared/ui/paper';

type NameSectionProps = {
	fullName: string;
};

export const NameSection = ({ fullName }: NameSectionProps) => (
	<Paper style={styles.container}>
		<Text style={styles.fullName}>{fullName}</Text>
	</Paper>
);

const styles = StyleSheet.create(theme => ({
	container: {
		padding: theme.spacing * 1.5
	},
	fullName: {
		color: theme.colors.blackAlpha(0.9),
		fontSize: 24,
		fontFamily: theme.typography.fontFamily.GolosTextSemiBold
	}
}));
