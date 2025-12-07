import { Link, router } from 'expo-router';
import { ScrollView, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { routes } from '@/shared/config/navigation';
import { Button } from '@/shared/ui/button';
import { TextField } from '@/shared/ui/text-field';
import { useLoginMainForm } from '../../model/hooks/use-login-main-form';
import { MutationError } from './MutationError';

export const LoginMainForm = () => {
	const {
		defaultFullName,
		defaultPassword,
		handleFullNameChange,
		handlePasswordChange
	} = useLoginMainForm();

	const onBackPress = () => {
		router.back();
	};

	return (
		<View style={styles.container}>
			<ScrollView
				contentContainerStyle={styles.contentContainer}
				showsVerticalScrollIndicator={false}
			>
				<TextField
					size='large'
					style={styles.formItem}
					label='ФИО'
					defaultValue={defaultFullName}
					onChangeText={handleFullNameChange}
				/>

				<TextField
					size='large'
					style={styles.formItem}
					label='Пароль'
					defaultValue={defaultPassword}
					onChangeText={handlePasswordChange}
				/>

				<MutationError style={[styles.formItem, styles.mutationError]} />

				<View style={styles.actions}>
					<Link href={routes.loginLoading} asChild>
						<Button size='large' title='Начать' />
					</Link>

					<Button variant='text' title='назад' onPress={onBackPress} />
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create((theme, rt) => ({
	container: {
		flex: 1
	},
	contentContainer: {
		minHeight: '100%',
		paddingBottom: theme.spacing + rt.insets.bottom
	},
	formItem: {
		marginBottom: 16
	},
	mutationError: {
		textAlign: 'center'
	},
	actions: {
		marginTop: 'auto',
		rowGap: 8
	}
}));
