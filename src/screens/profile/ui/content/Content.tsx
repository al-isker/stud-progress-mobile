import { ScrollView, StyleProp, ViewStyle } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { ProfileType } from '@/entities/profile';
import { ProfileIcon } from '@/shared/assets/icons';
import { Paper } from '@/shared/ui/paper';
import { RefreshControl } from '@/shared/ui/refresh-control';
import { Typography } from '@/shared/ui/typography';
import { MenuSection } from '../menu-section/MenuSection';
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
	const { theme } = useStyles();

	return (
		<ScrollView
			contentContainerStyle={[{ rowGap: theme.spacing }, contentContainerStyle]}
			style={style}
			showsVerticalScrollIndicator={false}
			refreshControl={
				<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
			}
		>
			<Paper>
				<ProfileIcon height={220} color={theme.colors.primary} />
			</Paper>

			<Paper style={{ padding: theme.spacing * 1.5 }}>
				<Typography variant='h2'>{profile.fullName}</Typography>
			</Paper>

			<StatsSection course={profile.course} semester={profile.semester} />

			<MenuSection />
		</ScrollView>
	);
};
