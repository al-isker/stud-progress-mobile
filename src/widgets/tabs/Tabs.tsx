import { Tabs as NativeTabs } from 'expo-router';
import { useUnistyles } from 'react-native-unistyles';
import { ScreenNames } from '@/shared/config/navigation';
import { GradeIcon, HomeIcon, ProfileIcon, StatsIcon } from '@/shared/ui/icons';
import { Pressable } from '@/shared/ui/pressable';

export const Tabs = () => {
	const { theme, rt } = useUnistyles();

	return (
		<NativeTabs
			safeAreaInsets={{ bottom: rt.insets.bottom }}
			detachInactiveScreens={false}
			screenOptions={{
				animation: 'shift',
				transitionSpec: {
					animation: 'spring',
					config: {
						overshootClamping: true,
						mass: 0.1
					}
				},
				headerShown: false,
				sceneStyle: {
					backgroundColor: theme.colors.bgBase
				},
				tabBarStyle: {
					height: 60 + rt.insets.bottom,
					backgroundColor: theme.colors.bgPaper,
					elevation: 0,
					boxShadow: `0 -2px 8px ${theme.colors.alwaysBlackAlpha(0.075)}`
				},
				tabBarButton: ({ ref, android_ripple, style, ...props }) => (
					<Pressable
						style={[{ paddingVertical: 10 }, style]}
						feedbackColor={theme.colors.primaryAlpha(0.1)}
						{...props}
					/>
				),
				tabBarActiveTintColor: theme.colors.primary,
				tabBarInactiveTintColor: theme.colors.blackAlpha(0.4),
				tabBarLabelStyle: {
					fontSize: 11,
					fontFamily: theme.typography.fontFamily.GolosText,
					fontWeight: 500
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
