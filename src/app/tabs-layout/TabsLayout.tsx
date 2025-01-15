import { Tabs } from 'expo-router';

export const TabsLayout = () => {
	return (
		<Tabs>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Главная',
					headerShown: false
				}}
			/>
			<Tabs.Screen
				name='grade'
				options={{
					title: 'Сессия',
					headerShown: false
				}}
			/>
			<Tabs.Screen
				name='stats'
				options={{
					title: 'Статистика',
					headerShown: false
				}}
			/>
			<Tabs.Screen
				name='profile'
				options={{
					title: 'Профиль',
					headerShown: false
				}}
			/>
		</Tabs>
	);
};
