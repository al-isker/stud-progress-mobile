import { Tabs as NativeTabs } from 'expo-router';
import { useStyles } from 'react-native-unistyles';
import {
	GradeIcon,
	HomeIcon,
	ProfileIcon,
	StatsIcon
} from '@/shared/assets/icons';
import { getScreenName, routes } from '@/shared/config/navigation';

export const Tabs = () => {
	const { theme } = useStyles();

	return (
		<NativeTabs
			screenOptions={{
				animation: 'shift',
				headerShown: false,
				sceneStyle: {
					backgroundColor: theme.colors.bgBase
				},
				tabBarActiveTintColor: theme.colors.primary,
				tabBarInactiveTintColor: theme.colors.blackAlpha(0.4),
				tabBarStyle: {
					height: 60,
					paddingTop: 5,
					paddingBottom: 5,
					backgroundColor: theme.colors.bgPaper
				},
				tabBarLabelStyle: {
					fontSize: 11,
					fontFamily: theme.typography.fontFamily.GolosTextMedium
				}
			}}
		>
			<NativeTabs.Screen
				name={getScreenName(routes.home)}
				options={{
					title: 'Главная',
					tabBarIcon: HomeIcon
				}}
			/>
			<NativeTabs.Screen
				name={getScreenName(routes.grade)}
				options={{
					title: 'Сессия',
					tabBarIcon: GradeIcon
				}}
			/>
			<NativeTabs.Screen
				name={getScreenName(routes.stats)}
				options={{
					title: 'Статистика',
					tabBarIcon: StatsIcon
				}}
			/>
			<NativeTabs.Screen
				name={getScreenName(routes.profile)}
				options={{
					title: 'Профиль',
					tabBarIcon: ProfileIcon
				}}
			/>
		</NativeTabs>
	);
};
