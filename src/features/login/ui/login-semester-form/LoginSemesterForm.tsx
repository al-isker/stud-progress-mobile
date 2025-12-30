import { ScrollView, StyleProp, View, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { semesterOptions } from '@/entities/semester';
import { ArrowRightIcon } from '@/shared/assets/icons';
import { Command } from '@/shared/ui/command';
import { useLoginSemesterForm } from '../../model/hooks/use-login-semester-form';

type LoginSemesterFormProps = {
	style?: StyleProp<ViewStyle>;
};

export const LoginSemesterForm = ({ style }: LoginSemesterFormProps) => {
	const { selectSemester } = useLoginSemesterForm();

	return (
		<View style={[styles.container, style]}>
			<ScrollView
				contentContainerStyle={styles.contentContainer}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.commandList}>
					{semesterOptions.map((option, index) => (
						<Command
							key={index}
							style={styles.command}
							title={option.label}
							endSlot={<ArrowRightIcon />}
							onPress={() => selectSemester(option.value)}
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
