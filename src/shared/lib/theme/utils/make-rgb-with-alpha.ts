import { Channel } from '../types/channel';

export const makeRGBWithAlpha = (channel: Channel) => {
	return (alpha: number) => `rgba(${channel}, ${alpha})`;
};
