import { ScrollView, StyleProp, View, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { semesterOptions } from '@/entities/semester';
import { ArrowRightIcon } from '@/shared/assets/icons';
import { Command } from '@/shared/ui/command';
import { useUpdateSemesterForm } from '../../model/hooks/use-update-semester-form';
import { MutationError } from './MutationError';

type UpdateSemesterFormProps = {
	style?: StyleProp<ViewStyle>;
};

export const UpdateSemesterForm = ({ style }: UpdateSemesterFormProps) => {
	const { currentSemester, selectSemester } = useUpdateSemesterForm();

	return (
		<View style={[styles.container, style]}>
			<MutationError style={styles.mutationError} />

			<ScrollView
				contentContainerStyle={styles.contentContainer}
				showsVerticalScrollIndicator={false}
			>
				<View style={styles.commandList}>
					{semesterOptions.map((option, index) => (
						<View
							key={index}
							style={styles.commandContainer(option.value === currentSemester)}
						>
							<Command
								style={styles.command}
								title={option.label}
								endSlot={<ArrowRightIcon />}
								onPress={() => selectSemester(option.value)}
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
		marginBottom: 4,
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
