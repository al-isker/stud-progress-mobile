import { ScrollView, StyleProp, Text, View, ViewStyle } from 'react-native';
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
						title={option.label}
						StartSlot={({ style }) => (
							<Text style={[style, styles.number]}>{option.value}</Text>
						)}
						EndSlot={ArrowRightIcon}
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
		rowGap: 2
	},
	number: {
		fontFamily: theme.typography.fontFamily.GolosTextRegular,
		fontSize: 14
	}
}));
