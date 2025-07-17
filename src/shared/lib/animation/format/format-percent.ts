export const formatPercent = (value: number | null) => {
	'worklet';

	if (value === null) {
		return '−';
	}

	return `${Math.trunc(value)}%`;
};
