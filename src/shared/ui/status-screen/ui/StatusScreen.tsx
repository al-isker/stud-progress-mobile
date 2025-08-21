import { ReactElement, ReactNode } from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';
import { SlotProps, renderSlot } from '@/shared/lib/slot';

export type StatusScreenProps = {
	style?: StyleProp<ViewStyle>;
	iconSlot?: ReactElement<SlotProps>;
	title?: string;
	description?: string;
	actions?: ReactNode;
};

export const StatusScreen = ({
	style,
	iconSlot,
	title,
	description,
	actions
}: StatusScreenProps) => {
	const { styles } = useStyles(stylesheet);

	return (
		<View style={[styles.container, style]}>
			{renderSlot(iconSlot, { style: styles.icon })}

			<View style={styles.contentContainer}>
				{title && <Text style={styles.title}>{title}</Text>}

				{description && <Text style={styles.description}>{description}</Text>}
			</View>

			{actions && <View style={styles.actions}>{actions}</View>}
		</View>
	);
};

const stylesheet = createStyleSheet(theme => ({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	contentContainer: {
		paddingHorizontal: 24,
		justifyContent: 'center',
		alignItems: 'center',
		rowGap: 6
	},
	icon: {
		width: 40,
		height: 40,
		marginBottom: 4
	},
	title: {
		textAlign: 'center',
		color: theme.colors.blackAlpha(0.8),
		fontSize: 20,
		fontFamily: theme.typography.fontFamily.GolosTextSemiBold
	},
	description: {
		textAlign: 'center',
		color: theme.colors.blackAlpha(0.65),
		fontSize: 14,
		fontFamily: theme.typography.fontFamily.GolosTextRegular
	},
	actions: {
		marginTop: 14,
		alignItems: 'baseline',
		rowGap: 8
	}
}));
