import { ChannelType } from '../types/channel';

export const createRGBWithAlpha = (channel: ChannelType) => {
	return (alpha: number) => `rgba(${channel}, ${alpha})`;
};
