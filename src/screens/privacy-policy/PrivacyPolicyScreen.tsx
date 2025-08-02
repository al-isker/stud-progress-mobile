import { ScrollView, Text } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { Paper } from '@/shared/ui/paper';
import { Typography } from '@/shared/ui/typography';

export const PrivacyPolicyScreen = () => {
	const { theme } = useStyles();

	return (
		<ScrollView
			contentContainerStyle={{ minHeight: '100%', padding: theme.spacing }}
		>
			<Paper style={{ flex: 1, padding: theme.spacing * 1.5 }}>
				<Typography variant='h3' style={{ marginBottom: 4 }}>
					Политика конфиденциальности
				</Typography>

				<Text>...</Text>
			</Paper>
		</ScrollView>
	);
};
