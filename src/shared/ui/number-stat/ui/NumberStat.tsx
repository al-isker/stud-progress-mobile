import { ReactNode, Ref } from 'react';
import { Text, View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import { RenderSlotType, createSlot } from '@/shared/lib/slot';
import { Paper, PaperProps } from '../../paper';

export type NumberStatProps = PaperProps & {
	ref?: Ref<View>;
	title?: string;
	value?: ReactNode;
	valueHint?: string;
	renderHeaderLeftIcon?: RenderSlotType<SvgProps>;
	renderMainLeftIcon?: RenderSlotType<SvgProps>;
};

export const NumberStat = ({
	style,
	title,
	value,
	valueHint,
	renderHeaderLeftIcon,
	renderMainLeftIcon,
	...props
}: NumberStatProps) => {
	const { theme } = useUnistyles();

	return (
		<Paper style={[styles.container, style]} {...props}>
			<View style={styles.header}>
				{createSlot(renderHeaderLeftIcon, {
					style: styles.headerIcon,
					color: theme.colors.primary
				})}
				<Text style={styles.title}>{title}</Text>
			</View>

			<View style={styles.main}>
				{createSlot(renderMainLeftIcon, {
					style: styles.mainIcon,
					color: theme.colors.blackAlpha(0.8)
				})}
				<Text style={styles.value}>{value}</Text>
				<Text style={styles.valueHint}>{valueHint}</Text>
			</View>
		</Paper>
	);
};

const styles = StyleSheet.create(theme => ({
	container: {
		rowGap: theme.spacing * 1.2,
		padding: theme.spacing * 1.5
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		columnGap: 5
	},
	title: {
		fontFamily: theme.typography.fontFamily.GolosText,
		fontWeight: 400,
		fontSize: 14,
		color: theme.colors.blackAlpha(0.85)
	},
	headerIcon: {
		width: 20,
		height: 20
	},
	main: {
		flexDirection: 'row',
		columnGap: 4,
		alignItems: 'center'
	},
	mainIcon: {
		marginTop: 3,
		width: 18,
		height: 18
	},
	value: {
		fontFamily: theme.typography.fontFamily.GolosText,
		fontWeight: 700,
		fontSize: 26,
		color: theme.colors.blackAlpha(0.85)
	},
	valueHint: {
		alignSelf: 'flex-end',
		marginBottom: 3,
		fontFamily: theme.typography.fontFamily.GolosText,
		fontWeight: 400,
		fontSize: 12,
		color: theme.colors.blackAlpha(0.65)
	}
}));
