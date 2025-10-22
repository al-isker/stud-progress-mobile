import AsyncStorage from '@react-native-async-storage/async-storage';

export class AsyncJSONStorage {
	static async getItem<T = unknown>(key: string) {
		const storageValue = await AsyncStorage.getItem(key);

		if (storageValue) {
			return JSON.parse(storageValue) as T;
		}

		return null;
	}

	static async setItem(key: string, value: unknown) {
		const stringValue = JSON.stringify(value) ?? 'null';

		await AsyncStorage.setItem(key, stringValue);
	}
}
