import { Ref } from 'react';
import { Platform, View, ViewProps } from 'react-native';
import {
	UnistylesVariants,
	createStyleSheet,
	useStyles
} from 'react-native-unistyles';

export type PaperProps = ViewProps &
	UnistylesVariants<typeof stylesheet> & {
		ref?: Ref<View>;
	};

export const Paper = ({
	style,
	disableAndroidBorder = false,
	...props
}: PaperProps) => {
	const { styles } = useStyles(stylesheet, { disableAndroidBorder });

	return <View style={[styles.paper, style]} {...props} />;
};

const stylesheet = createStyleSheet(theme => ({
	paper: {
		borderRadius: theme.borderRadius * 2,
		backgroundColor: theme.colors.bgPaper,

		...Platform.select({
			android: {
				variants: {
					disableAndroidBorder: {
						false: {
							borderWidth: 0.8,
							borderColor: theme.colors.alwaysBlackAlpha(0.04)
						}
					}
				}
			},
			ios: {
				shadowOffset: {
					width: 0,
					height: 2
				},
				shadowOpacity: 0.23,
				shadowRadius: 2.62,
				shadowColor: theme.colors.alwaysBlackAlpha(0.65)
			}
		})
	}
}));
