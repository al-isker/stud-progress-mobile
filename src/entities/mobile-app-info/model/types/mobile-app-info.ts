import { appVersionType } from './app-version';

export type MobileAppInfoType = {
	minSupportedVersion: appVersionType;
	linkToGooglePlay: string;
	linkToAppStore: string;
};
