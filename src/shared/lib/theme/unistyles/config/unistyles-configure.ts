import { StyleSheet } from 'react-native-unistyles';
import { THEMES } from '../../themes/themes';

export const unistylesConfigure = () => {
	StyleSheet.configure({
		themes: THEMES
	});
};
