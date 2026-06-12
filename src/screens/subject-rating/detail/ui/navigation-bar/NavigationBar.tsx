import { router } from 'expo-router';
import { IconButton } from '@/shared/ui/icon-button';
import { ArrowLeftIcon } from '@/shared/ui/icons';

export const NavigationBar = () => {
	const handleBackPress = () => {
		router.back();
	};

	return (
		<IconButton
			variant='secondary'
			size='small'
			icon={ArrowLeftIcon}
			onPress={handleBackPress}
		/>
	);
};
