import { ChannelType } from './channel';

export const createRGB = <C extends ChannelType>(channel: C) => {
	return `rgb(${channel})` as const;
};
