import { Tabs as ExpoTabs } from 'expo-router';
import { useStyles } from 'react-native-unistyles';
import {
	GradeIcon,
	HomeIcon,
	ProfileIcon,
	StatsIcon
} from '@/shared/assets/icons';
import { Routes } from '@/shared/config/navigation';

export const Tabs = () => {
	const { theme } = useStyles();

	return (
		<ExpoTabs
			screenOptions={{
				animation: 'shift',
				headerShown: false,
				sceneStyle: {
					backgroundColor: theme.colors.background
				},
				tabBarActiveTintColor: theme.colors.primary,
				tabBarInactiveTintColor: theme.colors.action,
				tabBarStyle: {
					height: 60,
					paddingTop: 5,
					paddingBottom: 5,
					backgroundColor: theme.colors.paper
				},
				tabBarLabelStyle: {
					fontSize: 11,
					fontFamily: theme.typography.fontFamily.GolosTextMedium
				}
			}}
		>
			<ExpoTabs.Screen
				name={Routes.HOME}
				options={{
					title: 'Главная',
					tabBarIcon: HomeIcon
				}}
			/>
			<ExpoTabs.Screen
				name={Routes.GRADE}
				options={{
					title: 'Сессия',
					tabBarIcon: GradeIcon
				}}
			/>
			<ExpoTabs.Screen
				name={Routes.STATS}
				options={{
					title: 'Статистика',
					tabBarIcon: StatsIcon
				}}
			/>
			<ExpoTabs.Screen
				name={Routes.PROFILE}
				options={{
					title: 'Профиль',
					tabBarIcon: ProfileIcon
				}}
			/>
		</ExpoTabs>
	);
};
