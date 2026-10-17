import { ChannelType } from './channel';

export const createRGBWithAlpha = <C extends ChannelType>(channel: C) => {
	return <N extends number>(alpha: N) => `rgba(${channel}, ${alpha})` as const;
};
