import { Channel } from '../types/channel';

export const createRGBWithAlpha = (channel: Channel) => {
	return (alpha: number) => `rgba(${channel}, ${alpha})`;
};
