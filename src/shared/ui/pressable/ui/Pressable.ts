import { Platform } from 'react-native';
import { PressableAndroid } from './PressableAndroid';
import { PressableIOS } from './PressableIOS';

export const Pressable = Platform.select({
	android: PressableAndroid,
	ios: PressableIOS
})!;
