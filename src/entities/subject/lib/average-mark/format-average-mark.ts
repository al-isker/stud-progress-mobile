export const formatAverageMark = (value: number | null) => {
	'worklet';

	if (value === null) {
		return '−';
	}

	return value.toFixed(1);
};
