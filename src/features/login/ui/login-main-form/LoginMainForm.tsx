import { Link, router } from 'expo-router';
import { View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { routes } from '@/shared/config/navigation';
import { Button } from '@/shared/ui/button';
import { TextField } from '@/shared/ui/text-field';
import { useLoginMainForm } from '../../model/hooks/use-login-main-form';
import { MutationError } from './MutationError';

export const LoginMainForm = () => {
	const { styles } = useStyles(stylesheet);

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
					<Button size='large' style={styles.button} title='Начать' />
				</Link>

				<Button
					variant='text'
					style={styles.button}
					title='назад'
					onPress={onBackPress}
				/>
			</View>
		</View>
	);
};

const stylesheet = createStyleSheet({
	container: {
		flex: 1
	},
	formItem: {
		marginBottom: 16
	},
	mutationError: {
		textAlign: 'center'
	},
	actions: {
		marginTop: 'auto'
	},
	button: {
		marginBottom: 8
	}
});
