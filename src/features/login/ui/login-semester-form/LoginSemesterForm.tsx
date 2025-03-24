import React from 'react';
import { Link } from 'expo-router';
import { ScrollView, StyleProp, Text, View, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { semesterOptions } from '@/entities/semester';
import { ArrowRightIcon } from '@/shared/assets/icons';
import { routes } from '@/shared/config/navigation';
import { Command } from '@/shared/ui/command';
import { Divider } from '@/shared/ui/divider';
import { useSemesterForm } from '../../model/hooks/use-semester-form';

interface LoginSemesterFormProps {
	style?: StyleProp<ViewStyle>;
}

export const LoginSemesterForm = ({ style }: LoginSemesterFormProps) => {
	const { styles } = useStyles(stylesheet);

	const { selectSemester } = useSemesterForm();

	return (
		<View style={style}>
			<Divider style={styles.divider} />

			<ScrollView contentContainerStyle={styles.scrollViewContent}>
				{semesterOptions.map((option, index) => (
					<Link key={index} href={routes.loginMain} asChild>
						<Command
							title={option.label}
							StartIcon={props => <Text {...props}>{option.value}</Text>}
							EndIcon={ArrowRightIcon}
							onPress={() => selectSemester(option.value)}
						/>
					</Link>
				))}
			</ScrollView>
		</View>
	);
};

const stylesheet = createStyleSheet(() => ({
	divider: {
		marginBottom: 2
	},
	scrollViewContent: {
		flexDirection: 'column',
		rowGap: 2
	}
}));
