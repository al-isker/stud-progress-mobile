import { ScrollView, StyleProp, ViewStyle } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';
import { ProfileType } from '@/entities/profile';
import { ProfileIcon } from '@/shared/assets/icons';
import { Paper } from '@/shared/ui/paper';
import { RefreshControl } from '@/shared/ui/refresh-control';
import { MenuSection } from '../menu-section/MenuSection';
import { NameSection } from '../name-section/NameSection';
import { StatsSection } from '../stats-section/StatsSection';

type ContentProps = {
	contentContainerStyle?: StyleProp<ViewStyle>;
	style?: StyleProp<ViewStyle>;
	profile: ProfileType;
	refreshing: boolean;
	onRefresh: () => void;
};

export const Content = ({
	contentContainerStyle,
	style,
	profile,
	refreshing,
	onRefresh
}: ContentProps) => {
	const { theme } = useUnistyles();

	return (
		<ScrollView
			style={style}
			contentContainerStyle={[{ rowGap: theme.spacing }, contentContainerStyle]}
			showsVerticalScrollIndicator={false}
			refreshControl={
				<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
			}
		>
			<Paper>
				<ProfileIcon height={220} color={theme.colors.primary} />
			</Paper>

			<NameSection fullName={profile.fullName} />

			<StatsSection course={profile.course} semester={profile.semester} />

			<MenuSection />
		</ScrollView>
	);
};
