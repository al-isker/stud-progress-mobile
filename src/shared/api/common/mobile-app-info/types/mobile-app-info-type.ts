import { AppVersionType } from './app-version-type';

export type MobileAppInfoType = {
	minSupportedVersion: AppVersionType;
	linkToGooglePlay: string;
	linkToAppStore: string;
};
