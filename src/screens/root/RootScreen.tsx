import { Redirect } from 'expo-router';
import { routes } from '@/shared/config/navigation';

export const RootScreen = () => {
	return <Redirect href={routes.subjectRating} />;
};
