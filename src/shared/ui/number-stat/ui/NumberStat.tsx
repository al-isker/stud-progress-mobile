import { ReactElement, ReactNode } from 'react';
import { Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { SlotProps, renderSlot } from '@/shared/lib/slot';
import { Paper, PaperProps } from '../../paper';

export type NumberStatProps = PaperProps & {
	title?: string;
	value?: ReactNode;
	valueHint?: string;
	headerStartSlot?: ReactElement<SlotProps>;
	mainStartSlot?: ReactElement<SlotProps>;
};

export const NumberStat = ({
	style,
	title,
	value,
	valueHint,
	headerStartSlot,
	mainStartSlot,
	...props
}: NumberStatProps) => {
	const { styles, theme } = useStyles(stylesheet);

	return (
		<Paper style={[styles.paper, style]} {...props}>
			<View style={styles.header}>
				{renderSlot(headerStartSlot, {
					style: styles.headerStartSlot,
					color: theme.colors.primary
				})}
				<Text style={styles.title}>{title}</Text>
			</View>

			<View style={styles.main}>
				{renderSlot(mainStartSlot, {
					style: styles.mainStartSlot,
					color: theme.colors.blackAlpha(0.8)
				})}
				<Text style={styles.value}>{value}</Text>
				<Text style={styles.valueHint}>{valueHint}</Text>
			</View>
		</Paper>
	);
};

const stylesheet = createStyleSheet(theme => ({
	paper: {
		flex: 1,
		rowGap: theme.spacing * 1.5,
		padding: theme.spacing * 1.5
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		columnGap: 5
	},
	title: {
		fontFamily: theme.typography.fontFamily.GolosTextRegular,
		fontSize: 14,
		color: theme.colors.blackAlpha(0.85)
	},
	headerStartSlot: {
		width: 20,
		height: 20
	},
	main: {
		flexDirection: 'row',
		columnGap: 4,
		alignItems: 'center'
	},
	mainStartSlot: {
		marginTop: 3,
		width: 18,
		height: 18
	},
	value: {
		fontFamily: theme.typography.fontFamily.GolosTextBold,
		fontSize: 26,
		color: theme.colors.blackAlpha(0.85)
	},
	valueHint: {
		alignSelf: 'flex-end',
		marginBottom: 3,
		fontFamily: theme.typography.fontFamily.GolosTextRegular,
		fontSize: 12,
		color: theme.colors.blackAlpha(0.65)
	}
}));
