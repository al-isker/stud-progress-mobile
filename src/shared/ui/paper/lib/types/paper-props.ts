import { Ref } from 'react';
import { StyleProp, View, ViewProps, ViewStyle } from 'react-native';

export type PaperProps = ViewProps & {
	ref?: Ref<View>;
	contentContainerStyle?: StyleProp<ViewStyle>;
};
