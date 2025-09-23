import { Platform } from 'react-native';
import { PressableAndroid } from '../pressable-android/PressableAndroid';
import { PressableIOS } from '../pressable-ios/PressableIOS';

export const Pressable = Platform.select({
	android: PressableAndroid,
	ios: PressableIOS
})!;
