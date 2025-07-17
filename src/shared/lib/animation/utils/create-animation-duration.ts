export const createAnimationDuration = (
	maxDuration: number,
	currentValue: number,
	newValue: number,
	maxValue: number
) => {
	const differenceValues = Math.abs(newValue - currentValue);

	return (differenceValues / maxValue) * maxDuration;
};
