import { ScrollView, StyleProp, View, ViewStyle } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { semesterOptions } from '@/entities/semester';
import { ArrowRightIcon } from '@/shared/assets/icons';
import { Command } from '@/shared/ui/command';
import { Divider } from '@/shared/ui/divider';
import { useUpdateSemesterForm } from '../../model/hooks/use-update-semester-form';
import { MutationError } from './MutationError';

type UpdateSemesterFormProps = {
	style?: StyleProp<ViewStyle>;
};

export const UpdateSemesterForm = ({ style }: UpdateSemesterFormProps) => {
	const { styles } = useStyles(stylesheet);

	const safeAreaInsets = useSafeAreaInsets();

	const { currentSemester, selectSemester } = useUpdateSemesterForm();

	return (
		<View style={style}>
			<MutationError style={styles.mutationError} />

			<Divider style={styles.divider} />

			<ScrollView
				contentContainerStyle={styles.contentContainer(safeAreaInsets)}
				showsVerticalScrollIndicator={false}
			>
				{semesterOptions.map((option, index) => (
					<Command
						key={index}
						style={[
							styles.command,
							option.value === currentSemester && styles.activeCommand,
							index === semesterOptions.length - 1 && styles.lastCommand
						]}
						title={option.label}
						endSlot={<ArrowRightIcon />}
						onPress={() => selectSemester(option.value)}
					/>
				))}
			</ScrollView>
		</View>
	);
};

const stylesheet = createStyleSheet(theme => ({
	mutationError: {
		marginBottom: 4,
		textAlign: 'center'
	},
	divider: {
		marginBottom: 2
	},
	contentContainer: (safeAreaInsets: EdgeInsets) => ({
		flexDirection: 'column',
		paddingBottom: theme.spacing + safeAreaInsets.bottom,
		rowGap: 2
	}),
	command: {
		borderRadius: 2
	},
	activeCommand: {
		backgroundColor: theme.colors.primaryAlpha(0.05)
	},
	lastCommand: {
		borderBottomStartRadius: theme.borderRadius,
		borderBottomEndRadius: theme.borderRadius
	}
}));
