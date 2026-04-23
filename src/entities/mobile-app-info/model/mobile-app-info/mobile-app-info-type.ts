import { appVersionType } from '../app-version/app-version-type';

export type MobileAppInfoType = {
	minSupportedVersion: appVersionType;
	linkToGooglePlay: string;
	linkToAppStore: string;
};
