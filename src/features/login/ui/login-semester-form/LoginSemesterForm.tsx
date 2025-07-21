import { ScrollView, StyleProp, View, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { semesterOptions } from '@/entities/semester';
import { ArrowRightIcon } from '@/shared/assets/icons';
import { Command } from '@/shared/ui/command';
import { Divider } from '@/shared/ui/divider';
import { useSemesterForm } from '../../model/hooks/use-semester-form';

type LoginSemesterFormProps = {
	style?: StyleProp<ViewStyle>;
};

export const LoginSemesterForm = ({ style }: LoginSemesterFormProps) => {
	const { styles } = useStyles(stylesheet);

	const { selectSemester } = useSemesterForm();

	return (
		<View style={style}>
			<Divider style={styles.divider} />

			<ScrollView
				contentContainerStyle={styles.scrollViewContent}
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
	scrollViewContent: {
		flexDirection: 'column',
		rowGap: 2,
		paddingBottom: theme.spacing
	},
	command: {
		borderRadius: 2
	},
	lastCommand: {
		borderBottomStartRadius: theme.borderRadius,
		borderBottomEndRadius: theme.borderRadius
	}
}));
