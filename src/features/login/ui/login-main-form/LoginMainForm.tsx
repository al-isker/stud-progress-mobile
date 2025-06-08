import React from 'react';
import { Link, useRouter } from 'expo-router';
import { StyleProp, View, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { routes } from '@/shared/config/navigation';
import { Button } from '@/shared/ui/button';
import { TextField } from '@/shared/ui/text-field';
import { useMainForm } from '../../model/hooks/use-main-form';
import { MutationError } from './MutationError';

type LoginMainFormProps = {
	style?: StyleProp<ViewStyle>;
};

export const LoginMainForm = ({ style }: LoginMainFormProps) => {
	const { styles } = useStyles(stylesheet);

	const router = useRouter();

	const {
		defaultFullName,
		defaultPassword,
		handleFullNameChange,
		handlePasswordChange
	} = useMainForm();

	return (
		<View style={[styles.container, style]}>
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

			<MutationError style={styles.formItem} />

			<View style={styles.actions}>
				<Link href={routes.loginLoading} asChild>
					<Button size='large' style={styles.button} title='Начать' />
				</Link>

				<Button
					variant='text'
					style={styles.button}
					title='назад'
					onPress={router.back}
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
	actions: {
		marginTop: 'auto'
	},
	button: {
		marginBottom: 8
	}
});
