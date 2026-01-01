import { Platform } from 'react-native';
import { PaperAndroid } from './PaperAndroid';
import { PaperIOS } from './PaperIOS';

export const Paper = Platform.select({
	android: PaperAndroid,
	ios: PaperIOS
})!;
