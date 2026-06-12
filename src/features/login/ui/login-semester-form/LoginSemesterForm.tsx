import { ScrollView, StyleProp, View, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { semesterOptions } from '@/entities/semester';
import { Command } from '@/shared/ui/command';
import { ArrowRightIcon } from '@/shared/ui/icons';
import { useLoginSemesterForm } from '../../model/login-semester-form/use-login-semester-form';

type LoginSemesterFormProps = {
	style?: StyleProp<ViewStyle>;
};

export const LoginSemesterForm = ({ style }: LoginSemesterFormProps) => {
	const { createSemesterPressHandler } = useLoginSemesterForm();

	return (
		<View style={[styles.container, style]}>
			<ScrollView
				contentContainerStyle={styles.contentContainer}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.commandList}>
					{semesterOptions.map((semesterOption, index) => (
						<Command
							key={index}
							style={styles.command}
							title={semesterOption.label}
							renderRightIcon={ArrowRightIcon}
							onPress={createSemesterPressHandler(semesterOption.value)}
						/>
					))}
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create((theme, rt) => ({
	container: {
		overflow: 'hidden',
		borderRadius: theme.borderRadius
	},
	contentContainer: {
		paddingBottom: theme.spacing + rt.insets.bottom
	},
	commandList: {
		overflow: 'hidden',
		rowGap: 2,
		borderRadius: theme.borderRadius
	},
	command: {
		borderRadius: 2
	}
}));
