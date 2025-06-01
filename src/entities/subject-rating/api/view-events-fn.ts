import { api } from '@/shared/api';

export const viewEventsFn = async (subjectId: number) => {
	return (await api.patch(`subject/${subjectId}/view-events`)).data;
};
