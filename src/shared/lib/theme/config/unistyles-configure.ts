import { StyleSheet } from 'react-native-unistyles';
import { LIGHT_THEME } from '../const/themes';

export const unistylesConfigure = () => {
	StyleSheet.configure({
		themes: {
			light: LIGHT_THEME
		}
	});
};
