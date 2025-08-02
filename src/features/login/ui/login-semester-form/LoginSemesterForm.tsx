import { ScrollView, StyleProp, View, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { semesterOptions } from '@/entities/semester';
import { ArrowRightIcon } from '@/shared/assets/icons';
import { Command } from '@/shared/ui/command';
import { Divider } from '@/shared/ui/divider';
import { useLoginSemesterForm } from '../../model/hooks/use-login-semester-form';

type LoginSemesterFormProps = {
	style?: StyleProp<ViewStyle>;
};

export const LoginSemesterForm = ({ style }: LoginSemesterFormProps) => {
	const { styles } = useStyles(stylesheet);

	const { selectSemester } = useLoginSemesterForm();

	return (
		<View style={style}>
			<Divider style={styles.divider} />

			<ScrollView
				contentContainerStyle={styles.scrollViewContentContainer}
				showsVerticalScrollIndicator={false}
			>
				{semesterOptions.map((option, index) => (
					<Command
						key={index}
						style={[
							styles.command,
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
	divider: {
		marginBottom: 2
	},
	scrollViewContentContainer: {
		flexDirection: 'column',
		paddingBottom: theme.spacing,
		rowGap: 2
	},
	command: {
		borderRadius: 2
	},
	lastCommand: {
		borderBottomStartRadius: theme.borderRadius,
		borderBottomEndRadius: theme.borderRadius
	}
}));
