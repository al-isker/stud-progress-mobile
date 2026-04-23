import { Link, router } from 'expo-router';
import { StyleProp, View, ViewStyle } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import { routes } from '@/shared/config/navigation';
import { Button } from '@/shared/ui/button';
import { TextField } from '@/shared/ui/text-field';
import { useLoginMainForm } from '../../model/login-main-form/use-login-main-form';
import { MutationError } from './MutationError';

type LoginMainFormProps = {
	style?: StyleProp<ViewStyle>;
};

export const LoginMainForm = ({ style }: LoginMainFormProps) => {
	const { theme, rt } = useUnistyles();

	const {
		defaultFullName,
		defaultPassword,
		handleFullNameChange,
		handlePasswordChange
	} = useLoginMainForm();

	const handleBackButtonPress = () => {
		router.back();
	};

	return (
		<View style={style}>
			<KeyboardAwareScrollView
				style={styles.container}
				contentContainerStyle={styles.contentContainer}
				showsVerticalScrollIndicator={false}
				bottomOffset={theme.spacing * 2}
				extraKeyboardSpace={-rt.insets.bottom}
				keyboardShouldPersistTaps='always'
				keyboardDismissMode='interactive'
			>
				<View style={styles.formContainer}>
					<TextField
						size='large'
						label='ФИО'
						defaultValue={defaultFullName}
						onChangeText={handleFullNameChange}
					/>
					<TextField
						size='large'
						label='Пароль'
						defaultValue={defaultPassword}
						onChangeText={handlePasswordChange}
					/>

					<MutationError style={styles.mutationError} />

					<View style={styles.actions}>
						<Link href={routes.loginLoading} asChild>
							<Button size='large' title='Начать' />
						</Link>

						<Button
							variant='text'
							title='назад'
							onPress={handleBackButtonPress}
						/>
					</View>
				</View>
			</KeyboardAwareScrollView>
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
	formContainer: {
		flex: 1,
		rowGap: 16
	},
	mutationError: {
		textAlign: 'center'
	},
	actions: {
		marginTop: 'auto',
		rowGap: 8
	}
}));
