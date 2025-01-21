import { Tabs as ExpoTabs } from 'expo-router';
import {
	GradeIcon,
	HomeIcon,
	ProfileIcon,
	StatsIcon
} from '@/shared/assets/icons';
import { Routes } from '@/shared/config/navigation';
import { COLORS, FONT_FAMILY } from '@/shared/constants/theme';

export const Tabs = () => {
	return (
		<ExpoTabs
			screenOptions={{
				animation: 'shift',
				headerShown: false,
				sceneStyle: {
					backgroundColor: COLORS.background
				},
				tabBarActiveTintColor: COLORS.primary,
				tabBarInactiveTintColor: COLORS.action,
				tabBarStyle: {
					height: 60,
					paddingTop: 5,
					paddingBottom: 5,
					backgroundColor: COLORS.paper
				},
				tabBarLabelStyle: {
					fontSize: 11,
					fontFamily: FONT_FAMILY['golos-medium']
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
