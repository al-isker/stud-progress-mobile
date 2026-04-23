import { ScrollView, StyleProp, View, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { semesterOptions } from '@/entities/semester';
import { Command } from '@/shared/ui/command';
import { ArrowRightIcon } from '@/shared/ui/icons';
import { useUpdateSemesterForm } from '../../model/update-semester-form/use-update-semester-form';
import { MutationError } from './MutationError';

type UpdateSemesterFormProps = {
	style?: StyleProp<ViewStyle>;
};

export const UpdateSemesterForm = ({ style }: UpdateSemesterFormProps) => {
	const { currentSemester, createSemesterPressHandler } =
		useUpdateSemesterForm();

	return (
		<View style={[styles.container, style]}>
			<MutationError style={styles.mutationError} />

			<ScrollView
				contentContainerStyle={styles.contentContainer}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.commandList}>
					{semesterOptions.map((semesterOption, index) => (
						<View
							key={index}
							style={styles.commandContainer(
								semesterOption.value === currentSemester
							)}
						>
							<Command
								style={styles.command}
								title={semesterOption.label}
								endSlot={<ArrowRightIcon />}
								onPress={createSemesterPressHandler(semesterOption.value)}
							/>
						</View>
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
	mutationError: {
		marginBottom: 8,
		textAlign: 'center'
	},
	contentContainer: {
		paddingBottom: theme.spacing + rt.insets.bottom
	},
	commandList: {
		overflow: 'hidden',
		rowGap: 2,
		borderRadius: theme.borderRadius
	},
	commandContainer: (active: boolean) => ({
		backgroundColor: active ? theme.colors.primaryAlpha(0.05) : undefined
	}),
	command: {
		borderRadius: 2
	}
}));
