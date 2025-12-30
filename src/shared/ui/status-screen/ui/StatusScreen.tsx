import { ReactElement, ReactNode, Ref } from 'react';
import { Insets, Text, View, ViewProps } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { SlotProps, renderSlot } from '@/shared/lib/slot';

export type StatusScreenProps = ViewProps & {
	ref?: Ref<View>;
	safeAreaInsets?: Insets;
	iconSlot?: ReactElement<SlotProps>;
	title?: string;
	description?: string;
	actions?: ReactNode;
};

export const StatusScreen = ({
	style,
	safeAreaInsets,
	iconSlot,
	title,
	description,
	actions,
	...props
}: StatusScreenProps) => (
	<View style={[styles.container, style]} {...props}>
		<View style={styles.safeAreaContainer(safeAreaInsets)}>
			{renderSlot(iconSlot, { style: styles.icon })}

			<View style={styles.contentContainer}>
				{title && <Text style={styles.title}>{title}</Text>}

				{description && <Text style={styles.description}>{description}</Text>}
			</View>

			{actions && <View style={styles.actions}>{actions}</View>}
		</View>
	</View>
);

const styles = StyleSheet.create(theme => ({
	container: {
		flex: 1
	},
	safeAreaContainer: (safeAreaInsets?: Insets) => ({
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: safeAreaInsets?.top,
		paddingRight: safeAreaInsets?.right,
		paddingBottom: safeAreaInsets?.bottom,
		paddingLeft: safeAreaInsets?.left
	}),
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
