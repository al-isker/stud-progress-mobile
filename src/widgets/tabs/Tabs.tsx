import { Tabs as NativeTabs } from 'expo-router';
import { useStyles } from 'react-native-unistyles';
import {
	GradeIcon,
	HomeIcon,
	ProfileIcon,
	StatsIcon
} from '@/shared/assets/icons';
import { ScreenNames } from '@/shared/config/navigation';

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
				},
				transitionSpec: {
					animation: 'spring',
					config: {
						overshootClamping: true,
						mass: 0.1
					}
				}
			}}
		>
			<NativeTabs.Screen
				name={ScreenNames.TAB_SUBJECT_RATING}
				options={{
					title: 'Главная',
					tabBarIcon: HomeIcon
				}}
			/>
			<NativeTabs.Screen
				name={ScreenNames.TAB_SUBJECT_GRADE}
				options={{
					title: 'Сессия',
					tabBarIcon: GradeIcon
				}}
			/>
			<NativeTabs.Screen
				name={ScreenNames.TAB_SUBJECT_STATS}
				options={{
					title: 'Статистика',
					tabBarIcon: StatsIcon
				}}
			/>
			<NativeTabs.Screen
				name={ScreenNames.TAB_PROFILE}
				options={{
					title: 'Профиль',
					tabBarIcon: ProfileIcon
				}}
			/>
		</NativeTabs>
	);
};
