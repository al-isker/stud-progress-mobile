import { Ref } from 'react';
import { Image, StyleProp, View, ViewProps, ViewStyle } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native-unistyles';
import { AppIcon } from '@/shared/assets/images';
import { Paper } from '../../paper/ui/Paper';

export type OutsideMainLayoutProps = ViewProps & {
	ref?: Ref<View>;
	contentContainerStyle?: StyleProp<ViewStyle>;
	safeAreaInsets?: Partial<EdgeInsets>;
};

export const OutsideMainLayout = ({
	children,
	style,
	contentContainerStyle,
	safeAreaInsets,
	...props
}: OutsideMainLayoutProps) => (
	<View style={[styles.layout, style]} {...props}>
		<View style={styles.safeAreaContainer(safeAreaInsets)}>
			<View style={styles.header}>
				<Image style={styles.appIcon} source={AppIcon} />
			</View>

			<Paper style={styles.paper(safeAreaInsets)} disableAndroidBorder>
				<View style={[styles.contentContainer, contentContainerStyle]}>
					{children}
				</View>
			</Paper>
		</View>
	</View>
);

const styles = StyleSheet.create(theme => ({
	layout: {
		flex: 1,
		backgroundColor: theme.colors.primary
	},
	safeAreaContainer: (safeAreaInsets?: Partial<EdgeInsets>) => ({
		flex: 1,
		paddingTop: safeAreaInsets?.top,
		paddingRight: safeAreaInsets?.right,
		paddingLeft: safeAreaInsets?.left
	}),
	header: {
		flex: 0.3,
		flexShrink: 1,
		rowGap: 4,
		justifyContent: 'center',
		alignItems: 'center'
	},
	appIcon: {
		height: '85%',
		aspectRatio: 1
	},
	title: {
		fontSize: 28
	},
	paper: (safeAreaInsets?: Partial<EdgeInsets>) => ({
		flex: 0.7,
		paddingBottom: safeAreaInsets?.bottom,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0
	}),
	contentContainer: {
		flex: 1
	}
}));
