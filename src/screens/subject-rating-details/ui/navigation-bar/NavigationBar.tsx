import { router } from 'expo-router';
import { ArrowLeftIcon } from '@/shared/assets/icons';
import { IconButton } from '@/shared/ui/icon-button';

export const NavigationBar = () => {
	const handleBackPress = () => {
		router.back();
	};

	return (
		<IconButton variant='secondary' size='small' onPress={handleBackPress}>
			<ArrowLeftIcon />
		</IconButton>
	);
};
