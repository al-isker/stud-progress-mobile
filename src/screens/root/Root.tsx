import { Redirect } from 'expo-router';
import { routes } from '@/shared/config/navigation';

export const Root = () => {
	return <Redirect href={routes.subjectRating} />;
};
